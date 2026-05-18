import getYoutubeVideoId from "../../utils/getYoutubeVideoId";
import { AlertCircle } from "lucide-react";

export default function VideoPlayer({ url, timestamp }) {
  const videoId = getYoutubeVideoId(url);

  if (!videoId) {
    return (
      <div className="glass-panel border-red-500/20 text-red-400 p-6 rounded-2xl flex items-center gap-3">
        <AlertCircle size={20} />
        <div>
          <h4 className="font-medium text-red-300">Invalid URL</h4>
          <p className="text-sm opacity-80">Could not extract YouTube video ID from the provided link.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-blue-900/10 bg-black aspect-video relative group">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?start=${timestamp || 0}&autoplay=${timestamp ? 1 : 0}`}
        title="YouTube player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
}