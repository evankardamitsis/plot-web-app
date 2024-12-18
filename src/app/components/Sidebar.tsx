"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sprout,
  Cloud,
  LineChart,
  Settings,
  HelpCircle,
} from "lucide-react";
import Tooltip from "./ui/Tooltip";

const mainNavItems = [
  {
    name: "Home",
    icon: Home,
    href: "/",
    bgColor: "from-purple-600/50 to-indigo-700/50",
  },
  {
    name: "Virtual Plot",
    icon: Sprout,
    href: "/virtual-plot",
    bgColor: "from-green-600/50 to-teal-700/50",
  },
  {
    name: "Remote Care",
    icon: Cloud,
    href: "/remote-care",
    bgColor: "from-blue-600/50 to-cyan-700/50",
  },
  {
    name: "Growth Tracking",
    icon: LineChart,
    href: "/growth-tracking",
    bgColor: "from-orange-600/50 to-amber-700/50",
  },
];

const utilityNavItems = [
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
    bgColor: "from-gray-600/50 to-gray-700/50",
  },
  {
    name: "Help",
    icon: HelpCircle,
    href: "/help",
    bgColor: "from-pink-600/50 to-rose-700/50",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-4 top-4 bottom-4 z-10">
      <div className="w-20 h-full flex flex-col items-center py-8 px-4 glass-effect rounded-3xl border border-white/20">
        {/* Main navigation items */}
        <div className="flex-1 flex flex-col gap-8">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Tooltip key={item.name} text={item.name} position="right">
                <Link
                  href={item.href}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
                    isActive
                      ? "bg-white/30 shadow-lg scale-110"
                      : "hover:bg-white/20"
                  }`}
                >
                  <item.icon size={24} className="text-white" />
                </Link>
              </Tooltip>
            );
          })}
        </div>

        {/* Utility navigation items */}
        <div className="flex flex-col gap-6 mt-auto">
          {utilityNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Tooltip key={item.name} text={item.name} position="right">
                <Link
                  href={item.href}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                    isActive
                      ? "bg-white/30 shadow-lg scale-105"
                      : "hover:bg-white/20"
                  }`}
                >
                  <item.icon size={20} className="text-white" />
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}
