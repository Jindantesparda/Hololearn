
import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${
        isActive ? 'bg-cyan-500 text-white' : 'bg-transparent text-gray-300 hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
};
