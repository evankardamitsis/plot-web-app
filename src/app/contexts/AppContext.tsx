"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type AppContextType = {
  activeBgColor: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [activeBgColor, setActiveBgColor] = useState(
    "from-purple-600 to-indigo-700"
  );
  const pathname = usePathname();

  useEffect(() => {
    const navItem = navItems.find((item) => item.href === pathname);
    if (navItem) {
      setActiveBgColor(navItem.bgColor);
    }
  }, [pathname]);

  return (
    <AppContext.Provider value={{ activeBgColor }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

const navItems = [
  {
    name: "Smart Care",
    icon: "Monitor",
    href: "/",
    bgColor: "from-purple-600 to-indigo-700",
  },
  {
    name: "Virtual Plot",
    icon: "Sprout",
    href: "/virtual-plot",
    bgColor: "from-green-600 to-teal-700",
  },
  {
    name: "Remote Care",
    icon: "Cloud",
    href: "/remote-care",
    bgColor: "from-blue-600 to-cyan-700",
  },
  {
    name: "Growth Tracking",
    icon: "LineChart",
    href: "/growth-tracking",
    bgColor: "from-orange-600 to-amber-700",
  },
  {
    name: "Settings",
    icon: "Settings",
    href: "/settings",
    bgColor: "from-gray-600 to-gray-700",
  },
  {
    name: "Help",
    icon: "HelpCircle",
    href: "/help",
    bgColor: "from-pink-600 to-rose-700",
  },
];
