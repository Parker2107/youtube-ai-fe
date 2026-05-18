import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingLoader from "./TypingLoader";
import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatWindow({ messages, loading, onTimestampClick }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
      {messages.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center mb-6 shadow-2xl shadow-blue-900/20 relative">
            <Bot size={40} className="text-blue-400" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <Sparkles size={14} className="text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Start chatting with AI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ask questions about the video content, request a summary, or find specific timestamps.
          </p>
        </motion.div>
      ) : (
        <div className="space-y-6 max-w-5xl mx-auto">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg.message}
              sender={msg.sender}
              timestamp={msg.timestamp}
              onTimestampClick={onTimestampClick}
            />
          ))}
          {loading && (
            <div className="flex justify-start max-w-5xl mx-auto">
              <div className="glass-card px-6 py-5 rounded-3xl rounded-tl-sm border-white/5 flex items-center gap-3">
                <Bot size={18} className="text-blue-400" />
                <TypingLoader />
              </div>
            </div>
          )}
          <div ref={bottomRef} className="h-4" />
        </div>
      )}
    </div>
  );
}