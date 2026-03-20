import { motion } from 'framer-motion';

export default function Button({ children, onClick, disabled, className = '', variant = 'primary' }) {
  const baseStyle = "px-6 py-3 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-main text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    secondary: "bg-white text-dark border-2 border-transparent hover:bg-gray-100",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
