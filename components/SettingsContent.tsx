import React from 'react';
import { SettingsIcon } from './Icons';

interface SettingsContentProps {
  distance: number;
  setDistance: (distance: number) => void;
}

const SettingsContent: React.FC<SettingsContentProps> = ({ distance, setDistance }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Settings</h2>
      <p className="text-slate-500 mb-8">Adjust the configuration of the hologram player.</p>
      
      <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
            <SettingsIcon className="w-6 h-6 text-sky-500 mr-3" />
            <h3 className="text-xl font-semibold text-slate-700">Hologram Settings</h3>
        </div>
        
        <div className="space-y-2">
            <label htmlFor="distance-slider" className="block text-sm font-medium text-slate-600">
                Distance from Center: <span className="font-bold text-sky-600">{distance}px</span>
            </label>
             <p className="text-xs text-slate-400">
                Increase this value to create a larger gap in the middle, which can help align the video with your pyramid.
            </p>
            <input
                id="distance-slider"
                type="range"
                min="0"
                max="100"
                step="1"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;