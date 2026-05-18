import {
  Plus,
  PlayCircle,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatContext } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { chatHistory, sidebarOpen, setSidebarOpen } = useChatContext();
  const { logout } = useAuth();

  return (
    <motion.div
      animate={{
        width: sidebarOpen ? 280 : 80,
      }}
      className="h-screen glass-panel border-r border-white/5 flex flex-col justify-between overflow-hidden relative z-20"
    >
      {/* Top */}
      <div>
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between min-h-[80px]">
          <AnimatePresence>
            {sidebarOpen && (
              <motion.h1 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap"
              >
                AI YouTube
                <br />
                Assistant
              </motion.h1>
            )}
          </AnimatePresence>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-all hover:scale-105 active:scale-95 text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
        </div>

        {/* New Chat */}
        <div className="p-4">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all py-3 rounded-xl flex items-center justify-center gap-2 font-semibold group overflow-hidden">
            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="whitespace-nowrap"
                >
                  New Chat
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Chats */}
        <div className="px-4 mt-2">
          {sidebarOpen && (
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold ml-2"
            >
              Recent Chats
            </motion.h2>
          )}

          <div className="space-y-2">
            {chatHistory.length === 0 && sidebarOpen && (
              <div className="text-sm text-gray-500 px-2 italic">
                No chats yet
              </div>
            )}

            {chatHistory.map((chat) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={chat.id}
                className="bg-white/5 hover:bg-white/10 transition-all p-3 rounded-xl cursor-pointer border border-transparent hover:border-white/10 flex items-center gap-3 group"
              >
                <div className="min-w-[40px] h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <PlayCircle className="text-red-400" size={20} />
                </div>

                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.div 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="overflow-hidden flex-1"
                    >
                      <p className="font-medium text-sm truncate text-gray-200 group-hover:text-white transition-colors">
                        {chat.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        Recent Chat
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-white/5">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all p-3 rounded-xl group"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          <AnimatePresence>
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="whitespace-nowrap font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}