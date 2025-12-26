import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-800 tracking-tight">Create Account</h2>
          <p className="text-gray-500 mt-2 font-medium">Join our community of skill swappers</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-bold text-gray-700">Full Name</label>
            <input type="text" placeholder="John Doe" className="input input-bordered rounded-2xl h-14 bg-gray-50 border-gray-200" required />
          </div>

          <div className="form-control">
            <label className="label font-bold text-gray-700">Photo URL</label>
            <input type="text" placeholder="https://image-link.com" className="input input-bordered rounded-2xl h-14 bg-gray-50 border-gray-200" required />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-bold text-gray-700">Email Address</label>
            <input type="email" placeholder="name@company.com" className="input input-bordered rounded-2xl h-14 bg-gray-50 border-gray-200" required />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-bold text-gray-700">Create Password</label>
            <input type="password" placeholder="Min. 6 characters" className="input input-bordered rounded-2xl h-14 bg-gray-50 border-gray-200" required />
            <p className="text-[10px] mt-2 text-gray-400 font-medium px-1 uppercase tracking-wider">Must include uppercase, lowercase and 6+ characters</p>
          </div>

          <button className="md:col-span-2 btn btn-primary w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-indigo-100 border-none bg-indigo-600 hover:bg-indigo-700 mt-4 transition-all">
            Register Account
          </button>
        </form>

        <div className="divider my-10 font-bold text-gray-400 text-xs tracking-widest uppercase">Or Signup With</div>

        <button className="btn btn-outline w-full h-14 rounded-2xl border-gray-200 hover:bg-gray-50 hover:text-gray-800 gap-3 font-bold transition-all">
          <FaGoogle className="text-red-500 text-xl" /> Google Account
        </button>

        <p className="text-center mt-10 text-gray-600 font-medium">
          Already a member? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;