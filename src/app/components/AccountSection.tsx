import { User, Mail, Phone } from "lucide-react";

export function AccountSection() {
  return (
    <div className="glass-effect p-6 rounded-3xl">
      <h2 className="text-2xl font-semibold mb-4">Account</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <User className="w-5 h-5 mr-3" />
          <span>John Doe</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-3" />
          <span>johndoe@example.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-3" />
          <span>+1 (555) 123-4567</span>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
        Edit Profile
      </button>
    </div>
  );
}
