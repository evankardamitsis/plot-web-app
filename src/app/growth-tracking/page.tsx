"use client";

import { useState } from "react";

const plotSections = [
  { id: 1, name: "Vegetables", color: "bg-green-300" },
  { id: 2, name: "Fruits", color: "bg-red-300" },
  { id: 3, name: "Flowers", color: "bg-yellow-300" },
];

export default function VirtualPlot() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Your Virtual Plot</h3>
      <div className="grid grid-cols-3 gap-4">
        {plotSections.map((section) => (
          <button
            key={section.id}
            className={`${section.color} p-4 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500`}
            onClick={() => setSelectedSection(section.id)}
          >
            {section.name}
          </button>
        ))}
      </div>
      {selectedSection && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p>
            Details for{" "}
            {plotSections.find((s) => s.id === selectedSection)?.name}
          </p>
        </div>
      )}
    </div>
  );
}
