import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <FaLaptopCode className="text-6xl text-blue-500 mb-4 animate-bounce" />
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          AgniByte
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Building the Future</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
