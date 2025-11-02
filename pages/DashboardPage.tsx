import React from 'react';
import { HologramIcon, ClockIcon, ProjectsIcon } from '../components/icons';

interface DashboardPageProps {
  onNavigateToConverter: () => void;
}

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; }> = ({ icon, title, value }) => (
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex items-center space-x-4 transition-all hover:shadow-fuchsia-500/10 hover:scale-105">
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <p className="text-sm text-slate-400">{title}</p>
            <p className="text-2xl font-bold text-slate-100">{value}</p>
        </div>
    </div>
);

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigateToConverter }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Welcome Back!</h1>
        <p className="mt-2 text-slate-400">Here's a summary of your holographic projection activity.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard icon={<HologramIcon />} title="Holograms Created" value="142" />
        <StatCard icon={<ClockIcon />} title="Hours Processed" value="87.5" />
        <StatCard icon={<ProjectsIcon />} title="Active Projects" value="12" />
      </div>
      
      <div className="text-center bg-black/20 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10">
        <h2 className="text-2xl font-bold text-slate-100">Ready to create a new experience?</h2>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
            Turn your standard video into a stunning 4-sided holographic projection suitable for any pyramid display.
        </p>
        <button 
            onClick={onNavigateToConverter}
            className="mt-6 px-8 py-3 bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg shadow-fuchsia-500/20 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all transform hover:scale-105"
        >
            Create New Hologram
        </button>
      </div>

    </div>
  );
};

export default DashboardPage;