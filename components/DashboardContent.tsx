import React from 'react';

const DashboardContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-xl">
             <h1 className="text-4xl font-bold text-slate-800 mb-2">Welcome to Holo-Learn</h1>
            <p className="text-lg text-slate-500">
                Navigate using the sidebar to create your own holograms or explore our educational courses.
            </p>
        </div>
    </div>
  );
};

export default DashboardContent;