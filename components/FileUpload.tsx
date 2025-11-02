import React from 'react';
import { UploadIcon } from './Icons';

interface FileUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  return (
    <label className="group relative cursor-pointer flex flex-col items-center justify-center px-8 py-6 border-2 border-dashed border-slate-300 rounded-lg hover:border-sky-500 transition-colors duration-300 bg-white">
      <div className="flex items-center space-x-4">
        <UploadIcon className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
        <div>
          <span className="font-semibold text-lg text-slate-700 group-hover:text-sky-500">Choose a video file</span>
          <p className="text-sm text-slate-500">MP4, WebM, or OGG</p>
        </div>
      </div>
      <input type="file" accept="video/*" onChange={onChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
    </label>
  );
};