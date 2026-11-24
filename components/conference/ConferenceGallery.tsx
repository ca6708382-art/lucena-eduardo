'use client';

import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface GalleryItem {
  id: string;
  label: string;
  context: string;
  alt: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'cooperacao',
    label: 'Cooperação',
    context: 'Encontro Institucional',
    alt: 'Dra. Lucena Eduardo em encontro institucional internacional',
    description:
      'Participação em encontro institucional e intercâmbio de cooperação internacional.',
    image:
      '/assets/aistudio/652320280_26060636440253084_8592497154073689628_n_1900dafa.webp',
  },
  {
    id: 'tribuna',
    label: 'Oratória',
    context: 'Intervenção Oficial',
    alt: 'Dra. Lucena Eduardo ao microfone na tribuna',
    description:
      'Intervenção pública na tribuna institucional em representação cívica e juvenil.',
    image:
      '/assets/aistudio/486723796_9401211163288874_8990119481952952659_n__1__c1285e98.webp',
  },
  {
    id: 'voluntariado',
    label: 'Cidadania',
    context: 'Acção Social & Media',
    alt: 'Dra. Lucena Eduardo em entrevista durante acção social e voluntariado',
    description:
      'Entrevista à comunicação social durante iniciativa de voluntariado e apoio comunitário.',
    image:
      '/assets/aistudio/647081111_25972378105745585_5697930212762026768_n_573690ee.webp',
  },
  {
    id: 'assembleia',
    label: 'Plenário',
    context: 'Assembleia Nacional',
    alt: 'Dra. Lucena Eduardo no plenário da Assembleia Nacional',
    description:
      'Presença institucional no salão plenário da Assembleia Nacional de Angola.',
    image:
      '/assets/aistudio/688823408_26620305904286132_7957414142477493176_n_07e0a01b.webp',
  },
  {
    id: 'institucional',
    label: 'Representação',
    context: 'Protocolo Oficial',
    alt: 'Dra. Lucena Eduardo junto às bandeiras institucionais',
    description:
      'Momento de representação institucional junto às bandeiras nacionais e parlamentares.',
    image:
      '/assets/aistudio/486859195_9401211253288865_6215885751053750751_n__2__09a495a3.webp',
  },
];

export function ConferenceGallery() {
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(
    null
  );

  return (
    <section
      id="gallery"
      data-scroll-section
      className="w-full bg-white pt-6 pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <h2
          data-scroll-item
          className="text-center text-[28px] sm:text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-[#311727] mb-10 lg:mb-12"
        >
          Minha Trajectória
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              data-scroll-stagger
              className="group flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="relative aspect-[3/4] w-full cursor-pointer overflow-hidden bg-[#F5F5F5] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#311727]"
                aria-label={`Abrir fotografia: ${item.label} — ${item.context}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 32vw, 224px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-top grayscale contrast-110 transition-[filter,transform] duration-300 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 bottom-3 inline-flex h-6 w-8 items-center justify-center rounded-full bg-white text-[#080808] opacity-90 transition-opacity group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </button>
              <figcaption className="mt-2.5 flex items-center justify-between gap-2 text-[11px] leading-none text-[#777777]">
                <span className="font-medium text-[#080808]/80">{item.label}</span>
                <span className="truncate">{item.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          data-scroll-item
          className="mt-14 lg:mt-16 mx-auto max-w-[380px] text-center"
        >
          <p className="text-[12px] leading-[1.55] text-[#777777]">
            Registos de participação institucional, liderança associativa,
            acção social e comunicação pública ao longo do percurso da Dra.
            Lucena Eduardo.
          </p>
          <p className="mt-5 text-[12px] font-semibold tracking-tight text-[#080808]">
            Dra. Lucena Eduardo
          </p>
        </div>
      </div>

      {/* Lightbox Dialog for Gallery Photos */}
      <Dialog
        open={Boolean(selectedItem)}
        onOpenChange={(open) => {
          if (!open) setSelectedItem(null);
        }}
      >
        <DialogContent className="sm:max-w-[540px] rounded-[4px] border border-[#E9E5E5] bg-white p-5 ring-0">
          {selectedItem ? (
            <>
              <DialogHeader className="text-left">
                <DialogTitle className="text-[18px] font-semibold text-[#311727]">
                  {selectedItem.label} ·{' '}
                  <span className="font-normal text-[#777777]">
                    {selectedItem.context}
                  </span>
                </DialogTitle>
                <DialogDescription className="text-[12px] text-[#777777]">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative mt-2 aspect-[3/4] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-top grayscale contrast-110 transition-[filter] duration-500 ease-out hover:grayscale-0 hover:contrast-100"
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
