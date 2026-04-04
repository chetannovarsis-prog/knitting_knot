import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { ChevronRight, Star, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import Hero from '../../components/store/Hero';
import Testimonials from '../../components/store/Testimonials';
import Benefits from '../../components/store/Benefits';
import ShoppableVideo from '../../components/store/ShoppableVideo';
import { ProductSkeleton, CircularCollectionSkeleton } from '../../components/store/Skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../services/useStore';

const Home = () => {
  const { homeData, setHomeData } = useStore();
  const [collections, setCollections] = useState(homeData?.collections || []);
  const [bestSellers, setBestSellers] = useState(homeData?.bestSellers || []);
  const [newArrivals, setNewArrivals] = useState(homeData?.newArrivals || []);
  const [bottomWear, setBottomWear] = useState(homeData?.bottomWear || []);
  const [topWear, setTopWear] = useState(homeData?.topWear || []);
  const [activeTab, setActiveTab] = useState('best-sellers');
  const [loading, setLoading] = useState(!homeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collRes, bestRes, newRes] = await Promise.allSettled([
          api.get('/collections'),
          api.get('/products/best-sellers'),
          api.get('/products/new-arrivals')
        ]);

        let updatedData = { ...homeData };

        if (collRes.status === 'fulfilled') {
          const collectionsData = Array.isArray(collRes.value.data)
            ? collRes.value.data
            : collRes.value.data?.data || [];
          const sorted = collectionsData.sort((a, b) => (a.order || 0) - (b.order || 0));
          setCollections(sorted);
          updatedData.collections = sorted;
        }
        if (bestRes.status === 'fulfilled') {
          setBestSellers(bestRes.value.data);
          updatedData.bestSellers = bestRes.value.data;
        }
        if (newRes.status === 'fulfilled') {
          setNewArrivals(newRes.value.data);
          updatedData.newArrivals = newRes.value.data;
          
          const bw = newRes.value.data?.filter(p => p.category?.toLowerCase().includes('bottom') || p.name?.toLowerCase().includes('pant') || p.name?.toLowerCase().includes('lower')) || [];
          const tw = newRes.value.data?.filter(p => p.category?.toLowerCase().includes('top') || p.name?.toLowerCase().includes('shirt') || p.name?.toLowerCase().includes('kurta')) || [];
          
          setBottomWear(bw);
          setTopWear(tw);
          updatedData.bottomWear = bw;
          updatedData.topWear = tw;
        }
        
        setHomeData(updatedData);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayProducts = activeTab === 'best-sellers' 
    ? bestSellers 
    : activeTab === 'new-arrivals' 
    ? newArrivals 
    : activeTab === 'bottom-wear'
    ? bottomWear
    : topWear;

  return (
    <div className="bg-white font-['Albert_Sans']">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          >
             <img src="/images/Logo_black.png" className="w-48 animate-pulse mb-8" alt="Logo" />
             <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
             <p className="mt-4 text-[0.6rem] font-black uppercase tracking-[0.3em] text-gray-400">Loading Experience...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />

      {/* SHOP BY COLLECTIONS (Circular Style) */}
      {/* <section className="py-24 container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight italic">Shop By Collections</h2>
          <div className="w-16 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {loading ? (
            Array(6).fill(0).map((_, i) => <CircularCollectionSkeleton key={i} />)
          ) : (
            <>
              {Array.isArray(collections) && collections.slice(0, 6).map((collection) => (
                <Link
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-black transition-all duration-500 p-1 shadow-xl">
                    <img
                      src={collection.imageUrl || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400'}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                      alt={collection.name}
                    />
                  </div>
                  <span className="text-[0.65rem] md:text-[0.7rem] font-black uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">{collection.name}</span>
                </Link>
              ))}

             
              <Link
                to="/collections"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-black transition-all duration-500 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-50 group-hover:bg-black transition-colors duration-500"></div>
                  <ChevronRight size={32} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-[0.65rem] md:text-[0.7rem] font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover All</span>
              </Link>
            </>
          )}
        </div>
      </section> */}

      {/* Featured Products Tabs */}
      <section className="py-24 bg-[#f6f3f1]">
        <div className="container mx-auto px-10">
          <div className="flex flex-col items-center mb-16">
            <div className="flex flex-wrap gap-4 md:gap-8 w-full justify-center mb-12">
              <button
                onClick={() => setActiveTab('best-sellers')}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-2xl border ${activeTab === 'best-sellers' ? 'bg-white text-black shadow-xs scale-105' : 'border-gray-100 hover:shadow-xl hover:text-orange-600 hover:translate-y-[-2px] hover:bg-orange-50'}`}
              >
                Best Sellers
              </button>
              <button
                onClick={() => setActiveTab('bottom-wear')}
               className={`px-4 py-2 text-sm transition-all duration-300 rounded-2xl border ${activeTab === 'bottom-wear' ? 'bg-white text-black shadow-xs scale-105' : 'border-gray-100 hover:shadow-xl hover:text-orange-600 hover:translate-y-[-2px] hover:bg-orange-50'}`}
              >
                Bottom Wear
              </button>
              <button
                onClick={() => setActiveTab('new-arrivals')}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-2xl border ${activeTab === 'new-arrivals' ? 'bg-white text-black shadow-xs scale-105' : 'border-gray-100 hover:shadow-xl hover:text-orange-600 hover:translate-y-[-2px] hover:bg-orange-50'}`}
              >
                New Arrivals
              </button>
              <button
                onClick={() => setActiveTab('top-wear')}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-2xl border ${activeTab === 'top-wear' ? 'bg-white text-black shadow-xs scale-105' : 'border-gray-100 hover:shadow-xl hover:text-orange-600 hover:translate-y-[-2px] hover:bg-orange-50'}`}
              >
                Top Wear
              </button>
            </div>
            <h2 className="text-4xl font-semibold mb-4 ">
              {activeTab === 'best-sellers' ? 'Popular Picks' : 'Latest Drops'}
            </h2>
            <p className="text-xl font-semibold text-gray-400 ">
              {activeTab === 'best-sellers' ? 'Most loved by our community' : 'Fresh styles just landed in our store'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12"
            >
              {loading ? (
                Array(5).fill(0).map((_, i) => <ProductSkeleton key={i} />)
              ) : (
                Array.isArray(displayProducts) && displayProducts.length > 0 ? (
                  displayProducts.slice(0, 10).map((product) => (
                    <Link key={product.id} to={`/products/${product.handle || product.id}`} className="group space-y-4 px-3 py-1 pb-4 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:bg-white border border-transparent hover:border-gray-50 hover:cursor-pointer hover:scale-105 hover:shadow-orange-300/50">
                      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 relative">
                        <img
                          src={product.thumbnailUrl || product.images?.[0]}
                          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${product.hoverThumbnailUrl || product.images?.[1] ? 'absolute inset-0 group-hover:opacity-0' : ''}`}
                          alt={product.name}
                        />
                        {(product.hoverThumbnailUrl || product.images?.[1]) && (
                          <img
                            src={product.hoverThumbnailUrl || product.images?.[1]}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            alt={`${product.name} hover`}
                          />
                        )}
                        {product.isDiscountable && (
                          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-widest shadow-lg">Sale</div>
                        )}
                      </div>
                      <div className="px-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-[0.65rem] md:text-[0.7rem] font-black uppercase tracking-tight text-gray-900 line-clamp-1">{product.name}</h4>
                        <p className="text-[0.55rem] text-gray-400 font-bold uppercase tracking-widest mt-1">{product.subtitle || 'Essential Piece'}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs font-black">₹{product.price}</span>
                          {product.isDiscountable && <span className="text-[0.65rem] text-gray-300 line-through">₹{product.price + (product.discountPrice || 0)}</span>}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[2rem] border-2 border-dashed border-gray-100">
                    <p className="text-2xl md:text-3xl font-black text-gray-200 uppercase tracking-[0.4em] animate-pulse">Coming Soon..........</p>
                    <p className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mt-4 italic-none">We are currently curating this collection</p>
                  </div>
                )
              )}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-20">
            <Link
              to="/collections/25a1dc7c-029e-44b9-b64b-e25e1525a4de"
              className="inline-flex items-center gap-3 bg-white text-black border border-black px-12 py-4 rounded-full text-[0.65rem] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>    
       
       {/* Benefits Section */}
      <Benefits />

      {/* Get to Know Us Better Section */}
      <section className="py-8 bg-[#fafafa]">
        <div className="px-6 md:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black  mb-4">Get to know us better</h2>
            <p className="text-xl text-gray-500">A closer look at who we are.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'About Us', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070', link: "/about" },
              { title: 'Our Journey', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070', link: "#" },
              { title: 'Our Store', img: '/images/knitting_knot.png', link: "/contact" },
            ].map(item => (
              <div key={item.title} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-lg">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                   <Link 
                     to={item.link} 
                     className={`px-6 py-2 rounded-full text-[0.6rem] font-black uppercase tracking-widest transition-all shadow-xl ${item.link === '#' ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white/90 backdrop-blur-sm text-black hover:bg-black hover:text-white'}`}
                     onClick={(e) => item.link === '#' && e.preventDefault()}
                   >
                      {item.link === '#' ? 'Coming Soon' : item.title}
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journal Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic">The Journal</h2>
                <p className="text-[0.6rem] md:text-[0.7rem] font-bold text-gray-400 uppercase tracking-[0.2em]">Threads of thoughtful living</p>
              </div>
              <Link to="/blog" className="text-[0.65rem] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                View All Stories
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'SAADAA JEEVAN', desc: 'Saree Jivan: Living with intention and grace.', img: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=1974' },
               { title: 'What Is Simplicity According To You?', desc: 'Exploring the essence of a minimalist lifestyle.', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070' },
               { title: 'The Art of Simple Living', desc: 'Curation of moments that matter the most.', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070' }
             ].map(post => (
               <div key={post.title} className="space-y-6 group cursor-pointer">
                 <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                       <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-white mb-2">{post.title}</h4>
                       <button className="text-[0.55rem] font-black uppercase tracking-widest text-white border-b border-white pb-0.5 group-hover:tracking-[0.2em] transition-all">Read More →</button>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section> */}

      {/* Shoppable Videos Section */}
      <ShoppableVideo />

      {/* Testimonials - Happy Clients */}
      <Testimonials />

      

      {/* Love Section - Banner */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <img src="/images/love.png" className="w-full h-full object-cover" alt="" />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        {/* <div className="relative z-10 text-center">
            <h2 className="text-[12rem] font-black text-white leading-none tracking-tighter mix-blend-overlay">LOVE</h2>
            <p className="text-xs font-black text-white/80 uppercase tracking-[1em] mt-[-2rem]">In Every Thread</p>
         </div> */}
      </section>

      {/* Store Section - Indore Store */}
      <section className="py-24 container mx-auto px-10">
        <div className="bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl ring-1 ring-black/5">
          <div className="flex-1 p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold mb-4 ">Our First Store in Indore</h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-10">
              Experience our collection in person. Visit our standalone store in the heart of Indore for a personalized styling session and exclusive in-store designs.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all shadow-lg">
                  <a
                    href="https://www.google.com/maps/place/Vikram+Urbane/@22.748421,75.8182107,13z/data=!4m6!3m5!1s0x3962fd57c7b315d5:0xe8e1287dffe4c75!8m2!3d22.748421!4d75.8903085!16s%2Fg%2F1q62k_zmf?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin size={18} /></a>
                </div>
                <span className="text-md font-semibold">Shop No. 03 , Vikram Urban , Vijay Nagar, Indore</span>
              </div>
              <a href="tel:+918878887015" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all shadow-lg font-black italic-none">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-semibold">+91 8878887015</span>
              </a>
            </div>

            <div className="mt-12 flex gap-4">
              <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full text-[0.65rem] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">Get Directions</Link>
              <div className="flex gap-2">
                <a href="https://www.instagram.com/knittingknot_official/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/knittingknot" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"><Facebook size={18} /></a>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[500px] lg:h-auto overflow-hidden">
            <img src="/images/knitting_knot.png" className="w-full h-full object-cover" alt="Indore Store" />
          </div>
        </div>
      </section>



          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Help helper icon component (placeholder)
const ImageIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export default Home;
