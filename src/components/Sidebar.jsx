import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();


  const isActive = (path) => (location.pathname === path ? 'bg-red-500' : 'hover:bg-red-500');

  return (
<div className='w-64 bg-black h-full text-white p-4 md:block hidden pt-[72px] fixed top-0 left-0 z-40'>
      <ul className='space-y-4'>
        {[
          { path: '/location', label: 'Live Location' },
          { path: '/payroll', label: 'Payroll' },
          { path: '/attendance', label: 'Attendance' },
          { path: '/leave', label: 'Leave Management' },
        ].map((item) => (
          <li key={item.path} className={`p-2 rounded ${isActive(item.path)}`}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
