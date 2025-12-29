import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { loading, user} = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || user?.email || "")

  const handleReset = (e) => {
    e.preventDefault();
    // const emailField = e.target.email.value;
    if (!email) {
      toast.error("Please enter your email address first!");
      return;
    }
 
    return sendPasswordResetEmail(auth, email).then(()=>{
      toast.success("Password reset email sent!");
      window.open("https://mail.google.com", "_blank");
    }).catch((e)=>{
      toast.error(e.code)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-[450px] w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
        
        {/* Decorative Top Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
             <FaEnvelope size={35} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Forgot Password?</h2>
          <p className="text-gray-500 font-medium mt-3">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <div className="form-control">
            <label className="label text-sm font-bold text-gray-700 ml-1">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-5 top-5 text-gray-400" />
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                className="input input-bordered w-full h-14 rounded-2xl bg-gray-50 focus:bg-white border-gray-200 focus:border-indigo-600 transition-all pl-6 pr-5" 
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full h-14 rounded-2xl bg-indigo-600 border-none hover:bg-indigo-700 text-white font-bold text-lg shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link 
            to="/auth/login" 
            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;