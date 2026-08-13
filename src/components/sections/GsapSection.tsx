import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';

const gsapCode = `import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function AnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // TIMELINE — Sequenced animations
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      y: 80, opacity: 0, duration: 0.8, ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      y: 40, opacity: 0, duration: 0.6, ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-cta', {
      scale: 0.8, opacity: 0, duration: 0.4
    }, '-=0.2');

    // STAGGER — Multiple elements
    gsap.from(cardsRef.current, {
      y: 60, opacity: 0,
      duration: 0.6, ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    // SCROLL-LINKED — Parallax effect
    gsap.to('.parallax-bg', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h1 className="hero-title">...</h1>
      {cards.map((card, i) => (
        <div ref={el => el && (cardsRef.current[i] = el)}>...</div>
      ))}
    </div>
  );
}`;

export default function GsapSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="10"
        title="GSAP & Advanced Animations"
        titleBn="Professional-grade animations — Basic থেকে ScrollTrigger পর্যন্ত"
        icon="🎬"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="GSAP কেন CSS Animation এর চেয়ে ভালো?"
          contentBn="GSAP (GreenSock Animation Platform) CSS animation এর চেয়ে অনেক বেশি control দেয়। Complex sequences, timeline-based animations, physics-based motion, ScrollTrigger দিয়ে scroll-linked animations — এগুলো CSS দিয়ে করা প্রায় অসম্ভব।"
          titleEn="Why is GSAP better than CSS animations?"
          contentEn="GSAP offers superior control over CSS animations: timeline sequencing, staggering, physics-based motion, and the powerful ScrollTrigger plugin for scroll-linked animations. It's cross-browser consistent and GPU-accelerated."
          tag="GSAP"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="gsap-advanced.tsx"
          language="GSAP + React"
          code={gsapCode}
        />
      </div>
    </div>
  );
}
