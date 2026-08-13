'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';
import { demoAuth } from '@/lib/auth';

function getSessionFromCookie(): { user: ReturnType<typeof demoAuth.validateToken>; token: string } | null {
  if (typeof window === 'undefined') return null;

  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('auth-token='))
    ?.split('=')[1];

  if (!token) return null;

  const user = demoAuth.validateToken(token);
  return user ? { user, token } : null;
}

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const sessionRef = useRef(getSessionFromCookie());

  // Restore session from cookie on page refresh
  useEffect(() => {
    if (isAuthenticated) return;

    const session = sessionRef.current;
    if (session?.user) {
      dispatch(setCredentials({ user: session.user, token: session.token }));
      return;
    }

    router.push('/login');
  }, [isAuthenticated, dispatch, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return <>{children}</>;
}
