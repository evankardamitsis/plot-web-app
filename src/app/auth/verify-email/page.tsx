"use client";

import { CheckCircle } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="glass-effect p-8 rounded-3xl text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Check Your Email</h1>
      <p className="text-white/80 mb-6">
        We've sent you an email with a verification link. Please check your
        inbox and click the link to verify your email address.
      </p>
      <div className="text-white/60 text-sm">
        Didn't receive the email? Check your spam folder or contact support.
      </div>
    </div>
  );
}
