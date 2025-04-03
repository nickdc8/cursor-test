import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Post({ name, description, avatarUrl }) {
  return (
    <div className="mb-6 w-full border-b pb-6 last:mb-0 last:border-b-0">
      <div className="mb-4 flex items-center gap-3">
        <Avatar className="h-10 w-10 overflow-hidden rounded-full">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-base font-medium">{name}</span>
      </div>

      <p className="mb-4 text-gray-700">{description}</p>

      <div className="flex gap-4">
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-red-500">
          <Heart className="h-5 w-5" />
          <span>Like</span>
        </button>
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-blue-500">
          <MessageCircle className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-green-500">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
