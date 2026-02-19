import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function WatchPage() {
  const { id } = useParams();

  useEffect(() => {
    async function saveToHistory() {
      try {
        // Fetch video details
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyByA_RRqbnKI7kqpF1ZBulEwhsXtlgb6fY`
        );
        const data = await res.json();

        if (!data.items?.length) return;

        const video = data.items[0];

        const history = JSON.parse(localStorage.getItem("history")) || [];

        // remove duplicates
        const filtered = history.filter(v => v.id !== id);

        const updatedHistory = [
          {
            id,
            title: video.snippet.title,
            channel: video.snippet.channelTitle,
            thumbnail: video.snippet.thumbnails.high.url,
            watchedAt: Date.now(),
          },
          ...filtered,
        ];

        localStorage.setItem("history", JSON.stringify(updatedHistory));
      } catch (err) {
        console.error("History save failed", err);
      }
    }

    saveToHistory();
  }, [id]);

  const handleShare = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: "Check this video",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  return (
    <div className="p-6 flex justify-center bg-[#0f0f0f] min-h-screen">
      <div className="w-full max-w-5xl">
        
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          />
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleShare}
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            🔗 Share
          </button>
        </div>

      </div>
    </div>
  );
}
