"use client";

import Link from "next/link";
import { User, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="glass-effect p-4 flex justify-end items-center space-x-4">
      <Link href="/account" className="glass-icon">
        <User className="w-6 h-6 text-white" />
      </Link>
      <Link href="/notifications" className="glass-icon">
        <Bell className="w-6 h-6 text-white" />
      </Link>
    </header>
  );
}
