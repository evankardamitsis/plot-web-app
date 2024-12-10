"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "00:00", soilMoisture: 30, temperature: 20, humidity: 50 },
  { name: "04:00", soilMoisture: 28, temperature: 18, humidity: 55 },
  { name: "08:00", soilMoisture: 32, temperature: 22, humidity: 48 },
  { name: "12:00", soilMoisture: 35, temperature: 25, humidity: 45 },
  { name: "16:00", soilMoisture: 33, temperature: 24, humidity: 47 },
  { name: "20:00", soilMoisture: 31, temperature: 21, humidity: 52 },
];

export default function SensorData() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Sensor Data</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="soilMoisture"
            stroke="#8884d8"
            name="Soil Moisture (%)"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#82ca9d"
            name="Temperature (°C)"
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#ffc658"
            name="Humidity (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
