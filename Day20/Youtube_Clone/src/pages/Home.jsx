import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState("");

  const fetchVideos = async () => {
    setLoading(true);

    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&pageToken=${pageToken}&key=AIzaSyByA_RRqbnKI7kqpF1ZBulEwhsXtlgb6fY`;

    const res = await fetch(url);
    const data = await res.json();

    const formatted = data.items.map(video => ({
      id: video.id,
      title: video.snippet.title,
      channel: video.snippet.channelTitle,
      thumbnail: video.snippet.thumbnails.high.url,
    }));

    setVideos(prev => {
    const existingIds = new Set(prev.map(v => v.id));
    const uniqueNewVideos = formatted.filter(v => !existingIds.has(v.id));
    return [...prev, ...uniqueNewVideos];
    });

    setPageToken(data.nextPageToken);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300 &&
        !loading
      ) {
        fetchVideos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Video Section</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}

        {loading &&
          Array(8)
            .fill(0)
            .map((_, i) => <Shimmer key={i} />)}
      </div>
    </div>
  );
}
