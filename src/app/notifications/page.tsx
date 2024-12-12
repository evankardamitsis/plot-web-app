import { Bell, AlertCircle, CheckCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "alert",
    message: "Water levels low in Section 2",
    icon: AlertCircle,
  },
  {
    id: 2,
    type: "info",
    message: "Tomatoes ready for harvest",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "alert",
    message: "Pest detected in Section 1",
    icon: AlertCircle,
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <div className="glass-effect p-6 rounded-3xl">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start p-3 bg-white/10 rounded-lg"
            >
              <notification.icon
                className={`w-5 h-5 mr-3 ${
                  notification.type === "alert"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              />
              <span>{notification.message}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center">
          <Bell className="w-4 h-4 mr-2" />
          Mark All as Read
        </button>
      </div>
    </div>
  );
}
