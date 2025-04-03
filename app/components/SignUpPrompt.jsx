import { Instagram } from "lucide-react";

export default function SignUpPrompt() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Log in or sign up to Posty</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">See what people are talking about and join the conversation</p>
      
      <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-900 bg-white px-4 py-2 text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
        <Instagram className="h-5 w-5" />
        Continue with Instagram
      </button>
      
      <a href="#" className="mt-4 block cursor-pointer text-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
        Log in with username instead
      </a>
    </div>
  );
} 