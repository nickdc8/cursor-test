import { Instagram } from "lucide-react";

export default function SignUpPrompt() {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Log in or sign up to Posty</h2>
      <p className="text-gray-600 mb-6">See what people are talking about and join the conversation</p>
      
      <button className="w-full flex items-center justify-center gap-2 bg-white text-black border border-black py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
        <Instagram className="w-5 h-5" />
        Continue with Instagram
      </button>
      
      <a href="#" className="block text-center text-blue-600 hover:text-blue-800 mt-4 text-sm">
        Log in with username instead
      </a>
    </div>
  );
} 