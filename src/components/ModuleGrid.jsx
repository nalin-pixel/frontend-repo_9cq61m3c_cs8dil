import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HandHeart, Brain, MessageSquareHeart } from 'lucide-react';

const modules = [
  {
    title: 'Emotional Basics',
    icon: Brain,
    color: 'from-yellow-400 to-amber-300',
    bg: 'bg-yellow-50/80',
    description: 'Understand feelings and build healthy coping habits.',
  },
  {
    title: 'Kind Communication',
    icon: MessageSquareHeart,
    color: 'from-amber-400 to-yellow-300',
    bg: 'bg-amber-50/80',
    description: 'Tools for listening, speaking, and repairing conflict.',
  },
  {
    title: 'Family Playbook',
    icon: BookOpen,
    color: 'from-yellow-300 to-amber-200',
    bg: 'bg-yellow-50/80',
    description: 'Simple routines to bring calm and clarity to home life.',
  },
  {
    title: 'Care in Action',
    icon: HandHeart,
    color: 'from-amber-300 to-yellow-200',
    bg: 'bg-amber-50/80',
    description: 'Practice compassion, gratitude, and growth together.',
  },
];

const ModuleCard = ({ title, icon: Icon, color, bg, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-tr ${color} text-white h-11 w-11 shadow-md`}></div>
    <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
    <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-900">
      Open lesson
      <span className="transition-transform group-hover:translate-x-0.5">→</span>
    </button>
    <div className={`absolute -right-2 -top-2 rounded-full ${bg} px-3 py-1 text-xs text-gray-700 border border-yellow-100 shadow-sm`}>New</div>
  </motion.div>
);

const ModuleGrid = () => {
  return (
    <section id="modules" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Guided Modules</h2>
            <p className="text-gray-600 mt-1">Short, gentle lessons crafted with care.</p>
          </div>
          <button className="hidden md:inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm hover:shadow-md">View all</button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <ModuleCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleGrid;
