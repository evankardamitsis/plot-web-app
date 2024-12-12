"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import { useNotification } from "@/app/contexts/NotificationContext";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      showNotification("Passwords do not match", "error");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      showNotification("Password must be at least 6 characters long", "error");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      showNotification("Password has been reset successfully", "success");
      router.push("/auth/login");
    } catch (error: any) {
      console.error("Reset password error:", error);
      const errorMessage = error.message || "An error occurred while resetting password";
      setError(errorMessage);
      showNotification(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-effect p-8 rounded-3xl">
      <h1 className="text-3xl font-bold text-white mb-6">Reset Password</h1>
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 text-red-200">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white/80 mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/10 border border-white/30 text-white pr-10"
              required
              disabled={loading}
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div>
          <label className="block text-white/80 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/10 border border-white/30 text-white pr-10"
              required
              disabled={loading}
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-rose-700 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Reset Password"}
        </button>
      </form>
    </div>
  );
} 