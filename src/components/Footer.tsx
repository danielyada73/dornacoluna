import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1D3F] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col items-center justify-center mb-16">
                <img
                    src="https://lh3.googleusercontent.com/d/1lXEpi_A_5e3JpIpX1gAYblNEYFSQTlEw"
                    alt="CEMEDDE"
                    className="h-14 w-auto object-contain mb-3"
                />
                <span className="font-semibold text-sm tracking-widest uppercase text-[#BE9143]">CEMEDDE</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Contato */}
                <div>
                    <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-[#BE9143]" strokeWidth={1.5} />
                        Contato
                    </h4>
                    <div className="space-y-4 text-gray-300 text-sm">
                        <p className="flex items-start gap-3">
                            <span className="block">+55 (11) 92227-2726</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <Mail className="w-4 h-4 mt-1 text-[#BE9143] shrink-0" strokeWidth={1.5} />
                            <span className="block">contato@doutordanieledde.com</span>
                        </p>
                    </div>
                </div>

                {/* Endereço SP */}
                <div className="lg:col-span-2">
                    <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#BE9143]" strokeWidth={1.5} />
                        Endereço Brasil
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-300 text-sm">
                        <div>
                            <p className="font-semibold text-white mb-1">São Paulo</p>
                            <p>R. Cotoxó, 970 – 408</p>
                            <p>Pompeia, São Paulo – SP</p>
                            <p>05021-001</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">Rio de Janeiro</p>
                            <p>Praia do Flamengo, 66</p>
                            <p>Flamengo, Rio de Janeiro – RJ</p>
                            <p>22210-030</p>
                        </div>
                    </div>
                </div>

                {/* Endereço Lisboa */}
                <div>
                    <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#BE9143]" strokeWidth={1.5} />
                        Endereço Lisboa
                    </h4>
                    <div className="space-y-4 text-gray-300 text-sm">
                        <p>R. Gen. Firmino Miguel 5B,</p>
                        <p>CEP: 1600-100</p>
                        <p>Portugal</p>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>© 2026 CEMEDDE. Todos os direitos reservados.</p>
                <p>Site desenvolvido por Marketing Alpha Digital.</p>
            </div>
        </div>
    </footer>
  );
}
