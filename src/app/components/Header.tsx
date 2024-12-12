"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Bell, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Tooltip from "./ui/Tooltip";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const iconButtonClasses = "w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:bg-white/10 group";
  const iconClasses = "w-5 h-5 text-white/80 transition-colors group-hover:text-white";

  return (
    <header className="flex justify-end items-center space-x-3 mb-6">
      <Tooltip text="Notifications">
        <Link
          href="/notifications"
          className={iconButtonClasses}
        >
          <Bell className={iconClasses} />
        </Link>
      </Tooltip>
      
      <div className="relative" ref={dropdownRef}>
        <Tooltip text="Account Menu">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={iconButtonClasses}
          >
            <User className={iconClasses} />
          </button>
        </Tooltip>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg glass-effect border border-white/10">
            <div className="py-1">
              <Link
                href="/account"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Account Details
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
