import React from 'react';
import { VideoCard } from './VideoCard';
import { EDUCATIONAL_VIDEOS } from '../constants';
import type { EducationalVideo } from '../types';

interface CoursesContentProps {
  onSelectVideo: (video: EducationalVideo) => void;
}

const CoursesContent: React.FC<CoursesContentProps> = ({ onSelectVideo }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Educational Library</h2>
      <p className="text-slate-500 mb-8">Select a video to learn in 3D.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {EDUCATIONAL_VIDEOS.map(video => (
          <VideoCard key={video.id} video={video} onSelect={onSelectVideo} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContent;