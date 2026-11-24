'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ConferenceAboutMeProps {
  onRegisterClick: () => void;
}

export function ConferenceAboutMe({ onRegisterClick }: ConferenceAboutMeProps) {
  return (
    <section
      id="about"
      data-scroll-section
      className="w-full bg-white pt-20 pb-10 lg:pt-28 lg:pb-14"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Rounded-Corner Photograph Slot */}
          <div data-scroll-media className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#E9E5E5] bg-[#F5F5F5]">
              <Image
                src="/assets/aistudio/Retrato_corporativo_de_executiva_confiante_4fcd119e.png"
                alt="Dra. Lucena Eduardo — Retrato corporativo"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 460px"
                referrerPolicy="no-referrer"
                className="object-cover object-top grayscale contrast-110 transition-[filter] duration-300 ease-out hover:grayscale-0 hover:contrast-100"
              />
            </div>
          </div>

          {/* Right Column: Editorial About Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p
              data-scroll-item
              className="text-[12px] font-medium text-[#777777]"
            >
              Jurista · Professora · Gestora de Recursos Humanos
            </p>

            <h2
              data-scroll-item
              className="mt-2.5 text-[28px] sm:text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-[#311727]"
            >
              Sobre mim
            </h2>

            <div
              data-scroll-item
              className="mt-6 max-w-[560px] space-y-4 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#080808]/85"
            >
              <p>
                Com atuação consolidada nas áreas do Direito, da docência e da
                gestão estratégica de pessoas, dedico o meu percurso profissional
                a unir rigor jurídico, desenvolvimento humano e liderança ética
                nas organizações.
              </p>
              <p>
                Como professora e formadora, acredito no conhecimento aplicado
                como instrumento de transformação real — preparando profissionais
                e equipas para decisões sólidas em contextos corporativos e
                institucionais exigentes.
              </p>
              <p className="text-[#777777]">
                Na gestão de recursos humanos, atuo na construção de culturas
                organizacionais saudáveis, políticas laborais claras e planos de
                crescimento alinhados aos objetivos estratégicos de cada empresa.
              </p>
            </div>

            <div
              data-scroll-item
              className="mt-8 pt-6 max-w-[560px] border-t border-[#E9E5E5] flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <p className="text-[14px] font-semibold tracking-tight text-[#080808]">
                  Dra. Lucena Eduardo
                </p>
                <p className="mt-0.5 text-[12px] text-[#777777]">
                  Jurista, Professora e Gestora de Recursos Humanos
                </p>
              </div>

              <Button
                type="button"
                onClick={onRegisterClick}
                className="h-9 rounded-full bg-[#311727] px-6 text-[12px] font-medium text-white hover:bg-[#311727]/90 shadow-none whitespace-nowrap"
              >
                Entrar em contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
