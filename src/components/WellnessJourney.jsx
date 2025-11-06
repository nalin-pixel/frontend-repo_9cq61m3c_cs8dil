import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck2, CheckCircle2, Footprints } from 'lucide-react';

const steps = [
  { title: 'Check-in', desc: 'A quick mood + energy check to start your day.', icon: CheckCircle2 },
  { title: 'Learn', desc: 'A tiny, friendly lesson to build a new skill.', icon: CalendarCheck2 },
  { title: 'Practice', desc: 'Try a short activity with someone you trust.', icon: Footprints },
];

const WellnessJourney = () => {
  return (
    <section id="journey" className="bg-gradient-to-b from-yellow-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Gentle Journey</h2>
          <p className="text-gray-600 mt-2">Small steps that feel calm, doable, and encouraging.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#FFAC08]/15 flex items-center justify-center text-[#FFAC08]">
                  {React.createElement(s.icon, { className: 'h-5 w-5' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessJourney;
