import React, { useRef, useState, useEffect, useCallback } from 'react';
import { PlayIcon, PauseIcon, ReplayIcon } from './Icons';

interface HologramPlayerProps {
  src: string | null;
  title: string;
  onBack: () => void;
  distance: number;
}

const VideoInstance: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>;
  src: string | null;
  className: string;
  gridPosition: string;
  style?: React.CSSProperties;
}> = ({ videoRef, src, className, gridPosition, style }) => (
  <div className={`flex items-center justify-center overflow-hidden ${gridPosition}`} style={style}>
    <video
      ref={videoRef}
      src={src ?? ''}
      muted
      playsInline
      className={`object-contain w-full h-full ${className}`}
    />
  </div>
);

export const HologramPlayer: React.FC<HologramPlayerProps> = ({ src, title, onBack, distance }) => {
  const topRef = useRef<HTMLVideoElement>(null);
  const bottomRef = useRef<HTMLVideoElement>(null);
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  const videoRefs = [topRef, bottomRef, leftRef, rightRef];

  const syncVideos = (action: 'play' | 'pause' | 'time', value: number = 0) => {
    videoRefs.forEach(ref => {
      if (ref.current) {
        if (action === 'play') ref.current.play();
        if (action === 'pause') ref.current.pause();
        if (action === 'time') ref.current.currentTime = value;
      }
    });
  };

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      syncVideos('pause');
      setIsPlaying(false);
    } else {
      if (isEnded) {
        syncVideos('time', 0);
        setIsEnded(false);
      }
      syncVideos('play');
      setIsPlaying(true);
    }
  }, [isPlaying, isEnded]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setProgress(time);
    syncVideos('time', time);
  };
  
  const handleReplay = useCallback(() => {
     syncVideos('time', 0);
     syncVideos('play');
     setIsPlaying(true);
     setIsEnded(false);
  }, []);

  useEffect(() => {
    const masterVideo = bottomRef.current;
    if (!masterVideo) return;

    const handleTimeUpdate = () => setProgress(masterVideo.currentTime);
    const handleLoadedMetadata = () => setDuration(masterVideo.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
    };

    masterVideo.addEventListener('timeupdate', handleTimeUpdate);
    masterVideo.addEventListener('loadedmetadata', handleLoadedMetadata);
    masterVideo.addEventListener('ended', handleEnded);

    return () => {
      masterVideo.removeEventListener('timeupdate', handleTimeUpdate);
      masterVideo.removeEventListener('loadedmetadata', handleLoadedMetadata);
      masterVideo.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  useEffect(() => {
    // Autoplay when src changes
    if (src) {
       // A small delay to ensure all videos are ready
       setTimeout(() => {
            syncVideos('play');
            setIsPlaying(true);
            setIsEnded(false);
       }, 100);
    } else {
        setIsPlaying(false);
    }
  }, [src])

  if (!src) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-gray-400">No video selected.</p>
      </div>
    );
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center relative">
       <button onClick={onBack} className="absolute top-4 left-4 z-20 bg-gray-800/50 hover:bg-sky-500/50 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 backdrop-blur-sm">
            &larr; Back
       </button>
      <div className="w-full h-full max-w-[100vh] max-h-[100vw] aspect-square grid grid-cols-3 grid-rows-3">
        <VideoInstance videoRef={topRef} src={src} gridPosition="col-start-2 row-start-1" className="transform rotate-180" style={{ marginBottom: `${distance}px` }} />
        <VideoInstance videoRef={leftRef} src={src} gridPosition="col-start-1 row-start-2" className="transform rotate-90" style={{ marginRight: `${distance}px` }} />
        <VideoInstance videoRef={rightRef} src={src} gridPosition="col-start-3 row-start-2" className="transform -rotate-90" style={{ marginLeft: `${distance}px` }} />
        <VideoInstance videoRef={bottomRef} src={src} gridPosition="col-start-2 row-start-3" className="" style={{ marginTop: `${distance}px` }}/>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 backdrop-blur-md">
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-semibold text-white truncate mb-2">{title}</p>
          <div className="flex items-center space-x-4">
              <button onClick={handlePlayPause} className="text-white hover:text-sky-400 transition-colors">
                {isEnded ? <ReplayIcon /> : (isPlaying ? <PauseIcon /> : <PlayIcon />)}
              </button>
            <span className="text-sm font-mono">{formatTime(progress)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={progress}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
            <span className="text-sm font-mono">{formatTime(duration)}</span>
            <button onClick={handleReplay} className="text-white hover:text-sky-400 transition-colors">
                <ReplayIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};