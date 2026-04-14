import React from 'react';
import { ArrowRight, Check, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D1D3F] leading-tight mb-6">
                    Tratamento especializado para dores na coluna e articulações
                </h1>
                <h2 className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                    com avaliação criteriosa e abordagem minimamente invasiva. Atendimento voltado ao diagnóstico preciso e definição do melhor tratamento para cada caso, com foco em segurança, recuperação e qualidade de vida.
                </h2>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                    <a href="#contato" className="bg-[#BE9143] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#a37c39] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#BE9143]/20">
                        Agendar avaliação
                        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                </div>
                
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-lg text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                        </div>
                        Mais de 20 anos de experiência
                    </li>
                    <li className="flex items-center gap-3 text-lg text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                        </div>
                        Avaliação individualizada
                    </li>
                    <li className="flex items-center gap-3 text-lg text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                        </div>
                        Tratamentos minimamente invasivos
                    </li>
                    <li className="flex items-center gap-3 text-lg text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                        </div>
                        Suporte completo com seu plano de saúde
                    </li>
                </ul>
            </div>
            
            {/* Right Image Area */}
            <div className="relative flex justify-center items-center lg:justify-end">
                {/* Background decorative blob matching visual structure */}
                <div className="absolute w-[120%] h-[120%] bg-[#f0f4f8] hero-blob -z-10 translate-x-10"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src="https://lh3.googleusercontent.com/d/1FtuGYHP232cjsCUWwpWKdFDtE1x7O0F0" alt="Avaliação ortopédica" className="w-full max-w-md h-[600px] object-cover object-center block" />
                    
                    {/* Decorative overlay matching reference */}
                    <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#0D1D3F] rounded-full flex items-center justify-center text-white">
                            <Activity className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="font-semibold text-[#0D1D3F] text-sm">+15.000</p>
                            <p className="text-xs text-gray-500">Pacientes Atendidos</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  );
}
