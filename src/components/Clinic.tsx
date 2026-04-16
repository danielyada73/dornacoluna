import React from 'react';
import { Activity, ShieldCheck, ArrowRight } from 'lucide-react';

const conditions = [
  {
    title: 'Hérnia de Disco',
    description: 'Compressão dos nervos da coluna que pode causar dor intensa e dormência.',
    image: 'https://lh3.googleusercontent.com/d/1Uk3qqcAp4yP5xWYeTYFiUmrjpN11Ou8m',
  },
  {
    title: 'Artrose na Coluna',
    description: 'Bicos de papagaio e desgaste das facetas articulares, causando dor e rigidez.',
    image: 'https://doutorvagnerdepaiva.com.br/wp-content/uploads/2022/10/artrose-na-coluna.jpg',
  },
  {
    title: 'Doenças do Tendão',
    description: 'Tendinites e outras inflamações que afetam a mobilidade e causam desconforto.',
    image: 'https://cetrus.com.br/wp-content/uploads/2025/01/cetrus-curso-intensivo-infiltracao-da-coluna-guiada-por-ultrassom.webp',
  },
  {
    title: 'Hérnia Cervical',
    description: 'Hérnia na região do pescoço com irradiação para os braços e mãos.',
    image: 'https://www.clinicadacoluna.com.br/wp-content/uploads/2020/09/dor-cervical.jpg',
  },
  {
    title: 'Hérnia Lombar',
    description: 'Hérnia na região baixa das costas com irradiação para as pernas.',
    image: 'https://www.clinicadacoluna.com.br/wp-content/uploads/2020/09/dor-lombar.jpg',
  },
  {
    title: 'Escoliose',
    description: 'Curvatura lateral anormal da coluna vertebral, visível em exames de imagem.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Scoliosis_x-ray.jpg',
  },
  {
    title: 'Estenose de Canal',
    description: 'Estreitamento do canal onde passam os nervos, causando dor ao caminhar.',
    image: 'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/17499-spinal-stenosis-02',
  },
  {
    title: 'Síndrome Pós-Laminectomia',
    description: 'Dor que persiste após cirurgias de coluna ou falha de artrodese anterior.',
    image: 'https://www.painsolution.com.br/wp-content/uploads/2021/05/sindrome-pos-laminectomia.jpg',
  },
  {
    title: 'Artrose Geral',
    description: 'Desgaste cartilaginoso em grandes articulações como joelho e quadril.',
    image: 'https://drvagnerdepaiva.com.br/wp-content/uploads/2025/08/Dores-articulares-que-vao-e-voltam-Nao-ignore-os-sinais-do-seu-corpo.jpg',
  },
  {
    title: 'Dor Crônica Cervical',
    description: 'Tratamento especializado para dores persistentes no pescoço.',
    image: 'https://cdn.pixabay.com/photo/2018/02/16/09/20/neck-pain-3156824_1280.jpg',
  },
  {
    title: 'Dor Crônica Lombar',
    description: 'Tratamento focado em dores persistentes na região lombar crônica.',
    image: 'https://cdn.pixabay.com/photo/2018/05/28/19/03/back-3437021_1280.jpg',
  },
  {
    title: 'Cefaleia Cervicogênica',
    description: 'Dores de cabeça originadas por problemas nas vértebras cervicais.',
    image: 'https://www.institutodavertigem.com.br/wp-content/uploads/2021/03/cefaleia-cervicogenica.jpg',
  },
  {
    title: 'Fratura na Coluna',
    description: 'Lesões ósseas vertebrais que exigem estabilização e cuidado técnico.',
    image: 'https://hcitajuba.org.br/wp-content/uploads/2025/07/Raio-X-da-Coluna_-Entenda-os-Diferentes-Tipos-e-Seus-Propositos-1024x536.png',
  },
  {
    title: 'Espondilolistese',
    description: 'Escorregamento de uma vértebra sobre a outra, causando dor e instabilidade.',
    image: 'https://www.clinicadacoluna.com.br/wp-content/uploads/2020/09/espondilolistese.jpg',
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
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800';
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
