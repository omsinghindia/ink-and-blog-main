
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  LayoutGrid, 
  FileText, 
  Search, 
  User, 
  Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive, isOpen }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-all duration-200",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
        !isOpen && "justify-center px-0"
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center">
        {icon}
      </span>
      {isOpen && <span className="font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { to: "/", icon: <Home size={18} />, label: "Home" },
    { to: "/portfolio", icon: <LayoutGrid size={18} />, label: "Portfolio" },
    { to: "/blog", icon: <FileText size={18} />, label: "Blog" },
    { to: "/research", icon: <Search size={18} />, label: "Research" },
    { to: "/about", icon: <User size={18} />, label: "About" },
    { to: "/contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-full border-r border-border bg-sidebar z-40",
        "transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {isOpen && (
          <span className="font-serif text-xl font-semibold tracking-tight">
            Portfolio
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto h-8 w-8 rounded-md hover:bg-sidebar-accent flex items-center justify-center"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      
      <div className="space-y-1 px-3 py-3">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            isOpen={isOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
