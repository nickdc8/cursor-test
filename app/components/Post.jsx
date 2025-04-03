import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Post({ name, description, avatarUrl }) {
  return (
    <div className="mb-6 w-full border-b border-gray-200 pb-6 last:mb-0 last:border-b-0 dark:border-gray-800">
      <div className="mb-4 flex items-center gap-3">
        <Avatar className="h-10 w-10 overflow-hidden rounded-full">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-base font-medium text-gray-900 dark:text-gray-100">{name}</span>
      </div>

      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>

      <div className="flex gap-4">
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
          <Heart className="h-5 w-5" />
          <span>Like</span>
        </button>
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
          <MessageCircle className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex cursor-pointer items-center gap-1 text-gray-600 transition-colors hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
