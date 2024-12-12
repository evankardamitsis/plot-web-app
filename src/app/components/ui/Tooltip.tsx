"use client";

import { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({ text, children, position = "bottom" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positions[position]} z-50 px-2 py-1 text-xs text-white bg-gray-900/90 rounded-lg whitespace-nowrap`}
        >
          {text}
        </div>
      )}
    </div>
  );
} 