import React from 'react';
import VideoCard from './VideoCard';
import type { VideoGridProps } from './types';

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;