"use client";

import {
  Leaf,
  Cloud,
  Zap,
  Box,
  ShoppingBag,

  FolderOpen,
  Users,
} from "lucide-react";
import { Card } from "./components/Card";
import { useAuth } from './contexts/AuthContext'
import Link from 'next/link'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Home</h1>

      <div className="glass-effect p-6 rounded-3xl mb-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-lg border border-white/30">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Welcome back, Gardener!
        </h2>
        <p className="text-white/80">
          Your virtual garden is thriving. Here's what's happening today:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-3">
          <Card
            title="Plants Health"
            subtitle="4 plants need attention. Your tomatoes are showing signs of growth, while the basil needs more water. The roses are blooming beautifully, and the sunflowers are reaching for the sky!"
            icon={<Leaf className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-emerald-500/30 to-green-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-3">
          <Card
            title="Remote Care"
            subtitle="All systems are operating normally. The automated watering system is scheduled for tomorrow morning. Temperature and humidity levels are within optimal ranges for all your plants."
            icon={<Cloud className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-blue-500/30 to-cyan-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-2">
          <Card
            title="Performance"
            subtitle="Growth on track"
            icon={<Zap className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-yellow-500/30 to-orange-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-2">
          <Card
            title="Plot Overview"
            subtitle="2 sections need watering"
            icon={<Box className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-purple-500/30 to-indigo-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-2">
          <Card
            title="My Store"
            subtitle="3 items in your cart. New organic fertilizers and rare seed varieties are now in stock! Check out our weekly deals on gardening tools."
            icon={<ShoppingBag className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-pink-500/30 to-rose-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-3">
          <Card
            title="Resources"
            subtitle="5 new gardening tips available. Learn about companion planting, natural pest control, and maximizing your harvest. Our latest video tutorial on pruning techniques is now live!"
            icon={<FolderOpen className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-teal-500/30 to-emerald-500/30"
            showReview={true}
          />
        </div>

        <div className="md:col-span-3">
          <Card
            title="Community"
            subtitle="2 new messages in your inbox. The community forum is buzzing with discussions about seasonal planting and urban gardening techniques. Join the conversation and share your experiences!"
            icon={<Users className="w-8 h-8" />}
            gradient="bg-gradient-to-br from-indigo-500/30 to-blue-500/30"
            showReview={true}
          />
        </div>
      </div>

      <div className="glass-card p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Plot</h1>
        <p className="text-gray-300 mb-6">
          Your personal garden assistant to help you track, manage, and grow your plants.
        </p>
        {!user ? (
          <div className="space-y-4">
            <p className="text-gray-300">
              Get started by creating an account or signing in.
            </p>
            <div className="flex gap-4">
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-300">
              Welcome back, {user.email}! Let&apos;s check on your garden.
            </p>
            <Link
              href="/virtual-plot"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Go to Virtual Plot
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
