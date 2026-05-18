import ReactMarkdown from "react-markdown";

import { motion } from "framer-motion";

import { Copy } from "lucide-react";

export default function ChatMessage({
  message,
  sender,
  timestamp,
  onTimestampClick,
}) {

  const isUser =
    sender === "user";

  const convertTimestampToSeconds =
    (time) => {

      const parts =
        time.split(":").map(Number);

      return (
        parts[0] * 60 +
        parts[1]
      );
    };

  const copyMessage = () => {

    navigator.clipboard.writeText(
      message
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-3xl px-5 py-4 rounded-2xl relative ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-purple-600"
            : "glass"
        }`}
      >

        {/* Copy Button */}
        {!isUser && (
          <button
            onClick={copyMessage}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all"
          >

            <Copy size={16} />

          </button>
        )}

        {/* Markdown */}
        <div className="prose prose-invert max-w-none">

          <ReactMarkdown>
            {message}
          </ReactMarkdown>

        </div>

        {/* Timestamp */}
        {timestamp && (
          <button
            onClick={() =>
              onTimestampClick(
                convertTimestampToSeconds(
                  timestamp
                )
              )
            }
            className="mt-4 bg-white/10 hover:bg-white/20 transition-all px-3 py-2 rounded-xl text-sm"
          >
            ▶ Jump to {timestamp}
          </button>
        )}

      </div>

    </motion.div>
  );
}