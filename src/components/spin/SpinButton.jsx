import { motion } from 'framer-motion';

export default function SpinButton({ onSpin, disabled }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05, translateY: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onSpin}
      disabled={disabled}
      className="relative px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-400 text-white font-playfair font-black text-xl md:text-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)] border-[2px] border-white/10 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center overflow-hidden group"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10 drop-shadow-sm">SPIN NOW</span>
    </motion.button>
  );
}
