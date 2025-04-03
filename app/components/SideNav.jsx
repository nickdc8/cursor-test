'use client'
import { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Search, 
  Plus, 
  Heart, 
  User, 
  Pin, 
  Menu,
  Settings,
  LogOut,
  HelpCircle,
  Bell,
  Bookmark
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { icon: Settings, label: 'Settings' },
    { icon: Bell, label: 'Notifications' },
    { icon: Bookmark, label: 'Saved Items' },
    { icon: HelpCircle, label: 'Help Center' },
    { icon: LogOut, label: 'Log Out' }
  ];

  return (
    <>
      <div className="fixed left-0 top-0 flex h-screen w-16 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {/* Logo placeholder */}
        <div className="mx-auto mt-4 h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-800" />
        
        {/* Main navigation icons */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <Home className="h-5 w-5" />
          </button>
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <Search className="h-5 w-5" />
          </button>
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <Plus className="h-5 w-5" />
          </button>
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <Heart className="h-5 w-5" />
          </button>
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <User className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom icons */}
        <div className="mt-auto mb-4 flex flex-col items-center gap-4">
          <ThemeToggle />
          <button className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            <Pin className="h-5 w-5" />
          </button>
          <button 
            className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="fixed bottom-4 left-20 w-64 rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-900 dark:shadow-gray-900"
        >
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
} 