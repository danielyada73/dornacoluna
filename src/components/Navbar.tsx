import React, { useState } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0D1D3F] z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <img
                    src="https://doutordanieledde.com/protocolo-de-emagrecimento/assets/logo-dourado-BAsUUEYh.png"
                    
                />
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
                <a href="#sobre" className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Sobre</a>
                <a href="#tratamentos" className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Tratamentos</a>
                <a href="#convenios" className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Convênios</a>
                <a href="#depoimentos" className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Depoimentos</a>
            </nav>

            {/* CTA Button */}
            <a href="#contato" className="hidden md:inline-flex bg-[#BE9143] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a37c39] transition-colors items-center gap-2">
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#0D1D3F] border-t border-white/10 p-4 flex flex-col gap-4 shadow-lg">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Sobre</a>
                <a href="#tratamentos" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Tratamentos</a>
                <a href="#convenios" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Convênios</a>
                <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-[#BE9143] transition-colors">Depoimentos</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="inline-flex justify-center bg-[#BE9143] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a37c39] transition-colors items-center gap-2 mt-2">
                    Agendar Avaliação
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
            </div>
        )}
    </header>
  );
}
