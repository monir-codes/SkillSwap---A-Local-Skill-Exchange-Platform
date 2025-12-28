import React from 'react';

const TopProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Alex Martin",
      skill: "Guitarist",
      rating: 4.9,
      students: 120,
      image: "https://i.pravatar.cc/150?u=alex"
    },
    {
      id: 2,
      name: "Sara Hossain",
      skill: "Linguist",
      rating: 4.8,
      students: 85,
      image: "https://i.pravatar.cc/150?u=sara"
    },
    {
      id: 3,
      name: "John Doe",
      skill: "Web Developer",
      rating: 4.9,
      students: 210,
      image: "https://i.pravatar.cc/150?u=john"
    },
    {
      id: 4,
      name: "Emily Rose",
      skill: "Marketer",
      rating: 4.7,
      students: 95,
      image: "https://i.pravatar.cc/150?u=emily"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Top Rated <span className="text-indigo-600">Providers</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Learn from the most experienced mentors in the community.</p>
        </div>
        <button className="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:border-indigo-600 rounded-full px-8">
          Meet All Mentors
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {providers.map((p) => (
          <div key={p.id} className="flex flex-col items-center bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-lg transition-all group">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full ring-4 ring-indigo-50 ring-offset-4 overflow-hidden group-hover:ring-indigo-100 transition-all">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 bg-white shadow-md rounded-full p-2 flex items-center gap-1">
                <span className="text-orange-400 text-sm">★</span>
                <span className="text-xs font-bold">{p.rating}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
            <p className="text-indigo-600 font-semibold text-sm mb-4">{p.skill}</p>
            
            <div className="flex gap-4 text-xs font-medium text-gray-400 border-t pt-4 w-full justify-center">
              <span>{p.students} Students</span>
              <span>•</span>
              <span>12 Courses</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default TopProviders;