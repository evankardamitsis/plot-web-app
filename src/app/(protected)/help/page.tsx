import { HelpCircle, Book, MessageCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Help Center</h1>

      <div className="glass-effect p-6 rounded-3xl mb-8 bg-gradient-to-br from-pink-600/50 to-rose-700/50 backdrop-blur-lg border border-white/30">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Support & Resources
        </h2>
        <p className="text-white/80">
          Find answers and get support for Plot
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-effect p-6 rounded-3xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
            <HelpCircle className="w-6 h-6" />
            FAQs
          </h2>
          <ul className="space-y-2 mt-4">
            {[
              "How do I start my virtual plot?",
              "Can I change my plot size?",
              "How often should I water my plants?",
              "What do the different icons mean?",
              "How can I track my plants' growth?",
            ].map((question, index) => (
              <li
                key={index}
                className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <a href="#" className="block text-white/80">
                  {question}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-effect p-6 rounded-3xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
            <Book className="w-6 h-6" />
            Guides
          </h2>
          <ul className="space-y-2 mt-4">
            {[
              "Getting Started with Plot",
              "Understanding Plant Care Basics",
              "Maximizing Your Virtual Garden",
              "Troubleshooting Common Issues",
              "Advanced Plot Management Techniques",
            ].map((guide, index) => (
              <li
                key={index}
                className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <a href="#" className="block text-white/80">
                  {guide}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-effect p-6 rounded-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Support</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <button className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white">
            <MessageCircle className="w-6 h-6" />
            Live Chat Support
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white">
            <Mail className="w-6 h-6" />
            Email Support
          </button>
        </div>
      </div>
    </div>
  );
}
