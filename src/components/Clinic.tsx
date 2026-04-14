import React from 'react';
import { MapPin } from 'lucide-react';

const clinicImages = [
  {
    label: 'Recepção',
    src: 'https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-recepcao-WjFRqvL0.jpg',
    featured: true,
  },
  {
    label: 'Sala de Espera',
    src: 'https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-espera-we_EdnR6.jpg',
    featured: false,
  },
  {
    label: 'Fachada',
    src: 'https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-fachada-C__IGSg4.jpg',
    featured: false,
  },
  {
    label: 'Consultório',
    src: 'https://doutordanieledde.com/protocolo-de-emagrecimento/assets/clinica-consultorio-DO840m-P.jpg',
    featured: false,
  },
];

export default function Clinic() {
  return (
    <section id="clinica" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#BE9143] font-semibold text-sm tracking-widest uppercase mb-2 block">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0D1D3F]">
            Conheça a Clínica
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Um ambiente moderno e acolhedor, preparado para oferecer o melhor atendimento e conforto durante todo o processo de tratamento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Featured large image - Recepção */}
          <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src={clinicImages[0].src}
              alt={clinicImages[0].label}
              className="w-full h-72 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ minHeight: '420px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3F]/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-white font-semibold text-lg tracking-wide">
              {clinicImages[0].label}
            </span>
          </div>

          {/* Sala de Espera */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={clinicImages[1].src}
              alt={clinicImages[1].label}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3F]/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-semibold text-base tracking-wide">
              {clinicImages[1].label}
            </span>
          </div>

          {/* Fachada */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={clinicImages[2].src}
              alt={clinicImages[2].label}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3F]/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-semibold text-base tracking-wide">
              {clinicImages[2].label}
            </span>
          </div>

        </div>

        {/* Consultório — full width below */}
        <div className="mt-4 relative group overflow-hidden rounded-2xl">
          <img
            src={clinicImages[3].src}
            alt={clinicImages[3].label}
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3F]/60 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 text-white font-semibold text-lg tracking-wide">
            {clinicImages[3].label}
          </span>
        </div>

        {/* Location tag */}
        <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 text-[#BE9143]" strokeWidth={1.5} />
          <span>São Paulo, SP — Brasil e Portugal</span>
        </div>

      </div>
    </section>
  );
}
