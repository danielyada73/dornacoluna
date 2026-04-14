import React from 'react';

export default function Specialists() {
  return (
    <section id="especialistas" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-3">SOBRE O DR. DANIEL EDDE</h2>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="rounded-xl text-card-foreground relative pt-24 pb-12 px-6 sm:px-12 text-center border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img alt="Dr. Daniel Edde" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://clinicacolunasemdor.com.br/assets/doutorEddge-Cmiiiy3k.png" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-primary">Dr. Daniel Edde</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Médico do esporte e ortopedista, com mais de 20 anos de experiência no tratamento de dores na coluna e articulações.
                </p>
                <p>
                  Atua com foco em diagnóstico preciso e tomada de decisão baseada em critérios técnicos, sempre priorizando a segurança e o bem-estar do paciente.
                </p>
                <p>
                  Já acompanhou pacientes com diferentes níveis de complexidade, desde quadros iniciais até casos que exigem intervenção mais avançada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
