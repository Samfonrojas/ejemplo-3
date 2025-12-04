import React from 'react';

const CorporateFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Ayuda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Envíos</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs font-mono text-gray-500 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} ZAPATOS. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default CorporateFooter;
