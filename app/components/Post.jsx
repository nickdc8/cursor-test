import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function Post({ name, description, avatarUrl }) {
  return (
    <div className="w-full border-b last:border-b-0 pb-6 mb-6 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-10 h-10 rounded-full overflow-hidden">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-base font-medium">{name}</span>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex gap-4">
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-green-500 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
} 