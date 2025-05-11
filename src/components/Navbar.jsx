

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white font-semibold text-xl fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>Employee Management System</div>
        <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white space-y-2 px-4 py-4 shadow-lg md:hidden z-50">
          <Link
            to="/location"
            onClick={() => setIsOpen(false)}
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Live Location
          </Link>
          <Link
            to="/payroll"
            onClick={() => setIsOpen(false)}
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Payroll
          </Link>
          <Link
            to="/attendance"
            onClick={() => setIsOpen(false)}
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Attendance
          </Link>
          <Link
            to="/leave"
            onClick={() => setIsOpen(false)}
            className="block hover:bg-gray-700 p-2 rounded"
          >
            Leave Management
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
