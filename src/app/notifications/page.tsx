import { HelpCircle, Book, MessageCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 text-white">
      <div className="glass-effect p-8">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-white/80">Find answers and get support for Plot</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-effect p-8 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <HelpCircle className="w-6 h-6" />
            FAQs
          </h2>
          <ul className="space-y-2">
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
                <a href="#" className="block">
                  {question}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-effect p-8 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Book className="w-6 h-6" />
            Guides
          </h2>
          <ul className="space-y-2">
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
                <a href="#" className="block">
                  {guide}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-effect p-8 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <button className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <MessageCircle className="w-6 h-6" />
            Live Chat Support
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <Mail className="w-6 h-6" />
            Email Support
          </button>
        </div>
      </div>
    </div>
  );
}
