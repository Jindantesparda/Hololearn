import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ConverterPage from './pages/ConverterPage';
import CoursesPage from './pages/CoursesPage';
import Navbar from './components/Navbar';

export type Page = 'dashboard' | 'converter' | 'courses';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };
  
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigateToConverter={() => handleNavigate('converter')} />;
      case 'converter':
        return <ConverterPage />;
      case 'courses':
        return <CoursesPage />;
      default:
        return <DashboardPage onNavigateToConverter={() => handleNavigate('converter')} />;
    }
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen">
        <Navbar onNavigate={handleNavigate} onLogout={handleLogout} currentPage={currentPage} />
        <main className="p-4 sm:p-6 md:p-8">
            {renderPage()}
        </main>
    </div>
  );
};

export default App;