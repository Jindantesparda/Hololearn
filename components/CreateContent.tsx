import React from 'react';
import { FileUpload } from './FileUpload';
import { PyarmidIcon } from './Icons';

interface CreateContentProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateContent: React.FC<CreateContentProps> = ({ onFileChange }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <PyarmidIcon className="w-24 h-24 text-sky-500 mb-6" />
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Your Own Hologram</h2>
      <p className="text-slate-500 mb-8 max-w-md">Upload a video from your device to convert it into a 4-sided pyramid hologram format.</p>
      <FileUpload onChange={onFileChange} />
    </div>
  );
};

export default CreateContent;