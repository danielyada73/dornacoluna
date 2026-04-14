import React from 'react';
import { ArrowRight, ClipboardList, Microscope, FileSearch, Target, ShieldCheck, MinusCircle, Shield, Smile, Activity } from 'lucide-react';

export default function Treatments() {
  return (
    <>
      {/* Section: Dark Grid (Tratamentos Oferecidos) */}
      <section id="tratamentos" className="py-24 bg-[#0D1D3F] text-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
                      O que pode ser tratado no consultório
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                      Desde a avaliação até o tratamento, o atendimento é conduzido com técnicas modernas e estrutura preparada para atuar diretamente na causa da dor.
                  </p>
              </div>

              {/* Grid matching reference dark block */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  
                  {/* Card 1 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition duration-300">
                      <div className="h-48 bg-gray-800 overflow-hidden">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Infiltrações guiadas" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 mix-blend-overlay" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">Infiltrações Guiadas</h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                              Procedimentos realizados com precisão para atuar diretamente na região afetada, auxiliando no alívio da dor e no controle da inflamação.
                          </p>
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition duration-300">
                      <div className="h-48 bg-gray-800 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" alt="Minimamente Invasivos" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 mix-blend-overlay" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">Minimamente Invasivos</h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                              Abordagens modernas que permitem tratar o problema com menor impacto no corpo, proporcionando mais conforto e recuperação tranquila.
                          </p>
                      </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition duration-300">
                      <div className="h-48 bg-gray-800 overflow-hidden">
                          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Dores Articulares" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 mix-blend-overlay" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">Dores Articulares</h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                              Atuação em joelho, quadril, ombro e outras articulações com foco em restaurar movimento, reduzir dor e melhorar a qualidade de vida.
                          </p>
                      </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition duration-300">
                      <div className="h-48 bg-gray-800 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" alt="Avaliação da Coluna" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 mix-blend-overlay" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">Avaliação da Coluna</h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                              Análise detalhada da origem da dor, com definição clara do problema e direcionamento do melhor tratamento para cada caso.
                          </p>
                      </div>
                  </div>

              </div>

              <div className="text-center">
                  <a href="#contato" className="inline-flex bg-[#BE9143] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0D1D3F] transition-colors items-center gap-2">
                      Agendar Sua Consulta Agora
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
              </div>
          </div>
      </section>

      {/* Section: Light Grid (Como Funciona) */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0D1D3F] mb-4">
                      Como Funciona o Atendimento
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Cada paciente passa por uma análise completa para definir o plano de tratamento mais adequado. Os tratamentos são realizados com técnicas modernas.
                  </p>
              </div>

              {/* Staggered visual grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Card 1 */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 relative group">
                      <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center mb-6 text-[#0D1D3F] group-hover:bg-[#0D1D3F] group-hover:text-white transition">
                          <ClipboardList className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0D1D3F] mb-3">Avaliação Clínica Detalhada</h3>
                      <p className="text-lg text-gray-600">
                          Primeiro contato focado em entender o histórico da dor, limitações e impacto na rotina do paciente.
                      </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 relative group">
                      <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center mb-6 text-[#0D1D3F] group-hover:bg-[#0D1D3F] group-hover:text-white transition">
                          <Microscope className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0D1D3F] mb-3">Revisão de Exames</h3>
                      <p className="text-lg text-gray-600">
                          Análise aprofundada de exames de imagem anteriores para correlacionar com os sintomas apresentados.
                      </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 relative group">
                      <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center mb-6 text-[#0D1D3F] group-hover:bg-[#0D1D3F] group-hover:text-white transition">
                          <FileSearch className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0D1D3F] mb-3">Solicitação de Novos Exames</h3>
                      <p className="text-lg text-gray-600">
                          Quando necessário, pedidos específicos são feitos para fechar o diagnóstico com máxima precisão.
                      </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 relative group lg:col-span-2">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                              <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center mb-6 text-[#0D1D3F] group-hover:bg-[#0D1D3F] group-hover:text-white transition">
                                  <Target className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="text-xl font-semibold text-[#0D1D3F] mb-3">Identificação da Origem da Dor</h3>
                              <p className="text-lg text-gray-600">
                                  Cruzamento de todos os dados clínicos e de imagem para encontrar a raiz exata do problema, permitindo um tratamento direcionado. A partir disso, é definido o plano de tratamento.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 relative group">
                      <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center mb-6 text-[#0D1D3F] group-hover:bg-[#0D1D3F] group-hover:text-white transition">
                          <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0D1D3F] mb-3">Acompanhamento</h3>
                      <p className="text-lg text-gray-600">
                          O paciente é acompanhado de forma próxima em todas as etapas, garantindo segurança e evolução.
                      </p>
                  </div>

              </div>
              
              {/* Benefícios em destaque */}
              <div className="mt-16 bg-[#f8f9fc] rounded-3xl p-8 md:p-12 border border-[#e2e8f0]">
                  <h3 className="text-2xl font-semibold text-center text-[#0D1D3F] mb-8">Vantagens da nossa abordagem</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div>
                          <MinusCircle className="w-8 h-8 mx-auto text-[#BE9143] mb-3" strokeWidth={1.5} />
                          <p className="font-semibold text-gray-800">Menor agressão à estrutura</p>
                      </div>
                      <div>
                          <Shield className="w-8 h-8 mx-auto text-[#BE9143] mb-3" strokeWidth={1.5} />
                          <p className="font-semibold text-gray-800">Mais segurança</p>
                      </div>
                      <div>
                          <Smile className="w-8 h-8 mx-auto text-[#BE9143] mb-3" strokeWidth={1.5} />
                          <p className="font-semibold text-gray-800">Recuperação confortável</p>
                      </div>
                      <div>
                          <Activity className="w-8 h-8 mx-auto text-[#BE9143] mb-3" strokeWidth={1.5} />
                          <p className="font-semibold text-gray-800">Retorno progressivo</p>
                      </div>
                  </div>
              </div>

              <div className="text-center mt-12">
                  <a href="#contato" className="inline-flex bg-[#0D1D3F] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#BE9143] transition-colors items-center gap-2">
                      Veja Mais
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
              </div>
          </div>
      </section>
    </>
  );
}
