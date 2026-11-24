'use client';

import * as React from 'react';
import {
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  Languages,
  Mic,
  MoveRight,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CompetencyBlock {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface CompetencySlide {
  id: string;
  category: string;
  items: [CompetencyBlock, CompetencyBlock, CompetencyBlock];
}

const SLIDES: CompetencySlide[] = [
  {
    id: 'formacao-academica',
    category: 'Formação Académica',
    items: [
      {
        id: 'tres-licenciaturas',
        Icon: Scale,
        title: 'Três Licenciaturas',
        description:
          'Direito pela Univ. Gregório Semedo (2025), Gestão de Recursos Humanos pelo ISPEKA (2019) e Administração e Gestão de Empresas em Windhoek, Namíbia (2012).',
      },
      {
        id: 'mestrado-grh',
        Icon: GraduationCap,
        title: 'Mestrado em GRH',
        description:
          'Mestre em Gestão de Recursos Humanos na Especialidade de Gestão e Desenvolvimento do Potencial Humano em Ambiente Empresarial pela Univ. Gregório Semedo (2024).',
      },
      {
        id: 'pos-graduacao',
        Icon: BookOpen,
        title: 'Pós-Graduação',
        description:
          'Pós-Graduação em Agregação Pedagógica para o Ensino Geral e Superior pelo Instituto Superior de Ciências da Educação — ISCED (2020).',
      },
    ],
  },
  {
    id: 'experiencia-profissional',
    category: 'Experiência Profissional',
    items: [
      {
        id: 'ministerio-educacao',
        Icon: BookOpen,
        title: 'Ministério da Educação',
        description:
          'Desde 2007 atua como Docente da Disciplina de Língua Inglesa e Coordenadora de Curso no Instituto Médio Técnico de Hotelaria e Turismo do Kilamba.',
      },
      {
        id: 'expro-group',
        Icon: Briefcase,
        title: 'Expro Group, Lda.',
        description:
          'Em 2012, no sector petrolífero em Luanda, iniciou como Técnica de Recursos Humanos e após seis meses foi promovida a Administradora Assistente de Desenvolvimento e Negócios.',
      },
      {
        id: 'gestao-televisao',
        Icon: Building2,
        title: 'Gestão & Televisão',
        description:
          'Gestora do Complexo Escolar Privado Alegas (desde 2015) e Apresentadora de Televisão na T.V Palanca (desde 2017), unindo direção executiva e comunicação.',
      },
    ],
  },
  {
    id: 'capacitacao-lideranca-idiomas',
    category: 'Capacitação, Liderança e Idiomas',
    items: [
      {
        id: 'capacitacao-sistemas',
        Icon: Mic,
        title: 'Capacitação & Sistemas',
        description:
          'Oratória e Palestrante (UGS), Jornalismo Televisivo (CEFOJOR), Marketing Corporativo, Hotelaria e Turismo, Gestão de RH em Primavera e SAP Financeiro Geral.',
      },
      {
        id: 'lideranca-associativa',
        Icon: Users,
        title: 'Liderança Associativa',
        description:
          'Presidente da Associação de Estudantes da Universidade Gregório Semedo e Secretária Provincial de Luanda da Associação de Voluntários Para o Progresso de Angola.',
      },
      {
        id: 'idiomas-perfil',
        Icon: Languages,
        title: 'Idiomas & Perfil',
        description:
          'Português e Inglês falados e escritos fluentemente, com comunicação assertiva, espírito de equipa, proatividade e sólida atuação sob pressão.',
      },
    ],
  },
];

const AUTO_ADVANCE_MS = 20000;

export function ConferenceTopics() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const handleNextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  React.useEffect(() => {
    if (isPaused) {
      return;
    }
    const timer = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [currentSlide, isPaused]);

  const handleContainerBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <section
      id="competencias"
      data-scroll-section
      className="w-full bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <h2
          data-scroll-item
          className="text-center text-[26px] sm:text-[32px] font-medium leading-[1.15] tracking-[-0.015em] text-[#311727] mb-12 lg:mb-14"
        >
          FORMAÇÕES E COMPETÊNCIAS
        </h2>

        {/* Dynamic Carousel Area with Reserved Height & Accessibility */}
        <div
          data-scroll-item
          aria-live="polite"
          aria-label={`Slide ${currentSlide + 1} de ${SLIDES.length}: ${activeSlide.category}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={handleContainerBlur}
          className="relative min-h-[290px] md:min-h-[310px] overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {activeSlide.items.map((item) => {
                const { Icon } = item;
                return (
                  <Card
                    key={item.id}
                    tabIndex={0}
                    className="flex flex-col items-center justify-center text-center rounded-[2px] border border-[#E9E5E5] ring-0 shadow-none bg-white p-8 min-h-[270px] md:min-h-[300px] transition-colors hover:border-[#311727]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#311727]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F5] text-[#311727]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="text-[17px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#311727]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[320px] text-[13px] font-normal leading-[1.6] text-[#777777]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Single Centered Circular Advance Button */}
        <div data-scroll-item className="mt-10 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={handleNextSlide}
            aria-label={`Avançar para o próximo slide (${((currentSlide + 1) % SLIDES.length) + 1} de ${SLIDES.length})`}
            className="group h-10 rounded-full border border-[#E9E5E5] bg-white px-7 text-[#311727] hover:border-[#311727] hover:bg-[#311727] hover:text-white shadow-none transition-colors"
          >
            <MoveRight
              className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
