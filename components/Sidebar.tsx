import React from 'react';
import { SidebarLink } from './SidebarLink';
import { DashboardIcon, BookIcon, PyarmidIcon, SignOutIcon, SettingsIcon } from './Icons';
import type { DashboardView } from '../types';

interface SidebarProps {
  activeView: DashboardView;
  setActiveView: (view: DashboardView) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onLogout }) => {
  return (
    <aside className="w-16 sm:w-64 bg-white flex flex-col transition-all duration-300 border-r border-slate-200">
      <div className="flex items-center justify-center sm:justify-start sm:px-6 h-20 border-b border-slate-200">
        <PyarmidIcon className="w-8 h-8 text-sky-500" />
        <h1 className="hidden sm:block ml-3 text-xl font-bold text-slate-800">Holo-Learn</h1>
      </div>
      <nav className="flex-grow px-2 sm:px-4 py-4 space-y-2">
        <SidebarLink
          icon={<DashboardIcon />}
          label="Dashboard"
          isActive={activeView === 'dashboard'}
          onClick={() => setActiveView('dashboard')}
        />
        <SidebarLink
          icon={<BookIcon />}
          label="Courses"
          isActive={activeView === 'courses'}
          onClick={() => setActiveView('courses')}
        />
        <SidebarLink
          icon={<PyarmidIcon />}
          label="Create Your Own"
          isActive={activeView === 'create'}
          onClick={() => setActiveView('create')}
        />
        <SidebarLink
          icon={<SettingsIcon />}
          label="Settings"
          isActive={activeView === 'settings'}
          onClick={() => setActiveView('settings')}
        />
      </nav>
      <div className="px-2 sm:px-4 py-4 border-t border-slate-200">
        <SidebarLink
          icon={<SignOutIcon />}
          label="Sign Out"
          onClick={onLogout}
        />
      </div>
    </aside>
  );
};

export default Sidebar;