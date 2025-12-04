import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterFooter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="max-w-md mx-auto text-center mb-6">
          <Mail className="w-6 h-6 mx-auto mb-3 text-gray-400" />
          <h3 className="text-sm font-black uppercase tracking-widest mb-2">Newsletter</h3>
          <p className="text-[10px] text-gray-400 mb-6">
            Recibe lanzamientos exclusivos y ofertas especiales
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 bg-neutral-900 border border-gray-700 px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
        <p className="text-center text-xs font-mono text-gray-500 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} ZAPATOS.
        </p>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
