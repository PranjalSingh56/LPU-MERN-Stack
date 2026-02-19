import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const hoverTimeout = useRef(null);

    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
        setHovered(true);
        }, 400); // delay like YouTube
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout.current);
        setHovered(false);
    };

    return (
        <div
            onClick={() => navigate(`/watch/${video.id}`)}
            className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">

            {!hovered ? (
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
            />
            ) : (
            <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
            />
            )}

        </div>
            {/* <div className="w-full aspect-video bg-gray-800">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                />
            </div> */}
            <div className="p-3">
                <h3 className="font-semibold text-sm line-clamp-2 text-white">
                    {video.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                    {video.channel}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;
