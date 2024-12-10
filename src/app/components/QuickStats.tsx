import { Droplet, Sun, Shovel, Calendar } from "lucide-react";

const stats = [
  { name: "Soil Health", value: "85%", icon: Shovel },
  { name: "Growth Progress", value: "60%", icon: Sun },
  { name: "Next Watering", value: "In 2 days", icon: Droplet },
  { name: "Upcoming Tasks", value: "3", icon: Calendar },
];

export default function QuickStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex items-center p-3 bg-green-50 rounded-md"
          >
            <stat.icon className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-lg font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
