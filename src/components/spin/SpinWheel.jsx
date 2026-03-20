import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';
import { SALAMI_AMOUNTS } from '../../utils/constants';

const SpinWheel = forwardRef(({ onSpinComplete, children }, ref) => {
  const wheelRef = useRef(null);
  
  const numSegments = SALAMI_AMOUNTS.length;
  const segmentAngle = 360 / numSegments;

  // Background using conic gradient
  const gradientStops = SALAMI_AMOUNTS.map((item, i) => {
    const start = i * segmentAngle;
    const end = (i + 1) * segmentAngle;
    return `${item.color} ${start}deg ${end}deg`;
  }).join(', ');
  
  useImperativeHandle(ref, () => ({
    spin: (resultAmount) => {
      // Find where we are landing
      const targetIndex = SALAMI_AMOUNTS.findIndex(item => item.value === resultAmount);
      
      // Calculate random offset so it doesn't land perfectly center
      const randomOffset = (Math.random() - 0.5) * (segmentAngle * 0.7);
      
      // Target center of segment X is `(targetIndex * segmentAngle) + (segmentAngle / 2)`.
      // To bring it to top, we subtract this angle from 360.
      const targetCenterAngle = (targetIndex * segmentAngle) + (segmentAngle / 2);
      const rotationNeeded = 360 - targetCenterAngle + randomOffset;
      
      const currentRotation = gsap.getProperty(wheelRef.current, "rotation") || 0;
      const rotations = Math.floor(currentRotation / 360);
      
      // Add extra spins (10 times)
      const totalRotation = (rotations + 10) * 360 + rotationNeeded;

      gsap.to(wheelRef.current, {
        rotation: totalRotation,
        duration: 5,
        ease: "power4.out",
        onComplete: onSpinComplete
      });
    },
    reset: () => {
      gsap.set(wheelRef.current, { rotation: 0 });
    }
  }));

  return (
    <div className="relative w-[90vw] max-w-[320px] sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-full border-[8px] sm:border-[12px] border-white/20 shadow-2xl shadow-primary/30 flex items-center justify-center">
      <div 
        ref={wheelRef}
        className="w-full h-full rounded-full relative"
        style={{ background: `conic-gradient(${gradientStops})` }}
      >
        {SALAMI_AMOUNTS.map((item, index) => {
          // Center text of each slice
          const angle = (index * segmentAngle) + (segmentAngle / 2);
          
          return (
            <div
              key={item.value}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-start"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
               <div className="pt-2 sm:pt-4 md:pt-6 origin-bottom block" style={{ transform: "rotate(0deg)" }}>
                 <span className="text-white font-playfair font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] inline-block pb-4 tracking-wider">
                  {typeof item.value === 'number' ? `৳${item.value}` : item.value}
                 </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Absolute positioned children (like the center button) */}
      {children}
    </div>
  );
});

export default SpinWheel;
