"use client";

import { useState } from "react";
import { Droplet, Sun, Wind } from "lucide-react";

export default function RemoteCareControls() {
  const [watering, setWatering] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [ventilation, setVentilation] = useState(false);

  const toggleControl = (control, setter) => {
    setter(!control);
    // Here you would typically send a request to your IoT devices
    console.log(`${control ? "Deactivating" : "Activating"} ${setter.name}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Remote Controls</h3>
      <div className="space-y-4">
        <button
          className={`flex items-center justify-between w-full p-3 rounded-md ${
            watering ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => toggleControl(watering, setWatering)}
        >
          <span className="flex items-center">
            <Droplet className="mr-2" />
            Watering System
          </span>
          <span>{watering ? "On" : "Off"}</span>
        </button>
        <button
          className={`flex items-center justify-between w-full p-3 rounded-md ${
            lighting ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => toggleControl(lighting, setLighting)}
        >
          <span className="flex items-center">
            <Sun className="mr-2" />
            Lighting System
          </span>
          <span>{lighting ? "On" : "Off"}</span>
        </button>
        <button
          className={`flex items-center justify-between w-full p-3 rounded-md ${
            ventilation
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => toggleControl(ventilation, setVentilation)}
        >
          <span className="flex items-center">
            <Wind className="mr-2" />
            Ventilation System
          </span>
          <span>{ventilation ? "On" : "Off"}</span>
        </button>
      </div>
    </div>
  );
}
