import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const MegaFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Comprar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Hombres</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Mujeres</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Niños</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Accesorios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Deportivos</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Casual</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Formal</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Botas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Atención al Cliente</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Envíos</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Guía de Tallas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Prensa</a></li>
              <li><a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400">+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400">info@zapatos.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-500">
            © {new Date().getFullYear()} ZAPATOS. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Términos</a>
            <a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-[10px] text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
