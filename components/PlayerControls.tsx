import React from 'react';
import { PlayIcon, PauseIcon, VolumeHighIcon, VolumeMediumIcon, VolumeLowIcon, VolumeMuteIcon, ResetIcon } from './icons';

interface PlayerControlsProps {
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  onPlayPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  offsetX: number;
  offsetY: number;
  onOffsetXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOffsetYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetAdjustments: () => void;
}

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds === 0) return '00:00';
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  progress,
  duration,
  volume,
  onPlayPause,
  onSeek,
  onVolumeChange,
  offsetX,
  offsetY,
  onOffsetXChange,
  onOffsetYChange,
  onResetAdjustments,
}) => {
  const VolumeIcon = () => {
    if (volume === 0) return <VolumeMuteIcon />;
    if (volume < 0.33) return <VolumeLowIcon />;
    if (volume < 0.66) return <VolumeMediumIcon />;
    return <VolumeHighIcon />;
  };

  return (
    <div className="w-full max-w-4xl mt-4 p-4 bg-black/30 backdrop-blur-md rounded-xl shadow-lg border border-white/10">
      <div className="flex items-center space-x-4">
        <button onClick={onPlayPause} className="p-2 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 hover:opacity-90 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 shadow-md shadow-fuchsia-500/30">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        
        <span className="text-sm text-slate-300 font-mono w-12 text-center">{formatTime(progress)}</span>
        
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={onSeek}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
          aria-label="Seek slider"
        />

        <span className="text-sm text-slate-300 font-mono w-12 text-center">{formatTime(duration)}</span>

        <div className="flex items-center space-x-2 w-36">
            <VolumeIcon />
            <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={onVolumeChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
                aria-label="Volume slider"
            />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center space-x-4">
        <div className="flex-grow flex items-center space-x-2">
            <label htmlFor="offsetX" className="text-sm text-slate-300 font-mono w-16 shrink-0">X-Offset</label>
            <input
                id="offsetX"
                type="range"
                min="-100"
                max="100"
                step="1"
                value={offsetX}
                onChange={onOffsetXChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
        </div>
        <div className="flex-grow flex items-center space-x-2">
            <label htmlFor="offsetY" className="text-sm text-slate-300 font-mono w-16 shrink-0">Y-Offset</label>
            <input
                id="offsetY"
                type="range"
                min="-100"
                max="100"
                step="1"
                value={offsetY}
                onChange={onOffsetYChange}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
        </div>
        <button 
            onClick={onResetAdjustments} 
            className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            aria-label="Reset adjustments"
            title="Reset adjustments"
        >
          <ResetIcon />
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;