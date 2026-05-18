import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { Copy, Bot, User } from "lucide-react";
import toast from "react-hot-toast";

export default function ChatMessage({ message, sender, timestamp, onTimestampClick }) {
  const isUser = sender === "user";

  const convertTimestampToSeconds = (time) => {
    const parts = time.split(":").map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return parts[0] * 60 + parts[1];
  };

  const copyMessage = () => {
    navigator.clipboard.writeText(message);
    toast.success("Copied to clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex w-full gap-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
          <Bot size={20} className="text-blue-400" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] px-6 py-5 rounded-3xl relative group ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-purple-600 rounded-tr-sm shadow-lg shadow-blue-900/20"
            : "glass-card rounded-tl-sm border-white/5"
        }`}
      >
        {!isUser && (
          <button
            onClick={copyMessage}
            className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
            title="Copy message"
          >
            <Copy size={14} className="text-gray-400 hover:text-white" />
          </button>
        )}

        <div className={`prose max-w-none text-sm md:text-base leading-relaxed ${isUser ? 'prose-invert' : 'prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-blue-300 prose-code:text-purple-300'}`}>
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>

        {timestamp && (
          <button
            onClick={() => onTimestampClick(convertTimestampToSeconds(timestamp))}
            className="mt-4 inline-flex items-center gap-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 transition-all px-3 py-1.5 rounded-full text-xs font-medium"
          >
            ▶ Jump to {timestamp}
          </button>
        )}
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-purple-900/20">
          <User size={20} className="text-white" />
        </div>
      )}
    </motion.div>
  );
}