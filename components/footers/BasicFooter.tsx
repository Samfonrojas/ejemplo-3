import React from 'react';

const BasicFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 text-center border-t border-gray-800">
      <p className="text-xs font-mono">
        © {new Date().getFullYear()} ZAPATOS. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default BasicFooter;
