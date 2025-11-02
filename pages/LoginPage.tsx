import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here.
        // For this demo, any input is considered valid.
        onLogin();
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
         <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500" style={{ textShadow: '0 0 20px rgba(217, 70, 239, 0.5)' }}>
                Learn with Holograms
            </h1>
            <p className="text-slate-400 mt-2">
            Sign in to access your dashboard.
            </p>
        </header>
        <div className="bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="appearance-none border border-white/10 rounded-lg w-full py-3 px-4 bg-black/20 text-slate-100 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="appearance-none border border-white/10 rounded-lg w-full py-3 px-4 bg-black/20 text-slate-100 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-pink-500 to-fuchsia-500 hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all shadow-lg shadow-fuchsia-500/20"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;