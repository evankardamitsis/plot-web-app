"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/contexts/AuthContext";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";
import { Eye, EyeOff } from "lucide-react";
import { useNotification } from "@/app/contexts/NotificationContext";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signUp } = useAuth();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      const errorMessage = "Password must be at least 6 characters long";
      setError(errorMessage);
      showNotification(errorMessage, "error");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await signUp(email, password);
      showNotification(
        "Account created successfully! Please check your email to verify your account.",
        "success"
      );
    } catch (error: any) {
      console.error("Signup error:", error);
      const errorMessage = error.message || "An error occurred during signup";
      setError(errorMessage);
      showNotification(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-effect p-8 rounded-3xl">
      <h1 className="text-3xl font-bold text-white mb-6">Create Account</h1>
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 text-red-200">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white/80 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/30 text-white"
            required
            disabled={loading}
          />
        </div>
        <div>
          <label className="block text-white/80 mb-1">Password</label>
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
          <p className="text-sm text-white/60 mt-1">
            Must be at least 6 characters long
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-rose-700 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-white/60 text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-white hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
