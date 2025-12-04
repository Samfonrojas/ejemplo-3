import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const SocialFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest mb-2">Síguenos</h3>
          <p className="text-[10px] text-gray-400 mb-6">Únete a nuestra comunidad urbana</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <button className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Únete Ahora
          </button>
        </div>
        <p className="text-center text-xs font-mono text-gray-500 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} ZAPATOS.
        </p>
      </div>
    </footer>
  );
};

export default SocialFooter;
