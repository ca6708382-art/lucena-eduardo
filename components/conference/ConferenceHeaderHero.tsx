'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

interface ConferenceHeaderHeroProps {
  onRegisterClick: () => void;
}

export function ConferenceHeaderHero({
  onRegisterClick,
}: ConferenceHeaderHeroProps) {
  return (
    <section
      id="top"
      className="relative w-full bg-[#311727] text-white overflow-hidden"
    >
      {/* Discreet Top Navigation Bar */}
      <header className="absolute top-0 inset-x-0 z-20 mx-auto max-w-[1200px] px-6 lg:px-10 pt-6 lg:pt-7">
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8 text-[12px] leading-none"
        >
          <a
            href="#top"
            className="font-medium text-white hover:text-white/90 transition-colors whitespace-nowrap shrink-0"
          >
            Início
          </a>
          <a
            href="#about"
            className="text-white/75 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Sobre mim
          </a>
          <a
            href="#competencias"
            className="text-white/75 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Competências
          </a>
          <a
            href="#contacto"
            className="text-white/75 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Split 50/50 Hero Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[680px] xl:min-h-[720px]">
        {/* Left Column: Primary Panel */}
        <div className="flex flex-col justify-center bg-[#311727] pt-28 pb-16 px-6 sm:px-10 lg:pt-32 lg:pb-24 lg:pl-[max(2.5rem,calc((100vw-1200px)/2+2.5rem))] lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[540px]"
          >
            <h1 className="text-[40px] sm:text-[50px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.06] tracking-[-0.025em] text-white">
              Dra. Lucena
              <br />
              Eduardo
            </h1>

            <p className="mt-5 max-w-[340px] text-[13px] sm:text-[14px] font-normal leading-[1.5] text-white/80">
              Jurista, Professora e Gestora de Recursos Humanos
            </p>

            <div className="mt-8">
              <Button
                type="button"
                onClick={onRegisterClick}
                className="h-10 rounded-full bg-white px-7 text-[12px] font-medium text-[#311727] hover:bg-white/90 shadow-none whitespace-nowrap"
              >
                Entrar em contacto
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Full-height High-Contrast Black & White Editorial Photograph */}
        <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-full w-full overflow-hidden bg-[#080808]">
          <Image
            src="/assets/aistudio/Retrato_corporativo_de_executiva_confiante_4fcd119e.png"
            alt="Retrato corporativo da Dra. Lucena Eduardo"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            referrerPolicy="no-referrer"
            className="object-cover object-top grayscale contrast-110 transition-[filter] duration-300 ease-out hover:grayscale-0 hover:contrast-100"
          />
        </div>
      </div>
    </section>
  );
}
