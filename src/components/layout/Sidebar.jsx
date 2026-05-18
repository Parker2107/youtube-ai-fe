import {
  Plus,
  PlayCircle,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useChatContext,
} from "../../context/ChatContext";

import {
  useAuth,
} from "../../context/AuthContext";

export default function Sidebar() {

  const {
    chatHistory,
    sidebarOpen,
    setSidebarOpen,
  } = useChatContext();

  const { logout } =
    useAuth();

  return (
    <motion.div
      animate={{
        width: sidebarOpen
          ? 280
          : 90,
      }}
      className="h-screen bg-[#081028] border-r border-white/10 flex flex-col justify-between overflow-hidden"
    >

      {/* Top */}
      <div>

        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">

          {sidebarOpen && (
            <h1 className="text-2xl font-bold leading-tight">
              AI YouTube
              <br />
              Assistant
            </h1>
          )}

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all"
          >

            {sidebarOpen ? (
              <PanelLeftClose
                size={18}
              />
            ) : (
              <PanelLeftOpen
                size={18}
              />
            )}

          </button>

        </div>

        {/* New Chat */}
        <div className="p-4">

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all py-3 rounded-xl flex items-center justify-center gap-2 font-semibold">

            <Plus size={20} />

            {sidebarOpen &&
              "New Chat"}

          </button>

        </div>

        {/* Chats */}
        <div className="px-4">

          {sidebarOpen && (
            <h2 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
              Recent Chats
            </h2>
          )}

          <div className="space-y-3">

            {chatHistory.length ===
              0 &&
              sidebarOpen && (
                <div className="text-sm text-gray-500 px-2">
                  No chats yet
                </div>
              )}

            {chatHistory.map(
              (chat) => (

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  key={chat.id}
                  className="bg-white/5 hover:bg-white/10 transition-all p-4 rounded-xl cursor-pointer border border-white/5"
                >

                  <div className="flex items-center gap-3">

                    <PlayCircle
                      className="text-red-500"
                      size={20}
                    />

                    {sidebarOpen && (
                      <div className="overflow-hidden">

                        <p className="font-medium text-sm truncate">
                          {chat.title}
                        </p>

                        <p className="text-xs text-gray-400">
                          Recent Chat
                        </p>

                      </div>
                    )}

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-white/10">

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 text-gray-300 hover:text-white transition-all"
        >

          <LogOut size={18} />

          {sidebarOpen &&
            "Logout"}

        </button>

      </div>

    </motion.div>
  );
}