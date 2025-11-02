import React from 'react';
import CourseHologramPlayer from '../components/CourseHologramPlayer';

const physicsVideos = [
  {
    title: 'Neil deGrasse Tyson: A Tour of the Universe',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    title: 'Neil deGrasse Tyson on The Most Astounding Fact',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    title: 'Neil deGrasse Tyson Explains Gravitational Waves',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
  {
    title: 'Neil deGrasse Tyson: We Stopped Dreaming (Apollo)',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  },
];


const CoursesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Interactive Physics Courses</h1>
        <p className="mt-2 text-slate-400">Explore complex concepts through interactive holographic videos.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {physicsVideos.map((video, index) => (
          <CourseHologramPlayer
            key={index}
            title={video.title}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;