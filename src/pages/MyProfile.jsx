import { useContext, useState } from "react";
import { FaUserEdit, FaEnvelope, FaUser, FaLink, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    try {
      await updateUserProfile(name, photo);
      
      // Manually updating the state so UI reflects changes immediately
      setUser({ ...user, displayName: name, photoURL: photo });
      
      toast.success("Profile updated successfully!");
      setIsEditing(false); // ফর্ম বন্ধ করে প্রোফাইল ভিউতে ফিরে যাওয়া
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative bg-white border border-gray-100 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500">
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

          <div className="px-8 pb-10 text-center">
            {/* User Image Area */}
            <div className="relative -mt-16 mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                <img 
                  src={user?.photoURL || "https://i.ibb.co/default-avatar.png"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {!isEditing ? (
              /* --- Profile View Mode --- */
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-3xl font-black text-gray-900">{user?.displayName || "Anonymous User"}</h2>
                <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest">Community Member</p>
                
                <div className="divider opacity-50"></div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <FaUser className="text-indigo-600" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Full Name</p>
                      <p className="text-gray-800 font-bold">{user?.displayName || "Not Set"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <FaEnvelope className="text-indigo-600" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Email Address</p>
                      <p className="text-gray-800 font-bold">{user?.email}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary w-full h-14 rounded-2xl bg-indigo-600 border-none hover:bg-indigo-700 text-white font-bold text-lg mt-6 shadow-xl shadow-indigo-100"
                >
                  <FaUserEdit className="mr-2" /> Update Profile
                </button>
              </div>
            ) : (
              /* --- Edit Form Mode --- */
              <form onSubmit={handleUpdate} className="space-y-5 animate-slideUp">
                <h3 className="text-xl font-black text-gray-800">Edit Information</h3>
                
                <div className="text-left space-y-1">
                  <label className="text-xs font-bold text-gray-500 ml-2">Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-gray-400" />
                    <input name="name" type="text" defaultValue={user?.displayName} className="w-full h-12 bg-gray-50 rounded-xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 border border-gray-100" required />
                  </div>
                </div>

                <div className="text-left space-y-1">
                  <label className="text-xs font-bold text-gray-500 ml-2">Photo URL</label>
                  <div className="relative">
                    <FaLink className="absolute left-4 top-4 text-gray-400" />
                    <input name="photo" type="text" defaultValue={user?.photoURL} className="w-full h-12 bg-gray-50 rounded-xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 border border-gray-100" required />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setIsEditing(false)} className="btn flex-1 h-12 rounded-xl border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-bold capitalize">
                    Cancel
                  </button>
                  <button type="submit" className="btn flex-1 h-12 rounded-xl bg-indigo-600 border-none hover:bg-indigo-700 text-white font-bold capitalize shadow-lg shadow-indigo-100">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;