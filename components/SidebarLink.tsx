import React from 'react';

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center sm:justify-start space-x-3 p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-sky-500 text-white'
          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};