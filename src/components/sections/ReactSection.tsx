import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';
import InterviewBox from '@/components/sections/InterviewBox';

const hooksCode = `// CUSTOM HOOKS — Senior skill
import { useState, useEffect, useCallback, useRef } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController>();

  const fetchData = useCallback(async () => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url, { signal: abortRef.current.signal });
      if (!res.ok) throw new Error(\`HTTP error: \${res.status}\`);
      const json: T = await res.json();
      setData(json);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// PERFORMANCE HOOKS
const ExpensiveComponent = React.memo(({ data }: { data: User[] }) => {
  const processedData = useMemo(
    () => data.filter(u => u.role === 'admin'),
    [data]
  );

  const handleClick = useCallback((id: number) => {
    console.log('Clicked:', id);
  }, []);

  return <div>...</div>;
});`;

export default function ReactSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="05"
        title="React — Deep Dive"
        titleBn="React এর ভেতরের mechanics থেকে Advanced Patterns পর্যন্ত"
        icon="⚛️"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="React Internals — কীভাবে কাজ করে?"
          contentBn="Virtual DOM: React একটি in-memory DOM tree রাখে। যখন state বদলায়, React Virtual DOM এ নতুন tree তৈরি করে, পুরনো tree এর সাথে compare করে (Diffing), এবং শুধু changed parts কে real DOM এ update করে — এটাকে Reconciliation বলে। React Fiber: React 16 থেকে আসা নতুন reconciliation engine।"
          titleEn="React Internals — How does it work?"
          contentEn="Virtual DOM: React maintains an in-memory representation of the DOM. On state change, it creates a new virtual tree, diffs it against the previous one (reconciliation), and makes minimal real DOM updates. React Fiber enables this work to be interruptible and prioritized."
          tag="Senior Must Know"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="react-advanced-hooks.tsx"
          language="React + TypeScript"
          code={hooksCode}
        />
      </div>

      <div className="mb-8">
        <BilingualBlock
          titleBn="React Design Patterns — Senior Level"
          contentBn="Senior developer কিছু important design patterns জানে যেগুলো code reusability এবং maintainability বাড়ায়। এগুলো হলো: Compound Components, Render Props, HOC (Higher Order Components), Provider Pattern, এবং Container/Presentational Pattern।"
          titleEn="React Design Patterns — Senior Level"
          contentEn="Design patterns solve recurring problems elegantly. Key React patterns: Compound Components, Custom Hooks, HOC, Render Props, and the modern Hooks composition pattern."
          tag="Patterns"
        />
      </div>

      <InterviewBox
        title="React Interview Questions (Senior)"
        questions={[
          {
            question: 'What is the difference between useMemo and useCallback?',
            answer: 'useMemo memoizes a computed value — runs a function and caches its return value. useCallback memoizes a function reference — returns the same function reference across renders. Both take a dependency array.',
            answerBn: 'useMemo একটি value cache করে। useCallback একটি function এর reference cache করে। useMemo = expensive calculation এর result মনে রাখো। useCallback = function কে child এ pass করার সময় unnecessary re-render বন্ধ করো।',
          },
          {
            question: "Why shouldn't you update state directly in React?",
            answer: 'React state is immutable by design. Direct mutation does not trigger re-renders because React uses reference equality checks. Always create new objects/arrays.',
            answerBn: 'React state directly mutate করলে React বুঝতে পারে না যে কিছু বদলেছে কারণ এটি reference equality check করে। তাই সবসময় নতুন object/array তৈরি করতে হবে।',
          },
        ]}
      />
    </div>
  );
}
