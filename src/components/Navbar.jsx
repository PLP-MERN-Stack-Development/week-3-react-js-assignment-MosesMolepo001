import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 shadow">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">PLP Task Manager</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/api" className="hover:underline">API</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;