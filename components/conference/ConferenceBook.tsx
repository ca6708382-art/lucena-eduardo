'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ConferenceBookProps {
  onRegisterClick: () => void;
}

export function ConferenceBook({ onRegisterClick }: ConferenceBookProps) {
  return (
    <section
      id="minha-obra"
      data-scroll-section
      className="w-full bg-white py-16 lg:py-24 border-t border-[#E9E5E5]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Text About the Book */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p
              data-scroll-item
              className="text-[12px] font-medium text-[#777777]"
            >
              Literatura e Formação · Luz &amp; Livros
            </p>

            <h2
              data-scroll-item
              className="mt-2.5 text-[28px] sm:text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-[#311727]"
            >
              Minha Obra
            </h2>

            <h3
              data-scroll-item
              className="mt-4 text-[18px] sm:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#080808]"
            >
              Jovens de Valor — Conselhos da Madrinha
            </h3>

            <div
              data-scroll-item
              className="mt-5 max-w-[540px] space-y-4 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#080808]/85"
            >
              <p>
                <em>Jovens de Valor</em> nasce da vivência académica,
                profissional e humana da Dra. Lucena Eduardo ao lado da juventude,
                reunindo reflexões práticas e orientações essenciais para quem
                deseja construir um percurso sólido com ética, propósito e
                responsabilidade.
              </p>
              <p>
                Com uma abordagem próxima e inspiradora em formato de conselhos,
                a obra aborda escolhas de vida, postura profissional, gestão das
                emoções, cidadania e liderança — fortalecendo a confiança de
                jovens que procuram transformar o seu potencial em conquistas
                reais.
              </p>
              <p className="text-[#777777]">
                Escrito em coautoria entre Lucena da Conceição e Fernandes
                Eduardo Domingos, o livro afirma-se como um guia formativo para
                estudantes, jovens profissionais, famílias e mentores.
              </p>
            </div>

            <div
              data-scroll-item
              className="mt-8 pt-6 max-w-[540px] border-t border-[#E9E5E5] flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <p className="text-[13px] font-semibold tracking-tight text-[#080808]">
                  Lucena da Conceição · Fernandes Eduardo Domingos
                </p>
                <p className="mt-0.5 text-[12px] text-[#777777]">
                  Edição Luz &amp; Livros
                </p>
              </div>

              <Button
                type="button"
                onClick={onRegisterClick}
                className="h-9 rounded-full bg-[#311727] px-6 text-[12px] font-medium text-white hover:bg-[#311727]/90 shadow-none whitespace-nowrap"
              >
                Solicitar exemplar
              </Button>
            </div>
          </div>

          {/* Right Column: Transparent Monochrome Book Mockup */}
          <div
            data-scroll-media
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[400px]">
              <Image
                src="/assets/aistudio/Mockup_de_Livros_Jovens_de_Valor-removebg-preview_a940a379.png"
                alt="Capa e mockup do livro Jovens de Valor — Conselhos da Madrinha"
                fill
                sizes="(max-width: 640px) 340px, 400px"
                referrerPolicy="no-referrer"
                className="object-contain object-center grayscale contrast-110 transition-[filter] duration-500 ease-out hover:grayscale-0 hover:contrast-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
