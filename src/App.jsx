import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModuleGrid from './components/ModuleGrid';
import WellnessJourney from './components/WellnessJourney';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,172,8,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,214,102,0.12),transparent_45%)]">
      <Header />
      <main className="relative">
        <Hero />
        <ModuleGrid />
        <WellnessJourney />
      </main>
      <footer className="border-t border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} TeenCare — growing with understanding.</p>
          <div className="flex items-center gap-4">
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#journey" className="hover:text-gray-900">Journey</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
