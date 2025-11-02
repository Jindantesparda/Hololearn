import React, { useState, useRef, useCallback } from 'react';
import VideoUploader from '../components/VideoUploader';
import HologramPlayer from '../components/HologramPlayer';
import PlayerControls from '../components/PlayerControls';

const ConverterPage: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const handleVideoSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  };

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = Number(e.target.value);
      videoRef.current.currentTime = time;
      setProgress(time);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = Number(e.target.value);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const resetToUploader = () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setVideoUrl(null);
      setIsPlaying(false);
      setProgress(0);
      setDuration(0);
      setOffsetX(0);
      setOffsetY(0);
  };

  const handleOffsetXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOffsetX(Number(e.target.value));
  };

  const handleOffsetYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOffsetY(Number(e.target.value));
  };
  
  const handleResetAdjustments = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="w-full max-w-5xl mx-auto text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500" style={{ textShadow: '0 0 15px rgba(217, 70, 239, 0.4)' }}>
          Pyramid Hologram Converter
        </h1>
        <p className="text-slate-400 mt-2">
          Turn any video into a 3D hologram projection in real-time.
        </p>
      </header>

      <div className="w-full flex-grow flex flex-col items-center justify-center">
        {!videoUrl ? (
          <VideoUploader onVideoSelect={handleVideoSelect} />
        ) : (
          <div className="w-full max-w-4xl flex flex-col items-center">
            <HologramPlayer 
              videoRef={videoRef}
              canvasRef={canvasRef}
              videoUrl={videoUrl}
              animationFrameRef={animationFrameRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              offsetX={offsetX}
              offsetY={offsetY}
            />
            <PlayerControls
              isPlaying={isPlaying}
              progress={progress}
              duration={duration}
              volume={volume}
              onPlayPause={handlePlayPause}
              onSeek={handleSeek}
              onVolumeChange={handleVolumeChange}
              offsetX={offsetX}
              offsetY={offsetY}
              onOffsetXChange={handleOffsetXChange}
              onOffsetYChange={handleOffsetYChange}
              onResetAdjustments={handleResetAdjustments}
            />
            <button
                onClick={resetToUploader}
                className="mt-6 px-6 py-2 bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white font-semibold rounded-lg shadow-lg shadow-fuchsia-500/20 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all transform hover:scale-105"
            >
                Upload a Different Video
            </button>
          </div>
        )}
      </div>
       <footer className="w-full text-center p-4 mt-8">
            <p className="text-slate-500 text-sm">Created by a World-Class Senior Frontend React Engineer.</p>
        </footer>
    </div>
  );
};

export default ConverterPage;