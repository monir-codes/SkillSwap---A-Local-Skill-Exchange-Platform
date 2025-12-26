import React from 'react';

const Login = () => {
    return (
<div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-800">Welcome Back</h1>
          <p className="text-gray-400 mt-2 font-medium">Please enter your details</p>
        </div>
        <form className="space-y-5">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Email Address</label>
            <input type="email" placeholder="name@company.com" className="input input-bordered bg-gray-50 focus:bg-white transition-all rounded-xl" required />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Password</label>
            <input type="password" placeholder="••••••••" className="input input-bordered bg-gray-50 focus:bg-white transition-all rounded-xl" required />
            <label className="label mt-1">
              <span className="label-text-alt link link-primary no-underline font-medium">Forgot Password?</span>
            </label>
          </div>
          <button className="btn btn-primary w-full rounded-xl text-lg font-bold shadow-lg shadow-indigo-200">Sign In</button>
        </form>
        <p className="text-center mt-8 text-gray-600">
          Don't have an account? <span className="text-indigo-600 font-bold cursor-pointer">Sign up free</span>
        </p>
      </div>
    </div>
    );
};

export default Login;