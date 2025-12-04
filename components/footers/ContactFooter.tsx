import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <Phone className="w-4 h-4 mx-auto mb-2 text-gray-400" />
            <p className="text-[10px] font-mono">+34 912 345 678</p>
          </div>
          <div className="text-center">
            <Mail className="w-4 h-4 mx-auto mb-2 text-gray-400" />
            <p className="text-[10px] font-mono">info@zapatos.com</p>
          </div>
          <div className="text-center">
            <MapPin className="w-4 h-4 mx-auto mb-2 text-gray-400" />
            <p className="text-[10px] font-mono">Madrid, España</p>
          </div>
          <div className="text-center">
            <Clock className="w-4 h-4 mx-auto mb-2 text-gray-400" />
            <p className="text-[10px] font-mono">Lun-Sáb 10-20h</p>
          </div>
        </div>
        <p className="text-center text-xs font-mono text-gray-500">
          © {new Date().getFullYear()} ZAPATOS.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
