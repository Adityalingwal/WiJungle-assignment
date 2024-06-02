import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Security Dashboard</h1>
      <Dashboard />
    </div>
  );
}

export default App;
