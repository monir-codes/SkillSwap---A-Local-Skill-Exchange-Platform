import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const provider = new GoogleAuthProvider()
  const [showEye, setShowEye] = useState(false)
  const [email, setEmail] = useState("")
  
  
  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch((e)=>{
      toast.error(e.code)
    })
  }

  const handleGoogleLogin = ()=>{
    return signInWithPopup(auth, provider)
    .then(()=>{
       navigate(`${location.state ? location.state : "/"}`)
    })
    .catch((error)=>{
      toast.error(error)
    })
  }

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

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <input name="email" type="email" placeholder="name@company.com" onChange={(e)=> setEmail(e.target.value)} className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none" required/>
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
             
              </div>
              <input name="password" type={showEye ? "text" : "password"} placeholder="••••••••" className="w-full h-14 bg-white border border-gray-200 rounded-2xl px-5 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none" required/>
              <span onClick={()=> setShowEye(!showEye)} className='absolute right-4 top-11 cursor-pointer'>
             {
               showEye ? <Eye /> : <EyeClosed />  
               }
               </span>
            </div>
                <Link state={{email: email}} to={"/auth/forget"} className="text-sm font-bold text-indigo-600 hover:underline text-center p-2">Forgot Password?</Link>

            <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] mt-4">
              Login to Account
            </button>
            <ToastContainer></ToastContainer>
  
          </form>

          <div className="divider my-10 text-gray-400 text-xs font-bold tracking-widest uppercase">Or Continue With</div>

          <button onClick={handleGoogleLogin} className="w-full h-14 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
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