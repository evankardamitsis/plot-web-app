'use client'

import { Leaf, Cloud, Zap, Box, ShoppingBag, FolderOpen, Users } from 'lucide-react'
import { Card } from './components/Card'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
      
      <div className="glass-effect p-6 rounded-3xl mb-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-lg border border-white/30">
        <h2 className="text-2xl font-semibold text-white mb-2">Welcome back, Gardener!</h2>
        <p className="text-white/80">Your virtual garden is thriving. Here's what's happening today:</p>
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
    </div>
  )
}

