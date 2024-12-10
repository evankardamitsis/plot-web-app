import { CheckCircle, Circle } from "lucide-react";

const milestones = [
  { id: 1, name: "Seed Planted", date: "2023-05-01", completed: true },
  { id: 2, name: "Germination", date: "2023-05-07", completed: true },
  { id: 3, name: "First True Leaves", date: "2023-05-14", completed: true },
  { id: 4, name: "Flowering", date: "2023-06-01", completed: false },
  { id: 5, name: "Fruit Set", date: "2023-06-15", completed: false },
  { id: 6, name: "Harvest", date: "2023-07-01", completed: false },
];

export default function GrowthTimeline() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Growth Timeline</h3>
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="mb-4 flex items-center">
            {milestone.completed ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <Circle className="h-6 w-6 text-gray-300" />
            )}
            <div className="ml-4">
              <p className="font-medium">{milestone.name}</p>
              <p className="text-sm text-gray-500">{milestone.date}</p>
            </div>
            {index < milestones.length - 1 && (
              <div
                className="absolute left-3 w-0.5 h-full bg-gray-200"
                style={{ top: "24px" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
