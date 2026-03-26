import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, User, ShoppingBag, Heart, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, collections }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[320px] bg-white z-[160] overflow-y-auto shadow-2xl flex flex-col"
          >
            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Header inside drawer */}
              <div className="p-4 flex justify-between items-center border-b border-gray-50">
                <Link to="/" onClick={onClose}>
                  <img src="/images/Logo_black.png" className="h-7" alt="Logo" />
                </Link>
                <div className="flex items-center gap-3">
                   <Link to="/login" onClick={onClose} className="bg-black text-white px-4 py-1.5 rounded-full text-[0.6rem] font-black uppercase tracking-widest flex items-center gap-2">
                     <LogIn size={14} /> Log in
                   </Link>
                   <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                     <X size={20} />
                   </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Categories */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <button className="flex justify-between items-center w-full py-3 border-b border-gray-50 group">
                      <span className="text-gray-900">Shop Women</span>
                      <span className="text-gray-400 group-hover:text-black font-light">+</span>
                    </button>
                    <div className="pl-4 space-y-2 mt-2">
                        {['All Tops', 'All Bottoms', 'Airy Linen', 'All Kurta Sets'].map(item => (
                          <Link key={item} to="/collections/all" onClick={onClose} className="flex justify-between items-center py-2 text-gray-500 hover:text-black">
                             {item}
                             {item === 'All Kurta Sets'
                              && 
                              <span className="text-xs bg-yellow-300 px-1.5 py-0.5 rounded">New Launched</span>
                             }
                             <ChevronRight size={12} />
                          </Link>
                        ))}
                    </div>
                  </div>

                  <button className="flex justify-between items-center w-full py-3 border-b border-gray-50 group">
                    <span className="text-gray-900">Shop Men</span>
                    <span className="text-gray-400 group-hover:text-black font-light">+</span>
                  </button>

                  <div className="space-y-3 pt-2">
                    {[
                      { name: 'Limited Drop', label: 'NEW LAUNCH ALERT', labelColor: 'bg-yellow-300' },
                      { name: 'Behtar Linen', label: 'NEWLY LAUNCHED', labelColor: 'bg-green-400 text-white' },
                      { name: 'Winter Wear', label: null },
                      { name: 'Buy 3 Get 1', label: 'NEW', labelColor: 'bg-green-400 text-white' },
                      { name: 'Pure Linen', label: 'NEW', labelColor: 'bg-green-400 text-white' },
                      { name: 'Bundles', label: null },
                      { name: 'Saadaa Year Rewind', label: null },
                      { name: 'Plus Edition', label: null },
                      { name: 'Goodbye Edition', label: null },
                    ].map(item => (
                      <Link key={item.name} to="/collections/all" onClick={onClose} className="flex justify-between items-center py-1 text-gray-900 group">
                        <span>{item.name}</span>
                        {item.label && <span className={`text-[0.5rem] ${item.labelColor} px-1.5 py-0.5 rounded`}>{item.label}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Stars */}
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
               <div className="flex flex-col items-center gap-3">
                 <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-amber-400 text-xs">★</span>)}
                 </div>
                 <p className="text-[0.65rem] font-black uppercase tracking-widest text-gray-900">Loved by 7,00,000+ Customers</p>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
