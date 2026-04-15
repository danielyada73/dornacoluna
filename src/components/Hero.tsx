import React from 'react';
import { ArrowRight, Check, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        
        {/* Background Images */}
        <picture className="absolute inset-0 w-full h-full flex">
            <source media="(max-width: 768px)" srcSet="https://lh3.googleusercontent.com/d/1Di82Sygzgtav3t_wvdyCtZ23jqBgEMH9" />
            <img src="https://lh3.googleusercontent.com/d/1tPUE7gzTObXDVgdd5-qvf0b0Ncl67Ltc" alt="Clínica Avaliação" className="w-full h-full object-cover object-[center_top] md:object-right" />
        </picture>

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/95 lg:via-white/50 lg:to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D1D3F] leading-tight mb-6">
                    Tratamento para coluna e articulações<br className="hidden md:block"/>com abordagem minimamente invasiva
                </h1>
                <h2 className="text-lg text-[#0D1D3F] md:text-gray-800 font-medium mb-8 leading-relaxed max-w-lg">
                    Atendimento voltado ao diagnóstico preciso e definição do melhor tratamento para cada caso, com foco em segurança, recuperação e qualidade de vida.
                </h2>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                    <a href="#contato" className="bg-[#BE9143] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#a37c39] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#BE9143]/20">
                        Agendar avaliação
                        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                </div>
                
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-lg text-[#0D1D3F] md:text-gray-900 font-medium md:font-semibold">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-4 h-4 text-green-700" strokeWidth={2.5} />
                        </div>
                        Mais de 20 anos de experiência
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#0D1D3F] md:text-gray-900 font-medium md:font-semibold">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-4 h-4 text-green-700" strokeWidth={2.5} />
                        </div>
                        Avaliação individualizada
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#0D1D3F] md:text-gray-900 font-medium md:font-semibold">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-4 h-4 text-green-700" strokeWidth={2.5} />
                        </div>
                        Tratamentos minimamente invasivos
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#0D1D3F] md:text-gray-900 font-medium md:font-semibold">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-4 h-4 text-green-700" strokeWidth={2.5} />
                        </div>
                        Suporte completo com seu plano de saúde
                    </li>
                </ul>

                <div className="mt-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl inline-flex items-center gap-4 border border-white/50 md:absolute md:bottom-0 md:right-6 lg:right-12">
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
    </section>
  );
}
