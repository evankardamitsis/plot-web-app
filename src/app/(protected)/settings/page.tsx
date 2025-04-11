"use client";

import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 text-white">
      <div className="glass-effect p-8">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-white/80">Customize your Plot experience</p>
      </div>

      <div className="glass-effect p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="notifications"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Notification Preferences
            </label>
            <select
              id="notifications"
              name="notifications"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option>All notifications</option>
              <option>Important only</option>
              <option>None</option>
            </select>
          </div>
        </div>
      </div>

      <div className="glass-effect p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Plot Settings</h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="plotSize"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Plot Size
            </label>
            <select
              id="plotSize"
              name="plotSize"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option>Small (4x4)</option>
              <option>Medium (6x6)</option>
              <option>Large (8x8)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="climate"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Climate Zone
            </label>
            <input
              type="text"
              id="climate"
              name="climate"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
            />
          </div>
        </div>
      </div>

      <button className="glass-effect px-6 py-3 flex items-center justify-center gap-2 text-white font-semibold w-full">
        <Save className="w-5 h-5" />
        Save Settings
      </button>
    </div>
  );
}
