import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';
import InterviewBox from '@/components/sections/InterviewBox';

const typescriptCode = `// BASIC TYPES
type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  address?: string; // Optional
};

// GENERIC TYPES
type ApiResponse<T> = {
  data: T;
  error: string | null;
  loading: boolean;
  meta?: {
    total: number;
    page: number;
  };
};

// UTILITY TYPES
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, 'id' | 'name'>;
type UserWithoutId = Omit<User, 'id'>;

// CONDITIONAL TYPES
type IsArray<T> = T extends any[] ? 'yes' : 'no';

// DISCRIMINATED UNIONS
type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; error: string };

function renderState(state: LoadingState) {
  switch (state.status) {
    case 'success': return state.data;
    case 'error': return state.error;
  }
}`;

export default function TypeScriptSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="04"
        title="TypeScript — Basic to Advanced"
        titleBn="TypeScript দিয়ে type-safe, scalable code লেখা"
        icon="🔷"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="কেন TypeScript শিখবে?"
          contentBn="TypeScript হলো JavaScript এর একটি superset যেটি static typing add করে। এর ফলে bugs আগেই ধরা পড়ে, IDE support অনেক ভালো হয়, code পড়া ও maintain করা সহজ হয়। Production-grade application এ TypeScript ছাড়া কাজ করা এখন প্রায় অসম্ভব।"
          titleEn="Why should you learn TypeScript?"
          contentEn="TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. It enables better IDE support, makes code self-documenting, and scales well for large teams. Advanced TypeScript includes utility types, conditional types, mapped types, and template literal types."
          tag="Essential"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="typescript-advanced.ts"
          language="TypeScript"
          code={typescriptCode}
        />
      </div>

      <InterviewBox
        title="TypeScript Interview Questions"
        questions={[
          {
            question: 'What is the difference between type and interface in TypeScript?',
            answer: 'Both define object shapes. interface supports declaration merging (can be extended across files) and is better for OOP. type is more flexible — supports unions, intersections, mapped types, conditional types. Prefer interface for public APIs and object shapes; type for everything else.',
            answerBn: 'interface declaration merging support করে, type বেশি flexible — union, intersection, conditional types সব করা যায়। Public API তে interface, complex logic এ type বেশি ভালো।',
          },
          {
            question: 'What are Generics and why are they useful?',
            answer: 'Generics enable reusable type-safe components/functions. Instead of any, use <T> to say "the type will be decided when used." Like Array<string> vs Array<number> — same structure, different types.',
            answerBn: 'Generics হলো reusable type-safe pattern। any ব্যবহার না করে T দিয়ে flexible type তৈরি করা যায় যেটা use করার সময় specify করতে হয়।',
          },
        ]}
      />
    </div>
  );
}
