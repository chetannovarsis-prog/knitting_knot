import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, User, Menu, Heart, X } from 'lucide-react';
import { useStore } from '../../services/useStore';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../utils/api';
import Sidebar from './Sidebar';


import { ProductSkeleton, CircularCollectionSkeleton } from './Skeleton';


const Navbar = () => {
  const { cart, wishlist, setCartOpen } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const searchInputRef = useRef(null);
  const autoCloseTimerRef = useRef(null);
  const searchContainerRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await api.get('/collections');
        const data = Array.isArray(response.data) ? response.data : response.data?.data || [];
        setCollections(data.sort((a, b) => (a.order || 0) - (b.order || 0)));
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setIsInputFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        return;
      }
      setIsSearching(true);
      try {
        const response = await api.get(`/products?search=${searchQuery}`);
        const data = response.data;
        const rankedData = data.map(product => {
          let score = 0;
          const q = searchQuery.toLowerCase();
          const name = (product.name || '').toLowerCase();
          if (name === q) score += 100;
          else if (name.startsWith(q)) score += 80;
          else if (name.includes(q)) score += 60;
          return { ...product, score };
        }).sort((a, b) => b.score - a.score);
        setSuggestions(rankedData.slice(0, 5));
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsSearching(false);
      }
    };
    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (isSearchOpen && !isInputFocused && searchQuery === '') {
      autoCloseTimerRef.current = setTimeout(() => {
        setIsSearchOpen(false);
      }, 30000);
    } else {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    }
    return () => { if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current); };
  }, [isSearchOpen, isInputFocused, searchQuery]);

  const handleSuggestionClick = (product) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSuggestions([]);
    navigate(`/products/${product.handle || product.id}`);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-[100] shadow-sm transition-all duration-500 ${
    isHome 
      ? isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm text-black border-b border-gray-100' 
        : 'bg-transparent text-white'
      : 'bg-white text-black border-b border-gray-100 shadow-sm'
  }`;

  const renderCollectionItem = (col, isSpecial = false) => (
    <Link 
      key={col.id || col.name} 
      to={col.to || `/collections/${col.id}`}
      className="flex flex-col items-center gap-2 flex-shrink-0 group w-16 md:w-20 font-['helvetica']"
    >
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-gray-100 transition-all p-[1px] bg-white ring-2 ring-transparent group-hover:ring-black/10 shadow-sm`}>
        <img 
          src={col.imageUrl} 
          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" 
          alt={col.name} 
        />
      </div>
      <span className="text-center font-medium text-sm pt-1 text-gray-900 group-hover:text-black transition-colors w-full break-words leading-tight">
        {col.name}
      </span>
    </Link>
  );

  const specialCollections = [
    { name: 'Buy 3 Get 1', imageUrl: '/images/buy3_get1.gif', to: '/collections/buy-3-get-1' },
    { name: 'New', imageUrl: '/images/new_drop.gif', to: '/new-arrivals' },
  ];

  const getInjectedCollections = () => {
    let result = [...collections];
    const buy3 = specialCollections[0];
    const newDrop = specialCollections[1];

    if (result.length >= 3) {
      result.splice(3, 0, buy3);
    } else {
      result.push(buy3);
    }

    if (result.length >= 6) {
      result.splice(6, 0, newDrop);
    } else {
      result.push(newDrop);
    }
    
    return result;
  };

  if (location.pathname === '/login' || location.pathname === '/signup') return null;

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} collections={collections} />
      
      <div className="fixed top-0 left-0 right-0 z-[100]">
        {/* Announcement Bar */}
        {/* <div className="bg-white text-black py-2 border-b border-gray-50 flex justify-center items-center overflow-hidden">
             <p className="text-[0.5rem] md:text-[0.6rem] font-black uppercase tracking-[0.2em] animate-pulse">
                OUR BEHTAR COTTON COLLECTION IS NOW LIVE - <Link to="/collections/all" className="underline font-black">SHOP NOW</Link>
             </p>
        </div> */}

        {/* Main Header */}
        <header className={`${navClasses} h-16 md:h-20 px-6 md:px-10 flex justify-between items-center gap-8`}>
          {/* Left: Hamburger & Search */}
          <div className="flex items-center gap-2 md:gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <Menu size={26} className="text-black group-hover:scale-110 transition-transform" />
            </button>
            <div 
              ref={searchContainerRef}
              className="relative flex items-center h-10 ml-2 group"
              onMouseEnter={() => setIsSearchOpen(true)}
              onMouseLeave={() => {
                if (!isInputFocused && searchQuery === '') setIsSearchOpen(false);
              }}
            >
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: window.innerWidth < 768 ? 'calc(100vw - 160px)' : 260, 
                      opacity: 1 
                    }}
                    exit={{ width: 0, opacity: 0 }}
                    className="absolute left-0 flex items-center bg-white border border-black/10 rounded-full px-4 py-2 shadow-2xl text-black z-[110] overflow-hidden"
                  >
                    <Search size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent border-none outline-none focus:ring-0 text-[0.6rem] font-black uppercase tracking-widest w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Search size={22} className="text-black" />
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="flex flex-col items-center">
              <img 
                className={`transition-all duration-500 ${isScrolled ? 'w-[120px] md:w-[150px]' : 'w-[140px] md:w-[220px]'} my-1 drop-shadow-sm`} 
                src="/images/Logo_black.png" 
                alt="Logo" 
              />
              {/* <p className="text-[0.4rem] md:text-[0.5rem] font-bold uppercase tracking-[0.5em] mt-[-2px] text-gray-400">KNITTING KNOT</p> */}
            </Link>
          </div>

          {/* Right: Icons & Cart */}
          <div className="flex items-center justify-end gap-2 md:gap-6 flex-1 text-black">
            <Link to="/profile" className="hidden lg:flex hover:opacity-50 transition-opacity">
              <User size={22} />
            </Link>
            
            <Link to="/wishlist" className="hidden lg:flex relative group cursor-pointer transition-transform active:scale-95">
              <Heart size={22} className="group-hover:text-red-500 transition-colors" />
              {wishlist.length > 0 && localStorage.getItem('customer') && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[0.5rem] w-4 h-4 rounded-full flex items-center justify-center font-black">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hidden lg:flex group cursor-pointer transition-transform active:scale-95">
              <ShoppingBag size={24} className="group-hover:opacity-50 transition-opacity" />
              {cart.length > 0 && localStorage.getItem('customer') && (
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[0.7rem] w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Suggestions Dropdown */}
          <AnimatePresence>
            {isSearchOpen && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-4 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 overflow-hidden z-[110] text-black"
              >
                <p className="text-[0.6rem] font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">Top Suggestions</p>
                <div className="space-y-2">
                  {suggestions.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSuggestionClick(product)}
                      className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl cursor-pointer group transition-all"
                    >
                      <div className="w-12 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                        {(product.thumbnailUrl || product.images?.[0]) && (
                          <img src={product.thumbnailUrl || product.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-tight">{product.name}</h4>
                        <p className="text-[0.65rem] text-gray-400 font-bold tracking-tighter mt-1">₹{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>

      {/* Collections Circular Navigation (NON-STICKY) */}
      {![
        '/about', 
        '/contact', 
        '/privacy', 
        '/returns', 
        '/terms', 
        '/support', 
        '/faq', 
        '/shipping'
      ].includes(location.pathname) && (
        <div className="bg-white/100 mt-[70px] md:mt-[65px] border-b border-gray-50 relative z-10">
          <div className="container mx-auto px-2 overflow-hidden">
            <div className="flex overflow-x-auto gap-6 md:gap-10 pt-6 pb-6 no-scrollbar items-start justify-start md:justify-center px-4">
              {loading ? (
                Array(8).fill(0).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 w-16 md:w-20">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 animate-pulse" />
                    <div className="h-2 w-10 bg-gray-100 animate-pulse rounded-full" />
                  </div>
                ))
              ) : (
                getInjectedCollections().slice(0, 12).map(col => renderCollectionItem(col, specialCollections.some(sc => sc.name === col.name)))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default Navbar;
