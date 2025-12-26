import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "hover:text-primary transition"}>Home</NavLink></li>
      {user && <li><NavLink to="/profile" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "hover:text-primary transition"}>My Profile</NavLink></li>}
    </>
  );

  return (
<div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-12 border-b border-gray-100">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            <li><Link to="/">Home</Link></li>
            {user && <li><Link to="/profile">My Profile</Link></li>}
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl font-black text-indigo-600 tracking-tighter">
          SKILL<span className="text-gray-800">SWAP</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
          <li><Link to="/">Home</Link></li>
          {user && <li><Link to="/profile">My Profile</Link></li>}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="w-10 h-10 rounded-full ring ring-indigo-500 overflow-hidden shadow-md">
            <img src={user.photoURL} alt="avatar" />
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm md:btn-md px-6 rounded-full shadow-lg">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;