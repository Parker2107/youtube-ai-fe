import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

import VideoCard from "../components/video/VideoCard";
import VideoPlayer from "../components/video/VideoPlayer";

import { useChatContext } from "../context/ChatContext";

import { askQuestion } from "../api/chatApi";

import toast from "react-hot-toast";

export default function ChatPage() {

  const { currentVideo } =
    useChatContext();

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    currentTimestamp,
    setCurrentTimestamp,
  ] = useState(0);

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        message:
          "Hello 👋 Ask me anything about the video.",
      },
    ]);

  const handleSend =
    async () => {

      if (!input.trim()) return;

      const userMessage = {
        sender: "user",
        message: input,
      };

      setMessages((prev) => [
        ...prev,
        userMessage,
      ]);

      const currentQuestion =
        input;

      setInput("");

      setLoading(true);

      try {

        const response =
          await askQuestion(
            currentQuestion
          );

        const aiMessage = {
          sender: "ai",
          message:
            response.answer,
          timestamp:
            response.timestamp,
        };

        setMessages((prev) => [
          ...prev,
          aiMessage,
        ]);

        toast.success(
          "AI response generated"
        );

      } catch (error) {

        console.error(error);

        toast.error(
          "Failed to generate response"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <MainLayout>

      <div className="h-[85vh] flex flex-col bg-[#081028] border border-white/10 rounded-3xl overflow-hidden">

        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5">

          <h2 className="text-xl font-semibold">

            {currentVideo?.title ||
              "AI Chat"}

          </h2>

          <p className="text-gray-400 text-sm mt-1 truncate">

            {currentVideo?.url ||
              "AI Video Chat Session"}

          </p>

        </div>

        {/* Video Preview */}
        {currentVideo && (
          <div className="p-6 pb-0">

            <VideoCard
              url={currentVideo.url}
            />

          </div>
        )}

        {/* Embedded Player */}
        {currentVideo && (
          <div className="px-6 pb-4">

            <VideoPlayer
              url={currentVideo.url}
              timestamp={
                currentTimestamp
              }
            />

          </div>
        )}

        {/* Chat Window */}
        <ChatWindow
          messages={messages}
          loading={loading}
          onTimestampClick={
            setCurrentTimestamp
          }
        />

        {/* Chat Input */}
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
        />

      </div>

    </MainLayout>
  );
}