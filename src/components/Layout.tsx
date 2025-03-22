
import React from 'react';
import TopNavigation from './TopNavigation';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <main className={cn("flex-1", className)}>
        <div className="container py-6 px-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
