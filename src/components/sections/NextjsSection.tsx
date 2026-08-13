import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';
import InterviewBox from '@/components/sections/InterviewBox';
import InfoBox from '@/components/sections/InfoBox';

const nextjsCode = `// APP ROUTER — Server Components (default)
// app/users/page.tsx
async function UsersPage() {
  const users = await fetch('https://api.example.com/users', {
    next: { revalidate: 60 } // ISR
  }).then(r => r.json());

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// CLIENT COMPONENT
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// ROUTE HANDLERS (API Routes)
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ?? '1';
  
  const users = await getUsersFromDB(parseInt(page));
  return NextResponse.json({ users, page });
}

// MIDDLEWARE
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}`;

export default function NextjsSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="06"
        title="Next.js — App Router & Beyond"
        titleBn="Next.js দিয়ে Production-ready Full-stack Apps"
        icon="▲"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="Rendering Strategies — SSR, SSG, ISR, CSR"
          contentBn="CSR: Browser এ JavaScript দিয়ে render হয়। SSR: প্রতিটি request এ server HTML তৈরি করে। SSG: Build time এ HTML তৈরি হয়। ISR: SSG + automatic revalidation। Best of both worlds!"
          titleEn="Rendering Strategies — SSR, SSG, ISR, CSR"
          contentEn="CSR: HTML rendered in browser via JS. SSR: HTML generated per-request on server. SSG: HTML pre-built at build time. ISR: Static pages that automatically revalidate after a set interval."
          tag="Critical Concept"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="next-app-router.tsx"
          language="Next.js 14+ App Router"
          code={nextjsCode}
        />
      </div>

      <div className="mb-8">
        <InfoBox
          type="tip"
          title="Senior Tip — Server vs Client Components"
          content="By default, all components in App Router are Server Components (faster, smaller JS bundle, can access DB directly). Only add 'use client' when you need: useState, useEffect, browser APIs, event listeners, or third-party libraries that use those."
          contentBn="App Router এ সব কিছু by default Server Component। শুধু যেখানে useState/useEffect/browser events দরকার সেখানে 'use client' দাও।"
        />
      </div>

      <InterviewBox
        title="Next.js Interview Questions"
        questions={[
          {
            question: 'What is the difference between pages router and app router in Next.js?',
            answer: 'Pages Router (legacy): file-based routing in /pages, all components are client components by default, uses getServerSideProps/getStaticProps. App Router (Next.js 13+): routing in /app directory, Server Components by default, uses async/await directly in components.',
            answerBn: 'Pages Router পুরনো system যেখানে সব client component। App Router নতুন, server components default, async/await সরাসরি component এ লেখা যায়।',
          },
        ]}
      />
    </div>
  );
}
