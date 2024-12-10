"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sprout,
  Cloud,
  LineChart,
  ShoppingBag,
  FolderOpen,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";

const navItems = [
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
  {
    name: "My Store",
    icon: ShoppingBag,
    href: "/my-store",
    bgColor: "from-pink-600/50 to-rose-700/50",
  },
  {
    name: "Resources",
    icon: FolderOpen,
    href: "/resources",
    bgColor: "from-teal-600/50 to-emerald-700/50",
  },
  {
    name: "Community",
    icon: Users,
    href: "/community",
    bgColor: "from-indigo-600/50 to-blue-700/50",
  },
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
    <div className="w-24 flex flex-col items-center py-8 gap-8 glass-effect border-r border-white/20">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all ${
              isActive ? "bg-white/30 shadow-lg scale-110" : "hover:bg-white/20"
            }`}
          >
            <item.icon className="w-8 h-8 mb-2 text-white" />
            <span className="text-xs text-white text-center">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
