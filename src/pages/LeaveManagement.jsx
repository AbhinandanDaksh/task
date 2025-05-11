import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import CardContent from '../components/ui/CardContent';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('https://selectiontask.onrender.com/api/leaves');
        console.log('Fetched attendance data:', response.data);
        setAttendanceData(response.data.result);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className='flex h-screen'>
      <Sidebar />
      
      <div className='flex-1 md:ml-64'>
        <Navbar />

        <div className='p-4 pt-[72px]'>
          <Card>
            <CardContent>
              <h2 className='text-xl font-semibold mb-4'>Employee Attendance Management</h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-left border-collapse'>
                  <thead>
                    <tr>
                      <th className='border-b p-2'>Name</th>
                      <th className='border-b p-2'>From-Date</th>
                      <th className='border-b p-2'>To-Date</th>
                      <th className='border-b p-2'>Reason</th>
                      <th className='border-b p-2'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record, index) => (
                      <tr key={index}>
                        <td className='border-b p-2'>{record.employeeId.name}</td>
                        <td className='border-b p-2'>{record.fromDate}</td>
                        <td className='border-b p-2'>{record.toDate}</td>
                        <td className='border-b p-2'>{record.reason}</td>
                        <td
                          className={`border-b p-2 ${
                            record.status === 'Present' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
