import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, clearToken } from '../utils/tokenUtils';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const token = getToken();

  const handleLogout = () => {
    clearToken();
    navigate('/');
  };

  if (!token) {
    navigate('/');
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard 🎉</h1>
      <p className="text-gray-700 mb-6">You are logged in using a valid JWT token.</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
