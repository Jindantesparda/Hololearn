import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import CoursesContent from './components/CoursesContent';
import CreateContent from './components/CreateContent';
import SettingsContent from './components/SettingsContent';
import { HologramPlayer } from './components/HologramPlayer';
import type { DashboardView, EducationalVideo } from './types';

interface DashboardPageProps {
    onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
    const [activeView, setActiveView] = useState<DashboardView>('dashboard');
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [currentTitle, setCurrentTitle] = useState<string>('');
    const [hologramDistance, setHologramDistance] = useState<number>(0);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
            setCurrentTitle(file.name);
        }
    }, []);

    const handleVideoSelect = useCallback((video: EducationalVideo) => {
        setVideoSrc(video.videoUrl);
        setCurrentTitle(video.title);
    }, []);

    const handleBackFromPlayer = () => {
        setVideoSrc(null);
        setCurrentTitle('');
    };

    const renderContent = () => {
        switch (activeView) {
            case 'dashboard':
                return <DashboardContent />;
            case 'courses':
                return <CoursesContent onSelectVideo={handleVideoSelect} />;
            case 'create':
                return <CreateContent onFileChange={handleFileChange} />;
            case 'settings':
                return <SettingsContent distance={hologramDistance} setDistance={setHologramDistance} />;
            default:
                return null;
        }
    };

    if (videoSrc) {
        return <HologramPlayer src={videoSrc} title={currentTitle} onBack={handleBackFromPlayer} distance={hologramDistance} />;
    }

    return (
        <div className="flex min-h-screen bg-orange-50">
            <Sidebar 
                activeView={activeView}
                setActiveView={setActiveView}
                onLogout={onLogout}
            />
            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
};

export default DashboardPage;