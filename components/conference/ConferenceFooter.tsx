'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConferenceFooterProps {
  onScrollToTop?: () => void;
}

export function ConferenceFooter({ onScrollToTop }: ConferenceFooterProps) {
  const scrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-scroll-section
      className="w-full bg-[#311727] text-white pt-14 pb-10 lg:pt-16 lg:pb-12"
    >
      <div
        data-scroll-item
        className="mx-auto max-w-[1200px] px-6 lg:px-10"
      >
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-12">
          {/* Left Area: Identity */}
          <div className="max-w-[260px]">
            <p className="text-[16px] font-semibold tracking-tight text-white">
              Dra. Lucena Eduardo
            </p>
            <p className="mt-3 text-[12px] leading-[1.45] text-white/75">
              Jurista, Professora e Gestora
              <br />
              de Recursos Humanos
            </p>
          </div>

          {/* Right Area: Navigation, Contact & Outlined Scroll-to-Top Pill Button */}
          <div className="flex flex-col justify-between gap-8 md:items-end">
            <nav
              aria-label="Navegação do rodapé"
              className="flex flex-wrap items-center gap-6 sm:gap-8 text-[12px] text-white/80"
            >
              <a
                href="#top"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Início
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Sobre mim
              </a>
              <a
                href="#competencias"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Competências
              </a>
              <a
                href="#contacto"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Contacto
              </a>
            </nav>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <a
                href="https://wa.me/244938743996"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-white/85 hover:text-white transition-colors whitespace-nowrap"
              >
                WhatsApp: +244 938 743 996
              </a>

              <Button
                type="button"
                variant="outline"
                onClick={scrollToTop}
                className="h-8 rounded-full border-white/40 bg-transparent px-5 text-[11px] font-medium text-white hover:bg-white/10 hover:text-white shadow-none whitespace-nowrap"
              >
                Topo
                <ArrowUp className="ml-1.5 h-3 w-3" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] text-white/55">
          <span>© 2026 Dra. Lucena Eduardo. Todos os direitos reservados.</span>
          <span>Jurista · Professora · Gestora de Recursos Humanos</span>
        </div>
      </div>
    </footer>
  );
}
