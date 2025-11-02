import React, { useState } from 'react';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would perform actual authentication.
    // For this demo, we'll just set the logged-in state to true.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-orange-50 text-slate-800 selection:bg-rose-300 selection:text-slate-900">
      {isLoggedIn ? (
        <DashboardPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;