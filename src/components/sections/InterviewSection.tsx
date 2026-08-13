import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import InterviewBox from '@/components/sections/InterviewBox';
import InfoBox from '@/components/sections/InfoBox';
import Card from '@/components/ui/Card';

const topQuestions = [
  {
    question: 'Explain the React reconciliation algorithm.',
    answer: 'React uses a diffing algorithm on the Virtual DOM. When state changes, React creates a new virtual tree and compares it with the previous one using heuristics: (1) Different element types = unmount old, mount new; (2) Same type = update attributes; (3) Lists = use keys for matching.',
    answerBn: 'State বদলালে React নতুন Virtual DOM tree তৈরি করে, পুরনোটার সাথে compare করে (Diffing), এবং শুধু changed parts real DOM এ update করে। এটাই Reconciliation।',
  },
  {
    question: 'What is the difference between SSR and SSG in Next.js?',
    answer: 'SSR generates HTML on every request (dynamic, real-time data). SSG generates HTML at build time (static, fastest). ISR bridges both — static pages that revalidate automatically.',
    answerBn: 'SSR প্রতি request এ server এ HTML বানায় — dynamic। SSG build time এ — static, fastest। ISR = SSG + auto revalidation।',
  },
  {
    question: 'How would you optimize a React app that is rendering slowly?',
    answer: 'Step-by-step: (1) Profile with React DevTools Profiler; (2) Add React.memo; (3) Use useMemo for expensive calculations; (4) Use useCallback for stable function references; (5) Implement virtualization for long lists; (6) Code-split with lazy().',
    answerBn: 'React DevTools দিয়ে কোন component slow তা খুঁজে বের করো। তারপর React.memo, useMemo, useCallback, virtualization, lazy loading — এই order এ apply করো।',
  },
  {
    question: 'How do you handle race conditions in async React code?',
    answer: 'Use AbortController to cancel previous fetch requests when component unmounts or dependencies change. In useEffect, return a cleanup function that calls abort().',
    answerBn: 'AbortController দিয়ে previous request cancel করো। useEffect এর cleanup function এ abort() call করো।',
  },
  {
    question: 'What are some patterns to avoid prop drilling in React?',
    answer: 'Solutions: (1) React Context for global state; (2) Component composition; (3) State management libraries (Zustand, Redux); (4) Render props pattern; (5) Custom hooks.',
    answerBn: 'Context API, component composition, Zustand/Redux, custom hooks। 2-3 level এর prop drilling usually okay।',
  },
];

export default function InterviewSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="13"
        title="Interview Preparation — Complete Guide"
        titleBn="Senior Interview জেতার complete strategy"
        icon="🎯"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Senior Interview এ কী জিজ্ঞেস হয়?"
          contentBn="Senior interview সাধারণত ৪টি round এ হয়: (১) Technical Screening — JavaScript/TypeScript/React basics; (২) Coding Challenge — algorithm বা component building; (৩) System Design — architecture discussion; (৪) Behavioral — past experience, leadership, conflict resolution।"
          titleEn="What is asked in Senior Interviews?"
          contentEn="Senior interviews typically have 4 rounds: (1) Technical phone screen; (2) Coding challenge; (3) System design; (4) Behavioral — leadership, trade-off decisions, conflict resolution, STAR method answers."
          tag="Critical"
        />
      </div>

      <div className="mb-8">
        <InterviewBox
          title="Top 20 Senior Frontend Interview Questions"
          questions={topQuestions}
        />
      </div>

      <div className="mb-8">
        <BilingualBlock
          titleBn="Behavioral Questions — STAR Method"
          contentBn="STAR Method: Situation → Task → Action → Result। প্রতিটি behavioral answer এই format এ দাও। Common Questions: 'Tell me about a time you had a technical disagreement', 'Describe a project where you had to make a difficult technical decision', 'How do you mentor junior developers?'"
          titleEn="Behavioral Questions — STAR Method"
          contentEn="Senior roles expect leadership and ownership. Prepare STAR answers for: owning/fixing a critical production incident, technical decision-making under constraints, mentoring junior devs, resolving team conflicts."
          tag="Soft Skills"
        />
      </div>

      <div className="mb-8">
        <InfoBox
          type="warning"
          title="Interview এ যা করবে না"
          content="শুধু feature গুলোর নাম মুখস্থ করবে না — কেন ব্যবহার করা হয়, কী trade-off আছে, কোন situation এ কোনটা better — এটা জানা Senior এর কাজ।"
          contentBn="Interviewer জিজ্ঞেস করবে: 'Why did you choose Zustand over Redux?' — উত্তর তোমার কাছে থাকতে হবে।"
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700 mb-4">
          <span className="text-xl">📚</span>
          Resources & Study Plan
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Daily Study Plan (2-3 hours/day)</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Week 1-2: JavaScript Internals (You Don&apos;t Know JS)</li>
              <li>Week 3-4: TypeScript Advanced</li>
              <li>Week 5-6: React Deep Dive</li>
              <li>Week 7-8: Next.js App Router</li>
              <li>Week 9-10: Testing</li>
              <li>Week 11-12: System Design + Mock Interviews</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Must-read Resources</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>You Don&apos;t Know JS (Kyle Simpson)</li>
              <li>Dan Abramov&apos;s blog (overreacted.io)</li>
              <li>Kent C. Dodds (kentcdodds.com)</li>
              <li>Josh Comeau (joshwcomeau.com)</li>
              <li>web.dev</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
