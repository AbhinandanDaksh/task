


import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import CardContent from '../components/ui/CardContent';
import Card from '../components/ui/Card';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const LiveLocation = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://selectiontask.onrender.com/api/locations/get-location');
        console.log('Fetched locations:', response.data);

        
        setLocations(Array.isArray(response.data.result) ? response.data.result : [response.data.result]);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 pt-20 md:ml-64 p-4 overflow-auto">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Live Employee Locations</h2>
              <MapContainer
                center={[28.7041, 77.1025]} 
                zoom={5}
                className="h-[380px] w-full md:h-[400px] lg:h-[480px] z-0"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.latitude, location.longitude]}
                  >
                    <Popup>
                      <div>
                        <strong>Employee ID:</strong> {location.employeeId || 'N/A'} <br />
                        <strong>Timestamp:</strong> {new Date(location.timestamp).toLocaleString()} <br />
                        <strong>Latitude:</strong> {location.latitude} <br />
                        <strong>Longitude:</strong> {location.longitude} <br />
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LiveLocation;

