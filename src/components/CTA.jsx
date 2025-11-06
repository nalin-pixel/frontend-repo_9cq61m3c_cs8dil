import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-yellow-100 bg-gradient-to-tr from-yellow-100 to-white p-8 md:p-10 shadow-md"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFAC08]/20 blur-2xl" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to begin together?</h3>
              <p className="text-gray-700 mt-1">Create a calm, connected routine in just 10 minutes a day.</p>
            </div>
            <button className="group relative inline-flex items-center gap-2 rounded-full bg-[#FFAC08] px-6 py-3 text-white font-medium shadow-lg shadow-yellow-200/50 hover:shadow-yellow-300/60 focus:outline-none focus:ring-4 focus:ring-yellow-300/60">
              <span className="absolute inset-0 rounded-full ring-2 ring-yellow-300/70 animate-pulse" aria-hidden="true" />
              <span className="relative">Create your plan</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
