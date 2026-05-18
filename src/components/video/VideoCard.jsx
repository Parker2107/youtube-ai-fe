import {
  PlayCircle,
  ExternalLink,
} from "lucide-react";

import getYoutubeVideoId from "../../utils/getYoutubeVideoId";

export default function VideoCard({
  url,
}) {

  const videoId =
    getYoutubeVideoId(url);

  const thumbnail =
     `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden mb-6">

      {/* Thumbnail */}
      <div className="relative">

        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-72 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">

            <PlayCircle
              size={40}
              className="text-white"
            />

          </div>

        </div>

      </div>

      {/* Info */}
      <div className="p-5">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold text-lg">
              Current Video
            </h3>

            <p className="text-sm text-gray-400 truncate max-w-2xl">
              {url}
            </p>

          </div>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 transition-all p-3 rounded-xl"
          >

            <ExternalLink size={18} />

          </a>

        </div>

      </div>

    </div>
  );
}