import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

export default function Instagram() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10 overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Página do Instagram</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Siga a <a href="https://instagram.com/clinicacolunasemdor" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">@clinicacolunasemdor</a> e fique por dentro das novidades, tratamentos e dicas de saúde.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <a href="https://instagram.com/clinicacolunasemdor" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors border shadow-sm rounded-md px-8 gap-2 border-primary text-primary hover:bg-primary/5 text-base h-12">
            <InstagramIcon className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
