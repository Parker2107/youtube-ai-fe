import { useAuth } from "../../context/AuthContext";
import { User } from "lucide-react";

export default function Topbar() {
  const { user } = useAuth();
  
  return (
    <div className="glass-panel px-8 py-5 border-b border-white/5 flex items-center justify-between z-10 sticky top-0">
      <div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Welcome Back {user?.name ? `, ${user.name.split(' ')[0]} ` : ""}👋
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Paste a YouTube link and start chatting with your video.
        </p>
      </div>
      
      {user && (
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{user.name || "User"}</p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 border border-white/10">
            <User size={18} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
}