import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(saved);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
    setShowModal(false);
  };

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
        <p className="text-2xl mb-2">🕒</p>
        <p>No watch history yet</p>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">History</h1>

        <button
          onClick={() => setShowModal(true)}
          className="text-sm text-red-400 hover:text-red-500"
        >
          Clear history
        </button>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {history.map((video) => (
          <Link
            to={`/watch/${video.id}`}
            key={video.id} // ✅ FIXED
            className="
              flex gap-4
              p-2 rounded-lg
              hover:bg-gray-900
              transition
            "
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-36 sm:w-40 aspect-video rounded-lg object-cover"
            />

            {/* Info */}
            <div className="flex flex-col">
              <h3 className="text-sm font-medium line-clamp-2">
                {video.title}
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                {video.channel}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Watched{" "}
                {new Date(video.watchedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Clear History Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#181818] rounded-xl p-6 w-[90%] max-w-sm">
            <h3 className="text-lg font-semibold mb-3">
              Clear watch history?
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              This will remove all videos from your history.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                Cancel
              </button>

              <button
                onClick={clearHistory}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
