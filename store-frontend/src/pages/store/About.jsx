import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
            alt="About Knitting Knot" 
            className="w-full h-full object-cover scale-105 active:scale-100 transition-transform duration-[10s] ease-linear"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-[0.7rem] font-bold uppercase tracking-[0.4em] mb-6"
          >
            Since 2024
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-8"
          >
            KNITTING <span className="text-yellow-400 font-light italic-none">KNOT</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-20 h-1 bg-yellow-400 mx-auto"
          ></motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-[0.5rem] font-bold uppercase tracking-widest">Scroll to Discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6 md:px-10 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The Art of <br />
              <span className="text-gray-300">Conscious Craft</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed italic-none">
              Knitting Knot was born from a simple realization: the world has enough clothes, but not enough "better" clothes.
            </p>
            <div className="space-y-6 text-gray-600 leading-loose text-lg">
              <p>
                We started in a small workshop with a single mission—to redefine everyday essentials through superior fabrics and timeless silhouettes. Every piece we create is a "knot" between traditional craftsmanship and modern minimalism.
              </p>
              <p>
                Our collections are designed for the dreamers, the doers, and those who settle for nothing less than excellence. We don't just sell apparel; we sell the confidence that comes from wearing something truly better.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/collections/all" className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest group">
                Shop the Collection 
                <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-xl">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" 
                className="w-full h-full object-cover" 
                alt="Story Image" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400 rounded-3xl -z-10 animate-pulse hidden md:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our Core Values</h2>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">The pillars of Knitting Knot</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck className="text-yellow-400" size={40} />, title: 'Quality First', desc: 'No compromises. We source the finest long-staple cotton and premium blends.' },
              { icon: <Zap className="text-yellow-400" size={40} />, title: 'Modern Fit', desc: 'Precision engineered silhouettes designed to fit real bodies perfectly.' },
              { icon: <Heart className="text-yellow-400" size={40} />, title: 'Conscious', desc: 'Ethically sourced materials and fair-wage craftsmanship in every stitch.' },
              { icon: <Globe className="text-yellow-400" size={40} />, title: 'Timeless', desc: 'We build products that outlast seasons and trends. Style that endures.' }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 hover:border-yellow-400/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                     <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072" className="rounded-2xl h-64 w-full object-cover" alt="Craft Detail 1" />
                     <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070" className="rounded-2xl h-80 w-full object-cover" alt="Craft Detail 2" />
                  </div>
                  <div className="space-y-4 pt-12">
                     <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070" className="rounded-2xl h-80 w-full object-cover" alt="Craft Detail 3" />
                     <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070" className="rounded-2xl h-64 w-full object-cover" alt="Craft Detail 4" />
                  </div>
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Better <br /> Standards</h2>
               <p className="text-gray-500 text-lg leading-loose">
                  Our products aren't made on average production lines. They are crafted in small batches, ensuring every seam is straight, every button is secure, and every "knot" is perfect. We obsess over the details because you deserve the best.
               </p>
               <ul className="space-y-4">
                  {['100% Long-Staple Cotton', 'Zero Shrinkage Technology', 'Reinforced Stitching', 'Anti-Pilling Finish'].map(item => (
                    <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-black">
                       <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[0.6rem]">✓</span>
                       {item}
                    </li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-32 bg-yellow-400 text-black">
         <div className="container mx-auto px-6 text-center max-w-4xl space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Wear the Future.</h2>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-black/60">Be part of the Knitting Knot community.</p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/collections/all" className="bg-black text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-2xl active:scale-95">
                  Shop Now
               </Link>
               <Link to="/contact" className="bg-transparent border-2 border-black px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all active:scale-95">
                  Contact Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
