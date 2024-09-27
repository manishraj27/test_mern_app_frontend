import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-accent font-bold text-2xl">My Modern App</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/home" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/register" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
