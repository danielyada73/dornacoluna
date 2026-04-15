import React from 'react';
import { Stethoscope, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-[#BE9143] font-semibold text-sm tracking-widest uppercase mb-2 block">Avaliação</span>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0D1D3F]">
                    Quando procurar uma avaliação especializada?
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    A avaliação é indicada principalmente para pacientes que apresentam as seguintes condições. Em muitos casos, o problema evolui ao longo do tempo quando não tratado da forma adequada.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Numbered List */}
                <div className="space-y-8">
                    
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0D1D3F] text-white flex items-center justify-center font-semibold text-2xl shadow-lg">
                            1
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0D1D3F] mb-2">Dor contínua na coluna</h3>
                            <p className="text-lg text-gray-600">Dores persistentes ou recorrentes na região da coluna que não apresentam melhora significativa.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0D1D3F] text-white flex items-center justify-center font-semibold text-2xl shadow-lg">
                            2
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0D1D3F] mb-2">Irradiação de dor</h3>
                            <p className="text-lg text-gray-600">Desconforto ou dor que se irradia da coluna para as pernas ou braços.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0D1D3F] text-white flex items-center justify-center font-semibold text-2xl shadow-lg">
                            3
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0D1D3F] mb-2">Sintomas neurológicos</h3>
                            <p className="text-lg text-gray-600">Sensação de formigamento constante ou perda de força nos membros.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0D1D3F] text-white flex items-center justify-center font-semibold text-2xl shadow-lg">
                            4
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0D1D3F] mb-2">Limitação funcional</h3>
                            <p className="text-lg text-gray-600">Dificuldade acentuada para realizar atividades comuns do dia a dia devido à dor.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0D1D3F] text-white flex items-center justify-center font-semibold text-2xl shadow-lg">
                            5
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0D1D3F] mb-2">Tratamentos sem resultado</h3>
                            <p className="text-lg text-gray-600">Histórico de realização de outros tratamentos conservadores sem sucesso no alívio do quadro.</p>
                        </div>
                    </div>

                </div>

                {/* Right Side Info Box */}
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-[#0D1D3F]">
                        <Stethoscope className="w-32 h-32" strokeWidth={1.5} />
                    </div>
                    <span className="bg-blue-50 text-[#0D1D3F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">SOBRE A CLÍNICA</span>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#0D1D3F] mb-4">
                        Referência no tratamento de dores na coluna e articulações
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        O atendimento é voltado para pacientes com dores persistentes na coluna e articulações, especialmente aqueles que não tiveram melhora com tratamentos anteriores.<br /><br />
                        Cada caso é conduzido com análise criteriosa, buscando identificar a origem da dor e definir o tratamento mais adequado.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Com atuação no Brasil e em Portugal, trabalhamos com diagnósticos precisos, decisões técnicas e acompanhamento próximo.<br /><br />
                        Sempre que possível, são priorizadas abordagens minimamente invasivas, com menor impacto no corpo e recuperação mais segura e confortável.
                    </p>
                    <a href="#contato" className="inline-flex items-center gap-2 text-[#BE9143] font-semibold hover:text-[#0D1D3F] transition-colors">
                        Agendar avaliação especializada <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                </div>

            </div>
        </div>
    </section>
  );
}
