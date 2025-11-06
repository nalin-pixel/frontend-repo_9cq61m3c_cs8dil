import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-yellow-50/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FFAC08]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#FFAC08]" />
              New: Guided Journeys for Parents & Teens
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Grow with care. Learn with heart.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              A gentle, interactive space for teens and families to explore emotional wellness, strengthen connections, and build lifelong skills.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="group relative inline-flex items-center gap-2 rounded-full bg-[#FFAC08] px-5 py-3 text-white font-medium shadow-lg shadow-yellow-200/50 hover:shadow-yellow-300/60 focus:outline-none focus:ring-4 focus:ring-yellow-300/60 transition-all">
                <span className="absolute inset-0 rounded-full ring-2 ring-yellow-300/70 animate-pulse shadow-[0_0_20px_2px_rgba(255,172,8,0.45)]" aria-hidden="true" />
                <span className="relative">Start your journey</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-gray-800 font-medium shadow-sm hover:shadow-md border border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200/60 transition-all">
                Explore modules
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-white p-4 md:p-6 shadow-xl border border-gray-100">
              <div className="grid grid-cols-3 gap-4">
                {["Mindfulness", "Communication", "Resilience", "Boundaries", "Gratitude", "Balance"].map((tag) => (
                  <div key={tag} className="rounded-xl bg-yellow-50/70 border border-yellow-100 px-3 py-2 text-center text-sm text-gray-700">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-gradient-to-tr from-yellow-100 to-white p-6 border border-yellow-100">
                <p className="text-gray-700 leading-relaxed">
                  "TeenCare helped us open new conversations at home. It's calm, supportive, and beautifully simple."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#FFAC08]/20" />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-800">Jamie, Parent</p>
                    <p>Guided Journey Member</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
