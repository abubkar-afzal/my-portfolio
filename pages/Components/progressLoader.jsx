import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const ProgressCircle = ({ percentage, color, label, sizeClass = "w-40 h-40" }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref); // No 'once: true' — triggers every time

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, percentage, { duration: 1.5, ease: "easeInOut" });
      return controls.stop;
    } else {
      count.set(0); // Reset when out of view
    }
  }, [isInView, percentage, count]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className={`relative flex items-center justify-center ${sizeClass}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 overflow-visible">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#1f2937"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            animate={{
              strokeDashoffset: isInView
                ? circumference - (percentage / 100) * circumference
                : circumference,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white font-sans">
            <motion.span>{rounded}</motion.span>%
          </span>
        </div>
      </div>
      <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">
        {label}
      </p>
    </div>
  );
};

export default ProgressCircle;
