import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Desktop Only Visuals */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10 text-white max-w-md">
          <h1 className="text-5xl font-black leading-tight mb-6">Master New Skills with Ease.</h1>
          <p className="text-indigo-100 text-lg font-medium opacity-80 leading-relaxed">
            Join the global community of learners and experts. Your journey to excellence starts here.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:px-20 bg-gray-50 md:bg-white">
        <div className="max-w-md w-full">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">Sign In</h2>
            <p className="text-gray-500 font-medium">Log in to your SkillSwap account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <button className="text-sm font-bold text-indigo-600 hover:underline">Forgot?</button>
              </div>
              <input type="password" placeholder="••••••••" className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none" />
            </div>

            <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] mt-4">
              Login to Account
            </button>
          </form>

          <div className="divider my-10 text-gray-400 text-xs font-bold tracking-widest uppercase">Or Continue With</div>

          <button className="w-full h-14 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
            <FcGoogle size={24} />
            Continue with Google
          </button>

          <p className="text-center mt-10 text-gray-500 font-medium">
            New here? <Link to="/auth/signup" className="text-indigo-600 font-bold hover:underline ml-1">Create free account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;