import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fullText = 'Find the Right Government Scheme in Seconds';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // ⌨️ Typewriter Effect
  useEffect(() => {
    let timeout;
    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2500);
    }
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative text-center py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:to-black transition-all duration-300"
    >
      {/* Background Gradient Light */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* 🔠 Animated Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white min-h-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span className="text-indigo-600 dark:text-indigo-800">
            {displayedText}
          </span>
          <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
        </motion.h1>

        {/* 💬 Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
        <span className="font-bold text-grau-600 dark:text-gray-900">Get personalized suggestions, use voice chat, and never miss a scheme with smart reminders.</span>
        </motion.p>

        {/* 🚀 CTA Button */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-3 rounded-full shadow-xl shadow-blue-300 dark:shadow-indigo-700/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          🚀 Start Your Journey
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
