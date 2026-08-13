import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import TopicCard from '@/components/sections/TopicCard';
import CodeBlock from '@/components/ui/CodeBlock';
import InterviewBox from '@/components/sections/InterviewBox';

const topics = [
  {
    icon: '📐',
    title: 'CSS Grid & Flexbox',
    titleBn: 'Complex layout তৈরির tool',
    description: 'Grid for 2D layouts, Flexbox for 1D. Both are essential. Understand auto-fit, auto-fill, minmax(), grid areas, flex-grow/shrink/basis.',
    tags: ['Grid', 'Flexbox', 'Layout'],
  },
  {
    icon: '🎭',
    title: 'CSS Custom Properties',
    titleBn: 'Dynamic theming এর জন্য CSS variables',
    description: 'CSS Variables (--var-name) enable dynamic theming, component-scoped styles, and JavaScript integration. Essential for design systems.',
    tags: ['Variables', 'Theming'],
  },
  {
    icon: '♿',
    title: 'Accessibility (a11y)',
    titleBn: 'সবার জন্য usable করো',
    description: 'ARIA attributes, focus management, color contrast, keyboard navigation, skip links. Senior devs treat a11y as non-negotiable.',
    tags: ['ARIA', 'a11y', 'WCAG'],
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    titleBn: 'সব screen এ perfect look',
    description: 'Mobile-first approach, CSS Container Queries, clamp(), fluid typography, viewport units (svh, dvh). Beyond just media queries.',
    tags: ['Mobile-first', 'Container Query'],
  },
];

const interviewQuestions = [
  {
    question: 'What is the difference between visibility: hidden and display: none?',
    answer: 'display: none removes the element from the document flow entirely (no space occupied). visibility: hidden hides the element but keeps its space. opacity: 0 also keeps space but allows pointer events.',
    answerBn: 'display:none element কে DOM থেকে visually সরিয়ে দেয়, কোনো space নেয় না। visibility:hidden লুকায় কিন্তু space রাখে। animation এবং accessibility এর জন্য সঠিক choice করতে হবে।',
  },
  {
    question: 'What is CSS Specificity? How is it calculated?',
    answer: 'Specificity determines which CSS rule wins when multiple rules apply. Calculated as: Inline styles (1,0,0,0) > IDs (0,1,0,0) > Classes/Attributes/Pseudo-classes (0,0,1,0) > Elements/Pseudo-elements (0,0,0,1). !important overrides all (avoid it).',
    answerBn: 'কোন CSS rule জিতবে তা specificity দিয়ে ঠিক হয়। Inline > ID > Class > Element। !important দিয়ে সব override করা যায় কিন্তু এটা ব্যবহার এড়িয়ে চলা উচিত।',
  },
];

const cssCode = `/* CSS Custom Properties — Design System */
:root {
  --color-primary: #4f8ef7;
  --color-surface: #0f1629;
  --spacing-unit: 8px;
  --radius-md: 12px;
  --font-heading: 'Sora', sans-serif;
}

/* CSS Grid — Advanced Layout */
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: calc(var(--spacing-unit) * 3);
}

/* Container Queries */
.card-wrapper { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}

/* Fluid Typography — clamp() */
.heading {
  font-size: clamp(20px, 3vw, 40px);
}`;

export default function HtmlCssSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="02"
        title="HTML5 & CSS3 — Advanced"
        titleBn="সিনিয়র লেভেলের HTML ও CSS দক্ষতা"
        icon="🎨"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Semantic HTML — কেন এত গুরুত্বপূর্ণ?"
          contentBn="Semantic HTML মানে সঠিক element সঠিক জায়গায় ব্যবহার করা। শুধু div দিয়ে সব করলে হবে না। header, nav, main, article, section, aside, footer এগুলো SEO, Accessibility, এবং screen reader এর জন্য অত্যন্ত গুরুত্বপূর্ণ।"
          titleEn="Semantic HTML — Why is it so important?"
          contentEn="Semantic HTML is about using meaningful elements that describe content purpose. It dramatically improves SEO, accessibility, and code maintainability. A senior dev never uses a div when a semantic element fits."
          tag="HTML5"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>

      <div className="mb-8">
        <CodeBlock
          title="advanced-css-patterns.css"
          language="CSS3"
          code={cssCode}
        />
      </div>

      <InterviewBox
        title="CSS Interview Questions (Senior Level)"
        questions={interviewQuestions}
      />
    </div>
  );
}
