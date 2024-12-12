"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/contexts/AuthContext";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await signUp(email, password);
    } catch (error: any) {
      console.error("Signup error:", error);
      setError(error.message || "An error occurred during signup");
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/30 text-white"
            required
            disabled={loading}
          />
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
