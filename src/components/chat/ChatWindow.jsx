import {
  useEffect,
  useRef,
} from "react";

import ChatMessage from "./ChatMessage";

import TypingLoader from "./TypingLoader";

export default function ChatWindow({
  messages,
  loading,
  onTimestampClick,
}) {

  const bottomRef =
    useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">

      {messages.length === 0 ? (

        <div className="h-full flex flex-col items-center justify-center text-center">

          <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center text-4xl mb-6">
            🤖
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Start chatting with AI
          </h2>

          <p className="text-gray-400">
            Ask questions about the video content.
          </p>

        </div>

      ) : (

        messages.map((msg, index) => (

          <ChatMessage
            key={index}
            message={msg.message}
            sender={msg.sender}
            timestamp={msg.timestamp}
            onTimestampClick={
              onTimestampClick
            }
          />

        ))
      )}

      {loading && <TypingLoader />}

      <div ref={bottomRef} />

    </div>
  );
}