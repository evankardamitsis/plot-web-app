import { User, Mail, Phone, Edit } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Account</h1>
      <div className="glass-effect p-6 rounded-3xl">
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
        <button className="mt-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
      </div>
    </div>
  )
}

