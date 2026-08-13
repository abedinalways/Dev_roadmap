'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AuthGuard from '@/components/auth/AuthGuard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="lg:ml-64">
          <Header onMenuClick={openSidebar} />
          <main className="p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}