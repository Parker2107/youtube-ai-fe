import { useState } from "react";

import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import { Link2, Sparkles } from "lucide-react";

import { useChatContext } from "../context/ChatContext";

import { analyzeVideo } from "../api/videoApi";

import toast from "react-hot-toast";

export default function Home() {

  const [url, setUrl] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate =
    useNavigate();

  const {
    setCurrentVideo,
    setChatHistory,
  } = useChatContext();

  const handleAnalyze =
    async () => {

      if (!url.trim()) return;

      try {

        setLoading(true);

        const response =
          await analyzeVideo(url);

        const newVideo =
          response.video;

        setCurrentVideo(
          newVideo
        );

        toast.success(
          "Video analyzed successfully!"
        );

        setChatHistory((prev) => [
          newVideo,
          ...prev,
        ]);

        navigate("/chat");

      } catch (error) {

        console.error(error);

        toast.error(
          "Failed to analyze video"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <MainLayout>

      {/* Input Section */}
      <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">

        <div className="flex gap-4">

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">

            <Link2 />

          </div>

          {/* Input */}
          <div className="flex-1 flex gap-4">

            <input
              type="text"
              placeholder="Paste YouTube link here..."
              value={url}
              onChange={(e) =>
                setUrl(e.target.value)
              }
              className="flex-1 bg-[#020817] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 text-lg"
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 rounded-2xl font-semibold flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
            >

              <Sparkles size={20} />

              {loading
                ? "Analyzing..."
                : "Analyze Video"}

            </button>

          </div>

        </div>

        <p className="text-gray-400 mt-5">
          We'll fetch transcript, analyze the content and let you ask questions instantly.
        </p>

      </div>

      {/* How It Works */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-6">
          How It Works
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            "Add YouTube Link",
            "AI Analysis",
            "Ask Questions",
            "Jump to Timestamp",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition-all"
            >

              <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5 text-blue-400 font-bold text-xl">

                {index + 1}

              </div>

              <h3 className="font-semibold text-lg">
                {item}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                AI powered video understanding and contextual answers.
              </p>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>
  );
}