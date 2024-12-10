import Link from "next/link";

interface CardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  showReview?: boolean;
}

export function Card({
  title,
  subtitle,
  icon,
  gradient,
  showReview = false,
}: CardProps) {
  return (
    <div className={`relative overflow-hidden ${gradient} rounded-3xl h-full`}>
      <div className="absolute inset-0 backdrop-blur-md bg-white/10"></div>
      <div className="relative z-10 p-6 border border-white/20 rounded-3xl h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="glass-icon text-white">{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/80 mb-4 flex-grow">{subtitle}</p>
        {showReview && (
          <Link
            href={`/${title.toLowerCase().replace(" ", "-")}`}
            className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-white text-sm mt-auto"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
}
