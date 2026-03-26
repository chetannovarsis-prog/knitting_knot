import React, { useState, useEffect } from 'react';
import api from '../../utils/api';



import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSkeleton } from './Skeleton';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await api.get('/banners');
        const list = Array.isArray(response.data) ? response.data : response.data?.data || [];
        // Normalize type and order before render
        const normalized = list.map((b) => ({
          ...b,
          type: (b.type || 'DESKTOP').toUpperCase(),
          order: Number.isInteger(b.order) ? b.order : 0,
          imageUrl: b.imageUrl || b.img || ''
        }));

        const sorted = normalized.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
        setBanners(sorted);

      } catch (error) {
        console.error('Error fetching banners:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);



  const defaultSlides = [
    {
      type: 'fashion',
      content: (
        <section className="relative h-full w-full flex items-center justify-center bg-[#f7f3f0] overflow-hidden">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-[10%] left-[15%] w-[300px] h-[450px] overflow-hidden shadow-2xl transition-transform duration-500 -rotate-3 hover:rotate-0 z-10">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" alt="Fashion 1" className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[450px] overflow-hidden shadow-2xl transition-transform duration-500 rotate-1 hover:rotate-0 z-30">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" alt="Fashion 2" className="w-full h-full object-cover shadow-2xl" />
            </div>
            <div className="absolute top-[15%] right-[15%] w-[300px] h-[450px] overflow-hidden shadow-2xl transition-transform duration-500 rotate-3 hover:rotate-0 z-10">
              <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" alt="Fashion 3" className="w-full h-full object-cover shadow-2xl" />
            </div>
          </div>
          <div className="relative z-20 text-center select-none flex flex-col items-center">
            <h1 className="text-[10rem] md:text-[15rem] font-bold text-[#111] tracking-tighter leading-[0.8] uppercase opacity-90">
              FASHION
            </h1>
            <button
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-12 py-5 bg-black text-white text-[0.7rem] font-bold uppercase tracking-[4px] hover:bg-zinc-800 transition-all active:scale-95 shadow-2xl shadow-black/20 pointer-events-auto"
            >
              Explore Collection
            </button>
          </div>
        </section>
      )
    }
  ];

  const activeBanners = banners
    .filter(b => b.type === (isMobile ? 'MOBILE' : 'DESKTOP'))
    .map(b => ({
      type: 'image',
      src: b.imageUrl,
      link: b.linkUrl,
      alt: b.altText || 'Banner'
    }));

  const slides = activeBanners.length > 0 ? [...activeBanners, ...defaultSlides] : defaultSlides;


  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (loading) return <HeroSkeleton />;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -100) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (x >= 100) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const MarqueeItem = ({ text }) => (
    <div className="flex items-center mx-10">
       <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="15" height="20" viewBox="0 0 15 20">
         <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8"></path>
       </svg>
       <span className="text-[0.65rem] font-bold uppercase tracking-[5px] text-white ml-4">{text}</span>
    </div>
  );

  return (
    <div className="relative">
      <section className="relative h-[65vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-[#f7f3f0] cursor-grab active:cursor-grabbing">
        <motion.div
          className="h-full w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          onDragEnd={onDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="w-full h-full pointer-events-auto">
                {slides[currentSlide].type === 'image' ? (
                  slides[currentSlide].link ? (
                    slides[currentSlide].link.startsWith('http') ? (
                      <a href={slides[currentSlide].link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} className="w-full h-full object-cover" />
                      </a>
                    ) : (
                      <Link to={slides[currentSlide].link} className="block w-full h-full">
                        <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} className="w-full h-full object-cover" />
                      </Link>
                    )
                  ) : (
                    <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} className="w-full h-full object-cover" />
                  )
                ) : (
                  slides[currentSlide].content
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-30 pointer-events-none">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} 
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-black hover:bg-white/40 transition-all active:scale-95 shadow-lg ring-1 ring-black/5 pointer-events-auto"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} 
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-black hover:bg-white/40 transition-all active:scale-95 shadow-lg ring-1 ring-black/5 pointer-events-auto"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-black w-8' : 'bg-black/20'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats row */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-2 group">
               <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tighter group-hover:text-[#c36a4e]  transition-all duration-300">7 Lakh+</h3>
               <p className="text-[0.7rem] font-medium text-gray-400 uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">Happy Customers</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0 md:px-12 group text-center">
               <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tighter group-hover:text-[#c36a4e]  transition-all duration-300">20,000+</h3>
               <p className="text-[0.7rem] font-medium text-gray-400 uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">Pincodes Reached</p>
            </div>
            <div className="space-y-2 group text-center md:text-right">
               <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tighter group-hover:text-[#c36a4e]  transition-all duration-300">15 Lakh+</h3>
               <p className="text-[0.7rem] font-medium text-gray-400 uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">Products Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

