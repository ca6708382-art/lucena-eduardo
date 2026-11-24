'use client';

import * as React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ConferenceHeaderHero } from './ConferenceHeaderHero';
import { ConferenceAboutMe } from './ConferenceAboutMe';
import { ConferenceTopics } from './ConferenceTopics';
import { ConferenceGallery } from './ConferenceGallery';
import { ConferenceBook } from './ConferenceBook';
import { ConferenceContacts } from './ConferenceContacts';
import { ConferenceFooter } from './ConferenceFooter';
import { RegistrationDialog } from './RegistrationDialog';

export function ConferencePage() {
  const [registrationOpen, setRegistrationOpen] = React.useState(false);
  const pageRef = React.useRef<HTMLDivElement | null>(null);

  const openRegistration = () => setRegistrationOpen(true);

  React.useEffect(() => {
    // Always start at the Hero section when the site loads
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.ticker.lagSmoothing(500, 33);
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Lightweight one-shot reveals (no continuous scroll scrub or image scale)
      const sections = gsap.utils.toArray<HTMLElement>('[data-scroll-section]');
      sections.forEach((section) => {
        const targets = section.querySelectorAll(
          '[data-scroll-item], [data-scroll-media], [data-scroll-stagger]'
        );

        if (targets.length === 0) return;

        gsap.from(targets, {
          y: 14,
          opacity: 0,
          duration: 0.48,
          stagger: 0.045,
          ease: 'power2.out',
          force3D: true,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            once: true,
          },
        });
      });
    }, pageRef);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const destination = document.querySelector(hash);
      if (!destination) return;

      event.preventDefault();

      gsap.to(window, {
        scrollTo: { y: destination, autoKill: true },
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      ctx.revert();
    };
  }, []);

  const handleScrollToTop = React.useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    gsap.to(window, {
      scrollTo: { y: 0, autoKill: true },
      duration: prefersReducedMotion ? 0 : 0.55,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen w-full overflow-x-clip bg-white text-[#080808]"
    >
      <main>
        <ConferenceHeaderHero onRegisterClick={openRegistration} />
        <ConferenceAboutMe onRegisterClick={openRegistration} />
        <ConferenceTopics />
        <ConferenceGallery />
        <ConferenceBook onRegisterClick={openRegistration} />
        <ConferenceContacts onRegisterClick={openRegistration} />
      </main>
      <ConferenceFooter onScrollToTop={handleScrollToTop} />
      <RegistrationDialog
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
      />
    </div>
  );
}
