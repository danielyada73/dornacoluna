import React from 'react';

export default function Insurance() {
  const logos = [
    'https://clinicacolunasemdor.com.br/assets/unimedLogo-CgM-ueV7.png',
    'https://clinicacolunasemdor.com.br/assets/bradescoLogo-CzAOZ3GY.png',
    'https://clinicacolunasemdor.com.br/assets/amilLogo-B0tnp_u5.png',
    'https://clinicacolunasemdor.com.br/assets/amsLogo-BHg_N_vx.png',
    'https://clinicacolunasemdor.com.br/assets/cassiLogo-DojaHtAr.png',
    'https://clinicacolunasemdor.com.br/assets/geapLogo-BOL_pSzb.png',
    'https://clinicacolunasemdor.com.br/assets/portoSeguroLogo-Obt1TAY0.png',
    'https://clinicacolunasemdor.com.br/assets/omintLogo-Dw4WnQqd.png',
    'https://clinicacolunasemdor.com.br/assets/mediserviceLogo-CxWuYo6W.png',
    'https://clinicacolunasemdor.com.br/assets/metrusLogo-CXSG8f7X.png',
    'https://clinicacolunasemdor.com.br/assets/assefazLogo-Bue8B4bU.png',
    'https://clinicacolunasemdor.com.br/assets/cabespLogo-BA-S1n1p.png',
    'https://clinicacolunasemdor.com.br/assets/economusLogo-Ck8U2Lf8.webp',
    'https://clinicacolunasemdor.com.br/assets/saudeCaixaLogo-CiIJJatH.png',
    'https://clinicacolunasemdor.com.br/assets/postalSaudeLogo-CvJ6A7iW.png',
    'https://clinicacolunasemdor.com.br/assets/usisaudeLogo-DLGuRbld.png',
    'https://clinicacolunasemdor.com.br/assets/vivestLogo-APWYMUL2.png'
  ];

  return (
    <section id="convenios" className="py-20 md:py-28 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 space-y-6 text-center">
        <h2 className="text-primary font-bold tracking-wider text-sm uppercase">Convênios</h2>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Atendemos Seu Plano de Saúde</h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
            Trabalhamos com os principais convênios para que você possa cuidar da saúde sem preocupação financeira. Nossa equipe cuida de toda a burocracia.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {logos.map((src, i) => (
            <div key={i} className="group bg-white border border-border/60 shadow-sm rounded-xl px-5 py-4 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30" style={{ minWidth: '120px', height: '72px' }}>
              <img alt="Convênio" className="max-h-10 max-w-[100px] object-contain mix-blend-multiply" src={src} />
            </div>
          ))}
        </div>
        <div>
          <div className="whitespace-nowrap inline-flex items-center rounded-md font-semibold transition-colors border px-6 py-3 text-base bg-white shadow-sm border-secondary/30 text-foreground">
            Não encontrou seu plano?
            <a href="https://wa.me/5513991003349" target="_blank" rel="noreferrer" className="text-primary font-bold ml-2 hover:underline">Fale conosco</a>
          </div>
        </div>
      </div>
    </section>
  );
}
