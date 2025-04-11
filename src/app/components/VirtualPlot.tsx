"use client";

import { useState } from "react";

interface Section {
  id: number;
  name: string;
  color: string;
}

const sections: Section[] = [
  { id: 1, name: "Vegetables", color: "bg-green-500" },
  { id: 2, name: "Fruits", color: "bg-yellow-500" },
  { id: 3, name: "Herbs", color: "bg-blue-500" },
  { id: 4, name: "Flowers", color: "bg-pink-500" },
];

export default function VirtualPlot() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sections.map((section) => (
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
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {sections.find((s) => s.id === selectedSection)?.name}
          </h2>
          <p className="text-gray-300">
            Select plants to add to your {sections.find((s) => s.id === selectedSection)?.name.toLowerCase()} section.
          </p>
        </div>
      )}
    </div>
  );
}
