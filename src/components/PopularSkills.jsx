import SkillCard from "./SkillCard";

const PopularSkills = ({ skills }) => {
  // ১. সেফটি চেক: যদি ডাটা লোড না হয় বা ভুল আসে তবে যেন সাইট ক্র্যাশ না করে
  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Explore Popular <span className="text-indigo-600 ">Skills</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg text-md sm:text-lg">
            Join thousands of learners and start swapping skills with top-rated experts.
          </p>
        </div>
        
        <button className="hidden md:inline-flex btn btn-ghost text-indigo-600 font-bold text-lg hover:bg-indigo-50 px-6 rounded-full transition-all">
          View All Skills 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      {/* Responsive Grid System:
         - grid-cols-1: মোবাইলে ১টি কার্ড
         - md:grid-cols-2: ট্যাবলেটে ২টিকে পাশাপাশি
         - lg:grid-cols-3: বড় স্ক্রিনে ৩টিকে পাশাপাশি
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {skills.slice(0, 6).map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>

      {/* মোবাইলের জন্য আলাদা "View All" বাটন */}
      <div className="mt-12 md:hidden flex justify-center">
        <button className="btn btn-primary btn-wide rounded-full shadow-lg shadow-indigo-200">
          See All Skills
        </button>
      </div>
    </section>
  );
};

export default PopularSkills;