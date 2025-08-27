import React from 'react';
import type { VideoCardProps } from './types';

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative pb-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
        <p className="text-gray-400 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;