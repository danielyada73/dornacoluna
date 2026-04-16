import React from 'react';
import { Activity, ShieldCheck, ArrowRight } from 'lucide-react';

const conditions = [
  {
    title: 'Hérnia de Disco',
    description: 'Compressão dos nervos da coluna que pode causar dor intensa e dormência.',
    image: 'https://drthiagosoarescoluna.com.br/wp-content/uploads/2024/04/hernia-de-disco-scaled.jpeg',
  },
  {
    title: 'Artrose na Coluna',
    description: 'Bicos de papagaio e desgaste das facetas articulares, causando dor e rigidez.',
    image: 'https://encontrar.org.br/wp-content/uploads/2020/01/unnamed-3.jpg',
  },
  {
    title: 'Doenças do Tendão',
    description: 'Tendinites e outras inflamações que afetam a mobilidade e causam desconforto.',
    image: 'https://danielsoutoortopedista.com.br/wp-content/uploads/2020/09/Doenca-de-Sever.jpg',
  },
  {
    title: 'Hérnia Cervical',
    description: 'Hérnia na região do pescoço com irradiação para os braços e mãos.',
    image: 'https://drflaviozelada.com.br/wp-content/uploads/2025/04/hernia-de-disco-cervical.jpg',
  },
  {
    title: 'Hérnia Lombar',
    description: 'Hérnia na região baixa das costas com irradiação para as pernas.',
    image: 'https://lirp.cdn-website.com/c4a4f931/dms3rep/multi/opt/mitos+e+verdades+sobre+hernia+de+disco-1920w.jpeg',
  },
  {
    title: 'Escoliose',
    description: 'Curvatura lateral anormal da coluna vertebral, visível em exames de imagem.',
    image: 'https://drvagnerdepaiva.com.br/wp-content/uploads/2021/05/tipos-de-escoliose.jpg',
  },
  {
    title: 'Estenose de Canal',
    description: 'Estreitamento do canal onde passam os nervos, causando dor ao caminhar.',
    image: 'https://drthiagosoarescoluna.com.br/wp-content/uploads/2024/06/estenose-do-canal-vertebral.jpg',
  },
  {
    title: 'Síndrome Pós-Laminectomia',
    description: 'Dor que persiste após cirurgias de coluna ou falha de artrodese anterior.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENmOxH_wESxhr4A4x_u50rmV7HcSF4FTvGQ&s',
  },
  {
    title: 'Artrose Geral',
    description: 'Desgaste cartilaginoso em grandes articulações como joelho e quadril.',
    image: 'https://www.drasandraalveshomeopata.com.br/images/stories/Especialidades/artrose.jpg',
  },
  {
    title: 'Dor Crônica Cervical',
    description: 'Tratamento especializado para dores persistentes no pescoço.',
    image: 'https://drricardoteixeira.com.br/wp-content/uploads/2019/08/artigo-cervicalgia-dor-na-cervical-dr-ricardo-teixeira.jpg',
  },
  {
    title: 'Dor Crônica Lombar',
    description: 'Tratamento focado em dores persistentes na região lombar crônica.',
    image: 'https://henriquenoronha.com.br/wp-content/uploads/2023/03/capa-1.jpg',
  },
  {
    title: 'Cefaleia Cervicogênica',
    description: 'Dores de cabeça originadas por problemas nas vértebras cervicais.',
    image: 'https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_1080,h_675/https://www.headeneckfisioterapia.com.br/wp-content/uploads/2019/12/19hn-blog-1080x628.png',
  },
  {
    title: 'Fratura na Coluna',
    description: 'Lesões ósseas vertebrais que exigem estabilização e cuidado técnico.',
    image: 'https://www.neurosul.com.br/wp-content/uploads/2021/06/fraturas-coluna-2.jpeg',
  },
  {
    title: 'Espondilolistese',
    description: 'Escorregamento de uma vértebra sobre a outra, causando dor e instabilidade.',
    image: 'https://i0.wp.com/drflaviozelada.com.br/wp-content/uploads/2025/12/tratamentos-para-espondilolistese.webp',
  }
];

export default function Clinic() {
  return (
    <section id="doencas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#BE9143] font-semibold text-sm tracking-widest uppercase mb-2 block">
            Especialidades
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0D1D3F] mb-4">
            Doenças que Tratamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos diagnóstico preciso e as técnicas mais avançadas para tratar diversas condições que afetam a coluna e as articulações.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800') {
                        target.src = 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800';
                    } else {
                        target.onerror = null; // Prevent infinite loop if fallback also fails
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D3F]/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-[#BE9143]" />
                  <h3 className="text-xl font-semibold text-[#0D1D3F]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-[#BE9143] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-[#0D1D3F] px-8 py-4 rounded-2xl border border-blue-100 mb-8">
            <ShieldCheck className="w-6 h-6 text-[#BE9143]" />
            <span className="font-medium">Tratamentos focados no seu bem-estar e recuperação funcional.</span>
          </div>
          <br />
          <a href="#contato" className="inline-flex bg-[#0D1D3F] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#BE9143] transition-colors items-center gap-2 shadow-lg hover:shadow-xl">
            Solicitar Avaliação Especializada
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
