import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const ProgressCircle = ({ percentage, color, label, sizeClass = "w-40 h-40" }) => {
  // Using 100x100 coordinate system makes it easy to scale with Tailwind
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  
  // Motion values for the "Count Up" number animation
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // Animate the number from 0 to percentage
    const controls = animate(count, percentage, { duration: 1.5, ease: "easeInOut" });
    return controls.stop;
  }, [percentage, count]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Container size controlled by sizeClass prop */}
      <div className={`relative flex items-center justify-center ${sizeClass}`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full -rotate-90 overflow-visible"
        >
          {/* Background Track (Gray) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#1f2937" // tailwind gray-800
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated Progress Bar */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Percentage text centered inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white font-sans">
            <motion.span>{rounded}</motion.span>%
          </span>
        </div>
      </div>

      {/* Label under the circle */}
      <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">
        {label}
      </p>
    </div>
  );
};

export default ProgressCircle;