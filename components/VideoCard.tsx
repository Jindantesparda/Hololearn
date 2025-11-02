import React from 'react';
import type { EducationalVideo } from '../types';
import { PlayIcon } from './Icons';

interface VideoCardProps {
  video: EducationalVideo;
  onSelect: (video: EducationalVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-500/20"
      onClick={() => onSelect(video)}
    >
      <div className="relative">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayIcon className="w-16 h-16 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-slate-800 truncate">{video.title}</h3>
        <p className="text-slate-500 text-sm mt-1 h-10 overflow-hidden">{video.description}</p>
      </div>
    </div>
  );
};