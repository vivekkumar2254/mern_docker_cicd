import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logout from './Logout';
import SignUp from './Signup';
import { useAuth } from '../context/AuthProvider';

const Layout = () => {
  const [authUser, setAuthUser] = useAuth();  // Ensure this is correct

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="flex flex-wrap justify-between bg-blue-500 text-white p-4 items-center">
          {/* Logo or Branding */}
          <div className="text-xl font-bold">Happy Home</div>

          {/* Navigation Links */}
          <ul className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20 text-sm sm:text-base">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>

          {/* Conditional Logout button or message */}
          {authUser ? <Logout /> : <span>Please Log in</span>}
        </nav>
      </header>

      {/* Main content with flexible height */}
      <main className="flex-grow p-4 sm:p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
