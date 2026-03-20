import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SpinWheel from '../components/spin/SpinWheel';
import SpinPointer from '../components/spin/SpinPointer';
import SpinButton from '../components/spin/SpinButton';
import Confetti from '../components/celebration/Confetti';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { useSpin } from '../hooks/useSpin';

import { FaMoneyBillWave, FaGift, FaCoins, FaStar } from 'react-icons/fa';

export default function SpinPage() {
  const wheelRef = useRef(null);
  const { performSpin } = useSpin();

  const [isSpinning, setIsSpinning] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const result = performSpin();
    setLastResult(result);

    if (result && wheelRef.current) {
      wheelRef.current.spin(result.amount);
    }
  };

  const handleSpinComplete = () => {
    setIsSpinning(false);
    setShowResultModal(true);
  };

  const handleModalClose = () => {
    setShowResultModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden"
    >
      <Confetti trigger={showResultModal} />

      <div className="text-center z-10 mb-8 sm:mb-12 max-w-[95vw] md:max-w-3xl lg:max-w-5xl mt-6 sm:mt-10 mx-auto px-2 sm:px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-black mb-4 sm:mb-6 font-pacifico tracking-tight drop-shadow-md pb-2">
          <FaGift className="inline text-rose-400 mx-2 -translate-y-1 drop-shadow-sm" />
          <span className="bg-gradient-main bg-clip-text text-transparent">The Salami Extractor</span>
          <FaCoins className="inline text-yellow-400 mx-2 -translate-y-1 drop-shadow-sm" />
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-playfair px-2 sm:px-8">
          Ready to collect your Eidi? Spin the wheel and see how generous the universe is feeling today! No refunds allowed! <FaStar className="inline text-yellow-400 ml-1 -translate-y-0.5" />
        </p>
      </div>

      <div className="relative flex-shrink-0 flex items-center justify-center mb-12">
        <SpinPointer />
        <SpinWheel ref={wheelRef} onSpinComplete={handleSpinComplete} />
      </div>

      <div className="z-10 relative">
        <SpinButton onSpin={handleSpin} disabled={isSpinning || showResultModal} />
      </div>

      {/* Result Modal */}
      <Modal
        isOpen={showResultModal}
        onClose={handleModalClose}
        title="Congratulations!"
      >
        <div className="text-center py-4">
          <p className="text-xl mb-4 text-white/80">You won</p>
          <div className="text-6xl md:text-7xl font-black text-primary mb-2">
            {typeof lastResult?.amount === 'number' ? `৳${lastResult.amount}` : lastResult?.amount}
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
