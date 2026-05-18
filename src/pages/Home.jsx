import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Link2, Sparkles, Play, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { useChatContext } from "../context/ChatContext";
import { analyzeVideo } from "../api/videoApi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setCurrentVideo, setChatHistory } = useChatContext();

  const handleAnalyze = async (e) => {
    e?.preventDefault();
    if (!url.trim()) return;

    try {
      setLoading(true);
      const response = await analyzeVideo(url);
      const newVideo = response.video;
      setCurrentVideo(newVideo);
      toast.success("Video analyzed successfully!");
      setChatHistory((prev) => [newVideo, ...prev]);
      navigate("/chat");
    } catch (error) {
      console.error(error);
      toast.error("Failed to analyze video");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    { title: "Add YouTube Link", desc: "Paste any YouTube video URL to get started instantly.", icon: <Play size={24} /> },
    { title: "AI Analysis", desc: "Our AI processes the video transcript and understands context.", icon: <Sparkles size={24} /> },
    { title: "Ask Questions", desc: "Chat with the video. Ask for summaries or specific details.", icon: <MessageSquare size={24} /> },
    { title: "Jump to Timestamp", desc: "Click timestamps in AI answers to jump right to the moment.", icon: <Clock size={24} /> },
  ];

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center pt-10 pb-20">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            <Sparkles size={16} /> Now with GPT-4 Vision
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Chat with any <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">YouTube</span> Video
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the power of AI to summarize, query, and learn from long videos in seconds.
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.form 
          onSubmit={handleAnalyze}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl glass-card rounded-[2rem] p-4 flex flex-col md:flex-row gap-4 items-center shadow-2xl shadow-blue-900/20 relative z-10"
        >
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 hidden md:flex">
            <Link2 size={24} className="text-white" />
          </div>

          <div className="flex-1 w-full relative">
            <input
              type="text"
              placeholder="Paste YouTube link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-[#020817]/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-blue-500/50 focus:bg-[#020817]/60 text-lg transition-all placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 group shrink-0"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing...
              </span>
            ) : (
              <>
                Analyze <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>

        {/* Features Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-32 w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-200 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </MainLayout>
  );
}