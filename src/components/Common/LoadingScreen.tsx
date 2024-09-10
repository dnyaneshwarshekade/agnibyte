import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-orange-500 font-mono relative overflow-hidden">
      <div className="relative text-center">
        {/* Text with Laptop Icon */}
        <motion.div
          className="text-2xl relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, -10, 20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center">
            <span className="mr-2">Connecting to</span>
            <motion.div
              className="mx-2 text-6xl text-orange-500"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaLaptopCode />
            </motion.div>
            <span className="ml-2">AgniByte...</span>
          </div>
          <motion.span
            className="absolute bottom-0 right-0 h-4 w-1 bg-orange-500 animate-blink"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
