import { FaUsers, FaExchangeAlt, FaAward, FaLightbulb } from "react-icons/fa";

const CommunityStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers size={30} />,
      count: "15,000+",
      label: "Active Swappers",
      desc: "Connect with learners worldwide."
    },
    {
      id: 2,
      icon: <FaExchangeAlt size={30} />,
      count: "45k+",
      label: "Successful Swaps",
      desc: "Skills shared across borders."
    },
    {
      id: 3,
      icon: <FaAward size={30} />,
      count: "120+",
      label: "Expert Categories",
      desc: "From Coding to Cooking."
    },
    {
      id: 4,
      icon: <FaLightbulb size={30} />,
      count: "24/7",
      label: "Live Learning",
      desc: "Knowledge has no time limit."
    }
  ];

  return (
    <div className="py-24 bg-white overflow-hidden relative">
      {/* Background blur decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            The World is Your <span className="text-indigo-600 ">Classroom</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Join a thriving ecosystem where knowledge is the only currency that matters. 
            Teach what you love, learn what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div 
              key={item.id} 
              className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">{item.count}</h3>
              <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3">
                {item.label}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Inside Section */}
        <div className="mt-20 p-10 bg-gray-900 rounded-[3rem] text-center md:flex items-center justify-between">
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to trade your talent?</h3>
            <p className="text-gray-400">Sign up today and start your first skill exchange.</p>
          </div>
          <button className="btn btn-primary h-14 px-10 rounded-2xl bg-indigo-600 border-none hover:bg-indigo-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;