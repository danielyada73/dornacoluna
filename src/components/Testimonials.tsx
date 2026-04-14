import React from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-4">
                    <span className="inline-block bg-[#0D1D3F] text-white text-xs font-semibold px-4 py-1.5 rounded-sm uppercase tracking-wider mb-6">Depoimentos</span>
                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D1D3F] leading-tight">
                        O que nossos pacientes dizem...
                    </h2>
                </div>

                <div className="lg:col-span-8 relative">
                    {/* Carousel UI structure */}
                    <div className="flex items-center gap-4">
                        <button className="w-12 h-12 flex-shrink-0 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0D1D3F] hover:border-[#0D1D3F] transition-colors">
                            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                        </button>
                        
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex-1 relative">
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-gray-100 fill-current" strokeWidth={1} />
                            <div className="flex gap-1 mb-6 text-[#BE9143]">
                                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                            </div>
                            <p className="text-lg text-gray-700 italic leading-relaxed relative z-10">
                                “Passei por vários tratamentos antes e não tinha melhora. Depois da avaliação, entendi exatamente o que estava acontecendo e consegui seguir o tratamento correto. Hoje minha rotina é outra.”
                            </p>
                        </div>
                        
                        <button className="w-12 h-12 flex-shrink-0 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0D1D3F] hover:border-[#0D1D3F] transition-colors">
                            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

            </div>
            
            <div className="text-center mt-16">
                <a href="#contato" className="inline-flex bg-[#0D1D3F] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#BE9143] transition-colors items-center gap-2">
                    Agende Sua Consulta Agora
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
            </div>
        </div>
    </section>
  );
}
