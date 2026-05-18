import { PlayCircle, ExternalLink, Play } from "lucide-react";
import getYoutubeVideoId from "../../utils/getYoutubeVideoId";
import { motion } from "framer-motion";

export default function VideoCard({ url }) {
  const videoId = getYoutubeVideoId(url);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl overflow-hidden mb-6 group border border-white/10 hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
             e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600/80 transition-all duration-300 border border-white/10">
            <PlayCircle size={32} className="text-white ml-1" />
          </div>
        </div>
        
        {/* Top badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5">
          <Play size={14} className="text-red-500" />
          <span className="text-xs font-medium text-gray-200">YouTube</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base text-white truncate">
              Currently Analyzing
            </h3>
            <p className="text-xs text-blue-300 truncate mt-0.5 max-w-full">
              {url}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 hover:text-blue-400 transition-all rounded-xl flex items-center justify-center shrink-0 border border-white/5"
            title="Open in YouTube"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}