import React from "react";
import { useParams } from "react-router-dom";

export default function WatchPage() {
  const { id } = useParams();

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/watch/v1=${id}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="border-none"
        ></iframe>
      </div>
    </div>
  );
}