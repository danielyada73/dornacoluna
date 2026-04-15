import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <>
      <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              
              <div className="rounded-3xl overflow-hidden shadow-lg h-auto flex bg-white">
                  <img src="https://lh3.googleusercontent.com/d/15M_AE03RzBbtMdXBapb-vAQu_M8FQP5O" alt="Médico Especialista" className="w-full h-auto object-cover" />
              </div>

              <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-[#0D1D3F] mb-8">
                      Dúvidas Frequentes
                  </h2>
                  
                  <div className="space-y-4">
                      
                      <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex justify-between items-center font-semibold cursor-pointer p-5 text-[#0D1D3F]">
                              <span>Todo caso precisa de procedimento?</span>
                              <span className="transition-transform duration-300 group-open:-rotate-45">
                                  <Plus className="w-5 h-5 text-[#BE9143]" strokeWidth={2} />
                              </span>
                          </summary>
                          <div className="px-5 pb-5 text-gray-600 text-lg">
                              Não. A indicação depende de uma avaliação completa e individual. Sempre priorizamos a abordagem mais conservadora possível que traga resultados.
                          </div>
                      </details>

                      <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex justify-between items-center font-semibold cursor-pointer p-5 text-[#0D1D3F]">
                              <span>O convênio cobre o tratamento?</span>
                              <span className="transition-transform duration-300 group-open:-rotate-45">
                                  <Plus className="w-5 h-5 text-[#BE9143]" strokeWidth={2} />
                              </span>
                          </summary>
                          <div className="px-5 pb-5 text-gray-600 text-lg">
                              Cada caso depende da análise específica do plano contratado. Nossa equipe de atendimento auxilia em todo o processo burocrático para viabilizar a cobertura.
                          </div>
                      </details>

                      <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex justify-between items-center font-semibold cursor-pointer p-5 text-[#0D1D3F]">
                              <span>Preciso já ter exames?</span>
                              <span className="transition-transform duration-300 group-open:-rotate-45">
                                  <Plus className="w-5 h-5 text-[#BE9143]" strokeWidth={2} />
                              </span>
                          </summary>
                          <div className="px-5 pb-5 text-gray-600 text-lg">
                              Não obrigatoriamente. Traga os que tiver, mas caso seja necessário, novos exames específicos serão solicitados durante a avaliação para um diagnóstico preciso.
                          </div>
                      </details>

                      <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex justify-between items-center font-semibold cursor-pointer p-5 text-[#0D1D3F]">
                              <span>O tratamento é seguro?</span>
                              <span className="transition-transform duration-300 group-open:-rotate-45">
                                  <Plus className="w-5 h-5 text-[#BE9143]" strokeWidth={2} />
                              </span>
                          </summary>
                          <div className="px-5 pb-5 text-gray-600 text-lg">
                              Sim, quando bem indicado e realizado com técnica adequada e acompanhamento especializado. A segurança do paciente é a prioridade em todas as etapas.
                          </div>
                      </details>

                  </div>
              </div>

          </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 px-6 max-w-7xl mx-auto mt-12">
          <div className="bg-[#0D1D3F] rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-16">
                  <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight mb-6">
                      Agende sua consulta hoje e diga adeus às dores na coluna
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                      Receba uma orientação completa sobre o melhor caminho para o seu tratamento especializado.
                  </p>
                  <a href="#contato" className="inline-flex bg-[#BE9143] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0D1D3F] transition-colors items-center gap-2">
                      Agende Sua Consulta Agora
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
              </div>
              <div className="hidden lg:block h-full min-h-[400px] relative bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop" alt="Consulta médica" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen" />
              </div>
          </div>
      </section>

      {/* Gallery */}
      <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-recepcao-WjFRqvL0.jpg" alt="Recepção" className="w-full aspect-square object-cover rounded-2xl" />
              <img src="https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-espera-we_EdnR6.jpg" alt="Sala de Espera" className="w-full aspect-square object-cover rounded-2xl" />
              <img src="https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-fachada-C__IGSg4.jpg" alt="Fachada" className="w-full aspect-square object-cover rounded-2xl" />
              <img src="https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-consultorio-DO840m-P.jpg" alt="Consultório" className="w-full aspect-square object-cover rounded-2xl" />
          </div>
      </section>
    </>
  );
}
