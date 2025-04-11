import GrowthTimeline from "../components/GrowthTimeline";
import PlantIssues from "../components/PlantIssues";

export default function GrowthTrackingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Growth Progress Tracking
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GrowthTimeline />
        <PlantIssues />
      </div>
    </div>
  );
}
