import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import TopicCard from '@/components/sections/TopicCard';
import CodeBlock from '@/components/ui/CodeBlock';

const topics = [
  {
    icon: '📦',
    title: 'Code Splitting & Lazy Loading',
    titleBn: 'Bundle size কমাও',
    description: 'Dynamic import(), React.lazy() + Suspense, Next.js dynamic() দিয়ে components on-demand load করো। Initial bundle ছোট হয়, app fast হয়।',
    tags: ['Lazy', 'Suspense', 'Dynamic'],
  },
  {
    icon: '🖼️',
    title: 'Image Optimization',
    titleBn: 'Images optimize করো',
    description: 'WebP/AVIF format, lazy loading (loading="lazy"), Next.js Image component, proper sizing, blur placeholder দিয়ে CLS কমাও।',
    tags: ['WebP', 'Lazy Load', 'CLS'],
  },
  {
    icon: '💾',
    title: 'Caching Strategies',
    titleBn: 'Smart caching',
    description: 'HTTP cache headers, Service Workers, React Query staleTime, Next.js fetch cache, CDN caching। Data কে smart ভাবে cache করো।',
    tags: ['Cache', 'CDN', 'SW'],
  },
  {
    icon: '🔧',
    title: 'Bundle Analysis',
    titleBn: 'Bundle কী আছে দেখো',
    description: '@next/bundle-analyzer, webpack-bundle-analyzer দিয়ে bundle analyze করো। Tree shaking, dead code elimination।',
    tags: ['Webpack', 'Tree Shake'],
  },
];

const performanceCode = `// LAZY LOADING COMPONENTS
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function Dashboard() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HeavyChart />
    </Suspense>
  );
}

// DEBOUNCE — Search input optimize
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}`;

export default function PerformanceSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="08"
        title="Performance Optimization"
        titleBn="Fast, Smooth App বানানোর Senior Techniques"
        icon="🚀"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Core Web Vitals — Google এর Performance Metrics"
          contentBn="LCP (Largest Contentful Paint): সবচেয়ে বড় content কত দ্রুত দেখা যাচ্ছে। Target: <2.5s. FID/INP: User এর click/input এর কত দ্রুত response হচ্ছে। Target: <200ms. CLS: Page load এর সময় element কতটা নড়াচড়া করছে। Target: <0.1."
          titleEn="Core Web Vitals — Google's Performance Metrics"
          contentEn="Core Web Vitals are Google's user-experience metrics that directly affect SEO rankings. LCP measures loading performance; INP measures interactivity; CLS measures visual stability."
          tag="SEO + UX"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {topics.map((topic) => (
          <TopicCard key={topic.title} {...topic} />
        ))}
      </div>

      <div className="mb-8">
        <CodeBlock
          title="performance-patterns.tsx"
          language="React + Next.js"
          code={performanceCode}
        />
      </div>
    </div>
  );
}
