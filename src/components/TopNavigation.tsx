
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TopNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <header className="w-full border-b border-border bg-background py-3">
      <div className="container flex items-center justify-between">
        <div className="font-serif text-xl font-semibold tracking-tight">Portfolio</div>
        
        <Tabs defaultValue={currentPath === "/" ? "/" : currentPath} className="w-auto">
          <TabsList className="bg-background">
            <TabsTrigger value="/" asChild>
              <Link to="/" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/" ? "text-foreground" : "text-muted-foreground"
              )}>
                Home
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/portfolio" asChild>
              <Link to="/portfolio" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/portfolio" ? "text-foreground" : "text-muted-foreground"
              )}>
                Portfolio
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/education" asChild>
              <Link to="/education" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/education" ? "text-foreground" : "text-muted-foreground"
              )}>
                Education
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/blog" asChild>
              <Link to="/blog" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/blog" ? "text-foreground" : "text-muted-foreground"
              )}>
                Blog
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/research" asChild>
              <Link to="/research" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/research" ? "text-foreground" : "text-muted-foreground"
              )}>
                Research
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/about" asChild>
              <Link to="/about" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/about" ? "text-foreground" : "text-muted-foreground"
              )}>
                About
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/contact" asChild>
              <Link to="/contact" className={cn(
                "px-4 py-2 font-medium",
                currentPath === "/contact" ? "text-foreground" : "text-muted-foreground"
              )}>
                Contact
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default TopNavigation;
