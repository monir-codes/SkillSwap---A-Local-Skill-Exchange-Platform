import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {
  const {setUser} = useContext(AuthContext);

const handleSignUp = (e)=>{
  e.preventDefault();
  const form = e.target
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((result)=>{
    setUser(result.user)
  })
  .catch((error)=>{
    alert(error.code)
  })

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 md:py-20">
      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Visual Sidebar for Signup */}
        <div className="w-full md:w-2/5 bg-gray-900 p-10 md:p-16 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-3xl font-black mb-4 italic">SKILLSWAP</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Join 10k+ creators swapping skills across the world.</p>
          </div>
          <div className="mt-12 md:mt-0">
            <blockquote className="text-sm font-medium text-indigo-300 italic">"The best way to learn is by teaching others."</blockquote>
          </div>
        </div>

        {/* Form Area */}
        <div className="w-full md:w-3/5 p-8 md:p-16">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 font-medium mt-1">Get started for free today.</p>
          </div>

          <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Full Name</label>
              <input name='name' type="text" placeholder="John Doe" className="w-full h-14 bg-gray-50 border-none rounded-2xl px-5 focus:ring-2 focus:ring-indigo-600/20 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Photo URL</label>
              <input name='photo' type="text" placeholder="https://..." className="w-full h-14 bg-gray-50 border-none rounded-2xl px-5 focus:ring-2 focus:ring-indigo-600/20 outline-none" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input name='email' type="email" placeholder="name@email.com" className="w-full h-14 bg-gray-50 border-none rounded-2xl px-5 focus:ring-2 focus:ring-indigo-600/20 outline-none" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Password</label>
              <input name='password' type="password" placeholder="••••••••" className="w-full h-14 bg-gray-50 border-none rounded-2xl px-5 focus:ring-2 focus:ring-indigo-600/20 outline-none" />
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-1 mt-2">1 Upper • 1 Lower • 6+ Characters</p>
            </div>

            <button className="md:col-span-2 w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] mt-4">
              Sign Up
            </button>
          </form>

          <div className="mt-8 text-center text-gray-500 font-medium">
            Already have an account? <Link to="/auth/login" className="text-indigo-600 font-black hover:underline ml-1">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;