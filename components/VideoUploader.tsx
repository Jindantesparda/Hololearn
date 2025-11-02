import React, { useRef, useState, useCallback } from 'react';

interface VideoUploaderProps {
  onVideoSelect: (file: File) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onVideoSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onVideoSelect(file);
    } else {
        alert('Please select a valid video file.');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      onVideoSelect(file);
    } else {
        alert('Please drop a valid video file.');
    }
  }, [onVideoSelect]);

  return (
    <div 
        className={`w-full max-w-2xl p-8 border-4 border-dashed rounded-2xl cursor-pointer transition-all duration-300 bg-black/20 backdrop-blur-sm border-white/10 ${isDragging ? 'border-fuchsia-400 scale-105 shadow-2xl shadow-fuchsia-500/20' : 'hover:border-white/30'}`}
        onClick={handleUploadClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="video/*"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-24 h-24 mb-4 transition-colors duration-300 ${isDragging ? 'text-fuchsia-400' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.55a2 2 0 01.95 1.7V17a2 2 0 01-2 2H5a2 2 0 01-2-2V8.7a2 2 0 01.95-1.7L8 5m7 5l-2.5-2.5M15 10l-2.5 2.5m0 0l-2.5 2.5m2.5-2.5l2.5-2.5M15 10l2.5 2.5m-5-5l2.5 2.5" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 11-8 0 4 4 0 018 0z" transform="translate(13, -3)"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-2-2v2m4-2v2m-2-8v2m-2-2v2m4-2v2" />
        </svg>
        <p className="text-xl font-semibold text-slate-100">Drag & Drop Your Video Here</p>
        <p className="text-slate-400 mt-2">or</p>
        <p className="mt-2 px-4 py-2 bg-black/20 rounded-lg font-medium text-slate-300">Click to Upload</p>
      </div>
    </div>
  );
};

export default VideoUploader;