import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import CardContent from '../components/ui/CardContent';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Payroll = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://selectiontask.onrender.com/api/payroll');
        console.log('Fetched employee data:', response.data);
        setEmployees(response.data.result);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 md:ml-64'>
        <Navbar />
        <div className='p-4 pt-20'> 
          <Card>
            <CardContent>
              <h2 className='text-xl font-semibold mb-2'>Employee Payroll Management</h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-left border-collapse'>
                  <thead>
                    <tr>
                      <th className='border-b p-2'>Name</th>
                      
                      <th className='border-b p-2'>Role</th>
                      <th className='border-b p-2'>Month</th>
                      <th className='border-b p-2'>Salary</th>
                      <th className='border-b p-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp, index) => (
                      <tr key={index}>
                        <td className='border-b p-2'>{emp.employeeId.name}</td>
                        
                        <td className='border-b p-2'>{emp.employeeId.role}</td>
                        <td className='border-b p-2'>{emp.month}</td>
                        <td className='border-b p-2'>₹{emp.salary}</td>
                        <td className='border-b p-2'>
                          <button className='bg-blue-500 text-white px-2 py-1 rounded'>
                            View Payslip
                          </button>
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

export default Payroll;
