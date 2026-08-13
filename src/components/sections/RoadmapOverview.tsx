import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const phases = [
  {
    phase: 1,
    title: 'Foundation Mastery',
    titleBn: 'ভিত্তি মজবুত করো',
    description: 'HTML5 semantic elements, CSS3 advanced (Grid, Flexbox, Custom Properties, Animations), JavaScript fundamentals to Advanced (Closures, Prototypes, Async/Await, Event Loop), Web APIs.',
    duration: '4-6 weeks',
    color: 'blue',
  },
  {
    phase: 2,
    title: 'TypeScript & React Deep Dive',
    titleBn: 'TypeScript ও React এ দক্ষতা বাড়াও',
    description: 'TypeScript advanced types, React internals (Reconciliation, Fiber, Hooks), Custom hooks, Performance optimization (memo, useMemo, useCallback, lazy loading), State management patterns.',
    duration: '6-8 weeks',
    color: 'purple',
  },
  {
    phase: 3,
    title: 'Next.js, Realtime & Animations',
    titleBn: 'Production-grade skills শেখো',
    description: 'Next.js App Router, SSR/SSG/ISR, API Routes, WebSocket & Socket.io, GSAP advanced animations, ScrollTrigger, 3D with Three.js basics.',
    duration: '6-8 weeks',
    color: 'cyan',
  },
  {
    phase: 4,
    title: 'Senior Skills',
    titleBn: 'সিনিয়র মানসিকতা তৈরি করো',
    description: 'Testing (Jest, RTL, Cypress), System Design for Frontend, CI/CD, Micro-frontends, Accessibility (a11y), Security, Monitoring, Code Review best practices.',
    duration: '4-6 weeks + ongoing',
    color: 'green',
  },
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  cyan: 'from-cyan-500 to-cyan-600',
  green: 'from-green-500 to-green-600',
};

const dotColors = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  cyan: 'bg-cyan-500',
  green: 'bg-green-500',
};

export default function RoadmapOverview() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Roadmap Overview</h1>
        <p className="text-lg text-blue-600 font-medium">
          সম্পূর্ণ রোডম্যাপ — কোথা থেকে শুরু করবে এবং কোথায় যাবে
        </p>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Senior Developer মানে কী?</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Bangla
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Senior Frontend Developer মানে শুধু কোড লেখা না। এর মানে হলো — সমস্যা বোঝা, সঠিক solution বেছে নেওয়া, অন্যদের mentor করা, codebase এর ownership নেওয়া, এবং business goals কে technical solution এ convert করতে পারা।
            </p>
          </div>
          <hr className="border-gray-200" />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                English
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A Senior Frontend Developer is not just about writing more code — it&apos;s about thinking at a higher level. You architect solutions, mentor junior devs, make trade-off decisions, write maintainable and scalable code, and deeply understand performance, security, and user experience.
            </p>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
        <Badge variant="success" size="md">🟢 Junior (0–2 years)</Badge>
        <Badge variant="warning" size="md">🟡 Mid (2–4 years)</Badge>
        <Badge variant="danger" size="md">🔴 Senior (4+ years)</Badge>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-6">📍 Learning Path (Phase by Phase)</h3>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30" />
        
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.phase} className="relative pl-12">
              <div className={`absolute left-3 top-6 w-4 h-4 rounded-full ${dotColors[phase.color as keyof typeof dotColors]} border-4 border-gray-50 shadow-sm`} />
              <Card className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{phase.title}</h4>
                    <p className="text-blue-600 text-sm">{phase.titleBn}</p>
                  </div>
                  <Badge variant="info" size="sm">{phase.duration}</Badge>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
