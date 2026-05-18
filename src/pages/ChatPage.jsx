import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import VideoPlayer from "../components/video/VideoPlayer";
import { useChatContext } from "../context/ChatContext";
import { askQuestion } from "../api/chatApi";
import toast from "react-hot-toast";

export default function ChatPage() {
  const { currentVideo } = useChatContext();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message: "Hello 👋 Ask me anything about the video.",
    },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      message: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentQuestion = input;
    setInput("");
    setLoading(true);

    try {
      const response = await askQuestion(currentQuestion);
      const aiMessage = {
        sender: "ai",
        message: response.answer,
        timestamp: response.timestamp,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="h-[85vh] flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Video Section */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          <div className="glass-panel rounded-3xl p-6 shadow-2xl shadow-blue-900/10 flex-1 flex flex-col max-h-[85vh]">
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {currentVideo?.title || "AI Video Chat"}
              </h2>
              <p className="text-gray-400 text-sm mt-1 truncate">
                {currentVideo?.url || "Paste a link in the home page to begin."}
              </p>
            </div>

            {currentVideo ? (
              <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">
                <VideoPlayer url={currentVideo.url} timestamp={currentTimestamp} />
              </div>
            ) : (
              <div className="flex-1 rounded-2xl bg-[#081028]/50 border border-white/5 flex items-center justify-center text-gray-500">
                No video loaded
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Chat Section */}
        <div className="w-full lg:w-[45%] h-[60vh] lg:h-full glass-panel rounded-3xl shadow-2xl shadow-purple-900/10 flex flex-col border border-white/5 overflow-hidden">
          {/* Chat Window */}
          <ChatWindow
            messages={messages}
            loading={loading}
            onTimestampClick={setCurrentTimestamp}
          />

          {/* Chat Input */}
          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />
        </div>

      </div>
    </MainLayout>
  );
}