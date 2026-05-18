import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Loader2 } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    try {
      await signup({ name, email, password });
      toast.success("Account created! Please log in.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md glass-card rounded-3xl p-8 relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
            <Rocket className="text-white" size={28} />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Create Account
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Join us and start your AI journey
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#020817]/60 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition-all placeholder:text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#020817]/60 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition-all placeholder:text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#020817]/60 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition-all placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Sign Up <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}