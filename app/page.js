import Post from "./components/Post";
import SideNav from "./components/SideNav";
import SignUpPrompt from "./components/SignUpPrompt";

const posts = [
  {
    name: "John Doe",
    description: "Just finished my morning coffee and ready to take on the day! ☕️ #MorningVibes",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    name: "Sarah Johnson",
    description: "Exploring new places and making memories. Life's too short to stay in one place! ✈️",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    name: "Mike Chen",
    description: "Working on some exciting new projects. Can't wait to share more details soon! 💻",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    name: "Emma Wilson",
    description: "Beautiful sunset views from my balcony tonight. Nature never fails to amaze me. 🌅",
    avatarUrl: "https://github.com/shadcn.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SideNav />
      <div className="pl-16">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 p-8">
          <div className="col-span-2">
            <div className="bg-white rounded-2xl border p-6">
              {posts.map((post, index) => (
                <Post 
                  key={index}
                  name={post.name}
                  description={post.description}
                  avatarUrl={post.avatarUrl}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <SignUpPrompt />
          </div>
        </div>
      </div>
    </div>
  );
}
