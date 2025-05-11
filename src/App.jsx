
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LiveLocation from './pages/LiveLocation';
import Payroll from './pages/Payroll';
import Attendance from './pages/Attendance';
import LeaveManagement from './pages/LeaveManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LiveLocation />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<LeaveManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
