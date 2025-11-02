import React from 'react';
import { Page } from '../App';
import { LogoutIcon } from './icons';

interface NavbarProps {
    onNavigate: (page: Page) => void;
    onLogout: () => void;
    currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLogout, currentPage }) => {
    
    const navLinkClasses = (page: Page) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
            currentPage === page 
            ? 'text-white' 
            : 'text-slate-300 hover:text-white'
        }`;
    
    const activeLinkIndicator = (page: Page) =>
        currentPage === page
        ? <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-fuchsia-400 rounded-full shadow-[0_0_8px_theme(colors.fuchsia.400)]"></span>
        : null;

    return (
        <header className="bg-black/20 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                             <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">
                                Learn with Holograms
                            </h1>
                        </div>
                        <nav className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                <button onClick={() => onNavigate('dashboard')} className={navLinkClasses('dashboard')}>
                                    Dashboard
                                    {activeLinkIndicator('dashboard')}
                                </button>
                                <button onClick={() => onNavigate('courses')} className={navLinkClasses('courses')}>
                                    Courses
                                    {activeLinkIndicator('courses')}
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className="hidden md:block">
                        <button 
                            onClick={onLogout} 
                            className="flex items-center space-x-2 ml-4 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-black/20 hover:text-white transition-colors"
                            title="Sign Out"
                        >
                            <span>Sign Out</span>
                            <LogoutIcon />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;