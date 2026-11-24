'use client';

import Image from 'next/image';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConferenceContactsProps {
  onRegisterClick: () => void;
}

interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  href: string;
  Icon: LucideIcon;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@lucena.eduardoo',
    href: 'https://www.instagram.com/lucena.eduardoo/',
    Icon: Instagram,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@lucena.eduardoo',
    href: 'https://www.tiktok.com/@lucena.eduardoo',
    Icon: Music2,
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'Lucena Eduardo',
    href: 'https://www.facebook.com/lucena.eduardo',
    Icon: Facebook,
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: '+244 938 743 996',
    href: 'https://wa.me/244938743996',
    Icon: MessageCircle,
  },
];

export function ConferenceContacts({
  onRegisterClick,
}: ConferenceContactsProps) {
  return (
    <section
      id="contacto"
      data-scroll-section
      className="w-full bg-white py-16 lg:py-24 border-t border-[#E9E5E5]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Social Media Links & Direct Contact */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p
              data-scroll-item
              className="text-[12px] font-medium text-[#777777]"
            >
              Redes Sociais e Atendimento
            </p>

            <h2
              data-scroll-item
              className="mt-2.5 text-[28px] sm:text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-[#311727]"
            >
              Contactos
            </h2>

            <p
              data-scroll-item
              className="mt-4 max-w-[460px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#777777]"
            >
              Acompanhe o trabalho da Dra. Lucena Eduardo nas redes sociais ou
              entre em contacto directo pelo WhatsApp para consultorias,
              formações e palestras.
            </p>

            <div className="mt-8 max-w-[480px] divide-y divide-[#E9E5E5] border-y border-[#E9E5E5]">
              {SOCIAL_LINKS.map((item) => {
                const { Icon } = item;
                return (
                  <a
                    key={item.id}
                    data-scroll-stagger
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3.5 px-2 -mx-2 rounded-[2px] cursor-pointer transition-colors hover:bg-[#F5F5F5]"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#311727] text-white transition-transform duration-200 group-hover:scale-105">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold leading-tight text-[#080808]">
                          {item.platform}
                        </p>
                        <p className="mt-0.5 truncate text-[12px] text-[#777777]">
                          {item.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[#777777] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#311727]"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <div data-scroll-item className="mt-8">
              <Button
                type="button"
                onClick={onRegisterClick}
                className="h-10 rounded-full bg-[#311727] px-7 text-[12px] font-medium text-white hover:bg-[#311727]/90 shadow-none whitespace-nowrap"
              >
                Enviar mensagem
              </Button>
            </div>
          </div>

          {/* Right Column: Background-Removed Monochrome Portrait */}
          <div
            data-scroll-media
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px]">
              <Image
                src="/assets/aistudio/Retrato_corporativo_elegante_com_sorriso__1_-removebg-preview_dc35d04b.png"
                alt="Dra. Lucena Eduardo — Retrato corporativo"
                fill
                sizes="(max-width: 640px) 340px, 380px"
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
