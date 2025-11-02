import React, { useState, useRef, useCallback } from 'react';
import HologramPlayer from './HologramPlayer';
import PlayerControls from './PlayerControls';

interface CourseHologramPlayerProps {
  title: string;
  videoUrl: string;
}

const CourseHologramPlayer: React.FC<CourseHologramPlayerProps> = ({ title, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

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
    <div className="bg-black/20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/10 p-4 flex flex-col items-center space-y-4">
      <h3 className="text-xl font-semibold text-slate-100 text-center">{title}</h3>
      <div className="w-full">
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
      </div>
      <div className="w-full">
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
      </div>
    </div>
  );
};

export default CourseHologramPlayer;
