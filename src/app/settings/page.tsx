import RemoteCareControls from "../components/RemoteCareControls";
import SensorData from "../components/SensorData";

export default function RemoteCarePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Remote Plot Care</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RemoteCareControls />
        <SensorData />
      </div>
    </div>
  );
}
