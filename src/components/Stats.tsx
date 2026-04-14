import React from 'react';

export default function Stats() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-white font-serif">+15.000</h3>
              <p className="text-white/80 text-lg font-medium uppercase tracking-widest">pacientes atendidos</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-white font-serif">+5.000</h3>
              <p className="text-white/80 text-lg font-medium uppercase tracking-widest">procedimentos acompanhados</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-white font-serif">20+</h3>
              <p className="text-white/80 text-lg font-medium uppercase tracking-widest">Mais de 20 anos de atuação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
