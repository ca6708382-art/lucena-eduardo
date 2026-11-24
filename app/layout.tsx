import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dra. Lucena Eduardo — Jurista, Professora e Gestora de Recursos Humanos',
  description:
    'Dra. Lucena Eduardo — Jurista, Professora e Gestora de Recursos Humanos. Assessoria jurídica, docência e gestão estratégica de pessoas.',
  openGraph: {
    title: 'Dra. Lucena Eduardo — Jurista, Professora e Gestora de Recursos Humanos',
    description:
      'Jurista, Professora e Gestora de Recursos Humanos. Assessoria jurídica, docência e gestão estratégica de pessoas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Lucena Eduardo — Jurista, Professora e Gestora de Recursos Humanos',
    description:
      'Jurista, Professora e Gestora de Recursos Humanos.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={cn(manrope.variable)}>
      <body className="font-sans bg-[#FFFFFF] text-[#080808] selection:bg-[#311727] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
