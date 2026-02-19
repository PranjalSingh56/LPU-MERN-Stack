import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import VideoCard from "./components/VideoCard";
import WatchPage from "./components/WatchPage";
import Layout from "./components/layout";
import History from "./components/History";


export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=AIzaSyByA_RRqbnKI7kqpF1ZBulEwhsXtlgb6fY"
        );

        const data = await response.json();

        if (!data.items) {
          console.error("API returned error:", data);
          setVideos([]);
          return;
        }

        const formattedVideos = data.items.map((video) => ({
          id: video.id,
          title: video.snippet.title,
          channel: video.snippet.channelTitle,
          thumbnail: video.snippet.thumbnails.high.url,
        }));

        setVideos(formattedVideos);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
    <Layout/>
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="p-6">
              <h1 className="text-xl font-bold mb-6">Video Section...</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                  ? Array(8).fill(0).map((_, i) => <Shimmer key={i} />)
                  : videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
              </div>
            </div>
          }
        />

        {/* WATCH PAGE */}
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/history" element={<History />} />

      </Routes>
    </div>
    </>
  );
}