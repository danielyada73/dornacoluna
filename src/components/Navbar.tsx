import React, { useState } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#0D1D3F] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    DE
                </div>
                <span className="font-semibold text-xl tracking-tight text-[#0D1D3F]">Dr. Daniel Edde</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
                <a href="#sobre" className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Sobre</a>
                <a href="#tratamentos" className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Tratamentos</a>
                <a href="#convenios" className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Convênios</a>
                <a href="#depoimentos" className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Depoimentos</a>
            </nav>
            
            <a href="#contato" className="hidden md:inline-flex bg-[#0D1D3F] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#152a5c] transition-colors items-center gap-2">
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            
            <button className="lg:hidden text-[#0D1D3F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
        </div>
        {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Sobre</a>
                <a href="#tratamentos" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Tratamentos</a>
                <a href="#convenios" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Convênios</a>
                <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold hover:text-[#BE9143] transition-colors">Depoimentos</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="inline-flex justify-center bg-[#0D1D3F] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#152a5c] transition-colors items-center gap-2 mt-2">
                    Agendar Avaliação
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
            </div>
        )}
    </header>
  );
}
