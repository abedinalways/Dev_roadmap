import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import TopicCard from '@/components/sections/TopicCard';

const topics = [
  {
    icon: '🧩',
    title: 'Component Architecture',
    titleBn: 'Component hierarchy design',
    description: 'Atomic Design (atoms, molecules, organisms), Smart vs Dumb components, Feature-based folder structure, Barrel exports।',
    tags: ['Atomic', 'Architecture'],
  },
  {
    icon: '🌐',
    title: 'Micro-frontends',
    titleBn: 'Large app কে ছোট অংশে ভাগ করো',
    description: 'Module Federation (Webpack 5), independently deployable frontend apps, team autonomy। Enterprise scale এ ব্যবহার হয়।',
    tags: ['Module Federation', 'Scale'],
  },
  {
    icon: '🔒',
    title: 'Security',
    titleBn: 'Frontend security essentials',
    description: 'XSS prevention, CSRF tokens, Content Security Policy, secure cookie flags (HttpOnly, Secure, SameSite), input sanitization।',
    tags: ['XSS', 'CSP', 'CSRF'],
  },
  {
    icon: '📊',
    title: 'Monitoring & Observability',
    titleBn: 'Production এ কী হচ্ছে দেখো',
    description: 'Sentry for error tracking, Datadog/New Relic for performance, custom analytics, Real User Monitoring (RUM)।',
    tags: ['Sentry', 'RUM', 'Analytics'],
  },
];

const interviewFramework = {
  bn: `১. Requirements Clarify করো: "এটা কি mobile-only? কতজন users? Real-time দরকার?" জিজ্ঞেস করো।
২. High-level Architecture: Component tree, data flow sketch করো।
৩. Core Components: কোন components তৈরি করবে, তাদের props কী।
৪. State Management: Local vs Global state কীভাবে ভাগ করবে।
৫. API Design: কীভাবে backend থেকে data আনবে।
৬. Performance: Lazy loading, virtualization, caching।
৭. Trade-offs: তুমি কী choose করলে এবং কেন।`,
  en: `Structure your answer: (1) Clarify requirements and constraints, (2) High-level component architecture, (3) State management approach, (4) Data fetching strategy, (5) Performance considerations, (6) Error handling and loading states, (7) Accessibility, (8) Testing strategy, (9) Trade-offs and alternatives. Always explain WHY you made each choice.`,
};

export default function SystemDesignSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="12"
        title="Frontend System Design"
        titleBn="Senior Interview এর সবচেয়ে কঠিন অংশ — System Design"
        icon="🏗️"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Frontend System Design কী জিজ্ঞেস করে?"
          contentBn="Senior interview তে system design question হবেই। যেমন: 'Design a real-time collaborative document editor like Google Docs', 'Design a social media feed like Facebook', 'Design an e-commerce product listing page'।"
          titleEn="What does Frontend System Design ask?"
          contentEn="System design for frontend involves: component architecture, state management strategy, API design (REST vs GraphQL vs tRPC), performance budgets, caching strategy, code splitting, accessibility, i18n, error boundaries, monitoring/logging, and CI/CD."
          tag="Senior Interview"
        />
      </div>

      <div className="mb-8">
        <BilingualBlock
          titleBn="Framework: কীভাবে System Design Answer করবে?"
          contentBn={interviewFramework.bn}
          titleEn="Framework: How to answer System Design?"
          contentEn={interviewFramework.en}
          tag="Interview Framework"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>
    </div>
  );
}
