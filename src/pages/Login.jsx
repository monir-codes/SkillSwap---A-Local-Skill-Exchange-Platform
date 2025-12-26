import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
      <div className="w-full max-w-[450px] relative p-5">
        {/* Background Glows */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>

        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 md:p-14 rounded-[2.5rem] shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">Welcome Back</h2>
            <p className="text-slate-400 font-medium">Please enter your details</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full h-14 bg-slate-800/50 border border-slate-700 rounded-2xl px-5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-sm font-semibold text-slate-300">Password</label>
                <button type="button" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</button>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full h-14 bg-slate-800/50 border border-slate-700 rounded-2xl px-5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500" 
              />
            </div>

            <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98] mt-4">
              Sign In
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-800"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#1e293b] px-4 text-slate-500 font-bold tracking-widest">Or continue with</span></div>
          </div>

          <button className="w-full h-14 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
            <FcGoogle size={24} />
            Google
          </button>

          <p className="text-center mt-10 text-slate-400 font-medium">
            New here? <Link to="/signup" className="text-white font-bold hover:underline ml-1">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;