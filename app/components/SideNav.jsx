import { Home, Search, Plus, Heart, User, Pin, Menu } from "lucide-react";

export default function SideNav() {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-white border-r flex flex-col items-center py-4">
      {/* Logo placeholder */}
      <div className="w-10 h-10 rounded-lg bg-gray-200 mb-8" />
      
      {/* Main navigation icons */}
      <div className="flex flex-col gap-6">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Home className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom icons */}
      <div className="mt-auto flex flex-col gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Pin className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 