import React from 'react';

const NavigationFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <nav className="flex flex-wrap justify-center gap-8 mb-6">
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">Hombres</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">Mujeres</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">Niños</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">Colección</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">Rebajas</a>
        </nav>
        <p className="text-center text-xs font-mono text-gray-500">
          © {new Date().getFullYear()} ZAPATOS.
        </p>
      </div>
    </footer>
  );
};

export default NavigationFooter;
