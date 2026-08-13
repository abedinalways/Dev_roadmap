'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Badge from '@/components/ui/Badge';

const navigation = [
  {
    section: 'Getting Started',
    items: [
      { name: 'Roadmap Overview', href: '/dashboard/roadmap', icon: '🗺️' },
    ],
  },
  {
    section: 'Core Skills',
    items: [
      { name: 'HTML5 & CSS3', href: '/dashboard/html-css', icon: '🎨', difficulty: 'basic' as const },
      { name: 'Advanced JavaScript', href: '/dashboard/javascript', icon: '⚡', difficulty: 'mid' as const },
      { name: 'TypeScript', href: '/dashboard/typescript', icon: '🔷', difficulty: 'mid' as const },
    ],
  },
  {
    section: 'Frameworks',
    items: [
      { name: 'React', href: '/dashboard/react', icon: '⚛️', difficulty: 'senior' as const },
      { name: 'Next.js', href: '/dashboard/nextjs', icon: '▲', difficulty: 'senior' as const },
    ],
  },
  {
    section: 'Advanced',
    items: [
      { name: 'State Management', href: '/dashboard/state-management', icon: '🗄️', difficulty: 'mid' as const },
      { name: 'Performance', href: '/dashboard/performance', icon: '🚀', difficulty: 'senior' as const },
      { name: 'WebSocket', href: '/dashboard/websocket', icon: '🔌', difficulty: 'mid' as const },
      { name: 'GSAP & Animations', href: '/dashboard/gsap', icon: '🎬', difficulty: 'mid' as const },
      { name: 'Testing', href: '/dashboard/testing', icon: '🧪', difficulty: 'senior' as const },
      { name: 'System Design', href: '/dashboard/system-design', icon: '🏗️', difficulty: 'senior' as const },
    ],
  },
  {
    section: 'Interview',
    items: [
      { name: 'Interview Prep', href: '/dashboard/interview', icon: '🎯', difficulty: 'senior' as const },
    ],
  },
];

const difficultyColors = {
  basic: 'success' as const,
  mid: 'warning' as const,
  senior: 'danger' as const,
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - fixed on desktop, drawer on mobile */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={onClose}>
            <span className="text-xl">🚀</span>
            <span className="font-bold text-gray-900">Dev Roadmap</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 px-4 pb-2 -mt-2">Junior to Senior Frontend</p>

        <nav className="p-4 space-y-6">
          {navigation.map((group) => (
            <div key={group.section}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {group.section}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="flex-1">{item.name}</span>
                      {'difficulty' in item && item.difficulty && (
                        <Badge variant={difficultyColors[item.difficulty]} size="sm">
                          {item.difficulty}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}