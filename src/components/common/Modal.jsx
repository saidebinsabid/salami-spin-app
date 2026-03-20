import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-dark border border-white/10 rounded-2xl shadow-2xl shadow-primary/20 z-50 p-6 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="relative flex justify-center items-center mb-6 min-h-[40px]">
              <h2 className="text-3xl font-black font-bitcount bg-gradient-main bg-clip-text text-transparent text-center w-full px-10">
                {title}
              </h2>
              {onClose && (
                <button onClick={onClose} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
                  <IoClose size={24} />
                </button>
              )}
            </div>
            
            {/* Modal Body */}
            <div className="text-white font-playfair">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
