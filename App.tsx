import React from 'react';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    // FIX: Removed theme classes to let Dashboard component control styling for consistency.
    <div className="font-sans">
      <Dashboard />
    </div>
  );
};

export default App;
