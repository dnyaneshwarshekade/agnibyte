import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-orange-500 font-mono relative overflow-hidden">
      {/* Centering the content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          className="text-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <div>Connecting to AgniByte...</div>
          <div className="relative inline-block">
            <span className="absolute bottom-0 right-0 h-4 w-1 bg-orange-500 animate-blink"> </span>
          </div>
        </motion.div>
        {/* Laptop Icon */}
        <motion.div
          className="mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <FaLaptopCode className="text-6xl text-orange-500" />
        </motion.div>
      </div>
      {/* Code Lines Animation */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="code-lines">
          <div className="line">Loading......</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
