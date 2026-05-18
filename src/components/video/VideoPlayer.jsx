import getYoutubeVideoId from "../../utils/getYoutubeVideoId";

export default function VideoPlayer({
  url,
  timestamp,
}) {

  const videoId =
    getYoutubeVideoId(url);

  if (!videoId) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-5 rounded-2xl">
        Invalid YouTube URL
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">

      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}?start=${timestamp || 0}&autoplay=1`}
        title="YouTube player"
        allowFullScreen
        className="w-full"
      ></iframe>

    </div>
  );
}