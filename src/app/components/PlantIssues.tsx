import { AlertTriangle } from "lucide-react";

const issues = [
  {
    id: 1,
    name: "Aphid Infestation",
    severity: "High",
    action: "Apply neem oil spray",
  },
  {
    id: 2,
    name: "Nutrient Deficiency",
    severity: "Medium",
    action: "Add balanced fertilizer",
  },
  {
    id: 3,
    name: "Overwatering",
    severity: "Low",
    action: "Reduce watering frequency",
  },
];

export default function PlantIssues() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Plant Issues</h3>
      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="flex items-start p-3 bg-red-50 rounded-md"
          >
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium">{issue.name}</p>
              <p className="text-sm text-gray-600">
                Severity: {issue.severity}
              </p>
              <p className="text-sm text-gray-600">Action: {issue.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
