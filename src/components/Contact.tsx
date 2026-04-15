import React from 'react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
                <h2 className="text-4xl font-semibold tracking-tight text-[#0D1D3F] mb-4">
                    Entre em Contato
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Agende sua consulta e descubra o melhor tratamento. Nossa equipe entrará em contato para confirmar horários.
                </p>

            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text" placeholder="Nome" className="w-full bg-[#f8fafc] border border-gray-200 text-gray-800 text-lg rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D1D3F] focus:ring-1 focus:ring-[#0D1D3F] transition" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" className="w-full bg-[#f8fafc] border border-gray-200 text-gray-800 text-lg rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D1D3F] focus:ring-1 focus:ring-[#0D1D3F] transition" required />
                    <input type="tel" placeholder="WhatsApp" className="w-full bg-[#f8fafc] border border-gray-200 text-gray-800 text-lg rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D1D3F] focus:ring-1 focus:ring-[#0D1D3F] transition" required />
                </div>
                <div>
                    <textarea placeholder="Mensagem" rows={4} className="w-full bg-[#f8fafc] border border-gray-200 text-gray-800 text-lg rounded-xl px-5 py-4 focus:outline-none focus:border-[#0D1D3F] focus:ring-1 focus:ring-[#0D1D3F] transition resize-none"></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className="bg-[#BE9143] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#a37c39] transition-colors inline-block w-full sm:w-auto">
                        Enviar Mensagem
                    </button>
                </div>
            </form>

        </div>
    </section>
  );
}
