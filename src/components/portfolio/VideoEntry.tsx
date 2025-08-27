import React from 'react';
import type { VideoEntryProps } from './types';

const VideoEntry: React.FC<VideoEntryProps> = ({ video, isVisible }) => {
  const contentClasses = `
    flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto p-6
    ${video.position === 'right' ? 'md:flex-row-reverse' : ''}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    transition-all duration-1000 ease-out
  `;

  return (
    <div className={contentClasses}>
      {/* Video */}
      <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-xl bg-black/20 backdrop-blur-sm">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-white">{video.title}</h3>
        <p className="text-gray-300 leading-relaxed">{video.description}</p>
        
        {video.highlights && (
          <ul className="space-y-2 mt-4">
            {video.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-300">{highlight}</li>
            ))}
          </ul>
        )}

        {video.ctaLink && video.ctaText && (
          <a
            href={video.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {video.ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default VideoEntry;