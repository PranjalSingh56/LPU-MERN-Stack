import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

export default function Trending() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyByA_RRqbnKI7kqpF1ZBulEwhsXtlgb6fY`
        );
        const data = await res.json();

        const formatted = data.items.map(video => ({
          id: video.id,
          title: video.snippet.title,
          channel: video.snippet.channelTitle,
          thumbnail: video.snippet.thumbnails.high.url,
        }));

        setVideos(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Trending</h1>

      <div className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        gap-x-4 gap-y-8
      ">
        {loading
          ? Array(10).fill(0).map((_, i) => <Shimmer key={i} />)
          : videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
      </div>
    </section>
  );
}
