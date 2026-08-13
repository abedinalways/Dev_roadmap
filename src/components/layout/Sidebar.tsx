'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Badge from '@/components/ui/Badge';

const navigation = [
  {
    section: 'Getting Started',
    defaultOpen: true,
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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(navigation.map((g) => [g.section, g.defaultOpen ?? false]))
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-slate-900 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2.5 group" onClick={onClose}>
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-white tracking-tight">Dev Roadmap</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest px-5 pt-4 pb-2">
          Junior to Senior Frontend
        </p>

        <nav className="p-3 space-y-1 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">
          {navigation.map((group) => {
            const isSectionOpen = openSections[group.section];
            return (
              <div key={group.section} className="mb-1">
                <button
                  onClick={() => toggleSection(group.section)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left group"
                >
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-slate-200 transition-colors">
                    {group.section}
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSectionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-0.5 pt-1 pb-2">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                            isActive
                              ? 'bg-blue-500/15 text-blue-400 border-l-2 border-blue-400 pl-2.5'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <span className="text-base flex-shrink-0">{item.icon}</span>
                          <span className="flex-1 truncate">{item.name}</span>
                          {'difficulty' in item && item.difficulty && (
                            <Badge variant={difficultyColors[item.difficulty]} size="sm" dark>
                              {item.difficulty}
                            </Badge>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">User</p>
              <p className="text-[11px] text-slate-400 truncate">Frontend Dev</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
