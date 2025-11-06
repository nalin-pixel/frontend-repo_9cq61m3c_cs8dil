import React from 'react';
import { Heart, Bell, User, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFAC08]/10 shadow-sm">
              <Heart className="h-5 w-5 text-[#FFAC08]" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 text-lg">TeenCare</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-6 text-sm text-gray-600"
          >
            <a href="#modules" className="hover:text-gray-900 transition-colors">Modules</a>
            <a href="#journey" className="hover:text-gray-900 transition-colors">Journey</a>
            <a href="#support" className="hover:text-gray-900 transition-colors">Support</a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2"
          >
            <button className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#FFAC08] to-[#FFD166] text-white flex items-center justify-center shadow-md">
              <User className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
