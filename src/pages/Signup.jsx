import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function Signup() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = () => {

    toast.success(
      "Account created"
    );

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 mb-8">
          Signup to continue
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-[#020817] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-[#020817] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all"
          >
            Signup
          </button>

        </div>

      </div>

    </div>
  );
}