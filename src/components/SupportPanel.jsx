import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, LifeBuoy } from 'lucide-react';

const SupportPanel = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div id="support" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50/70 px-3 py-1 text-xs text-gray-700">
                <LifeBuoy className="h-4 w-4 text-[#FFAC08]" />
                We’re here for you
              </div>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-gray-900">Support that feels human</h3>
              <p className="mt-1 text-gray-600 max-w-xl">Ask a question, get a tip, or share a win. Our team responds with care.</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex items-center gap-2 rounded-full bg-[#FFAC08] px-4 py-2 text-white font-medium shadow-lg shadow-yellow-200/50 focus:outline-none focus:ring-4 focus:ring-yellow-300/60 hover:shadow-yellow-300/60"
            >
              <span className="absolute inset-0 rounded-full ring-2 ring-yellow-300/70 animate-pulse" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat with us
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/30"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="fixed bottom-6 right-6 z-40 w-[90vw] max-w-md"
          >
            <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#FFAC08]/15 flex items-center justify-center text-[#FFAC08]">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <p className="font-medium text-gray-900">TeenCare Support</p>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-gray-50">
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                <div className="rounded-2xl bg-gray-50 p-3 text-sm text-gray-700 w-fit max-w-[85%]">
                  Hi! How can we help today?
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage('');
                }}
                className="p-3 border-t border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message..."
                    className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-300"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#FFAC08] px-4 py-2 text-white shadow-lg shadow-yellow-200/50 focus:outline-none focus:ring-4 focus:ring-yellow-300/60"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupportPanel;
