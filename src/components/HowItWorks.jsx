import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Discover Skills",
      description: "Browse our vast collection of expert-led skill sessions across various categories.",
      icon: "🔍",
      color: "bg-blue-100"
    },
    {
      id: 2,
      title: "Book a Session",
      description: "Pick a time that fits your schedule and book a slot with your preferred mentor.",
      icon: "📅",
      color: "bg-indigo-100"
    },
    {
      id: 3,
      title: "Start Learning",
      description: "Join the live session and start your journey towards mastering a new skill.",
      icon: "🚀",
      color: "bg-emerald-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 rounded-[3rem] px-6 my-16 border border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900">
          How It <span className="text-indigo-600">Works</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
          Mastering a new skill is just three simple steps away. Start your journey today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="relative group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg">
              0{step.id}
            </div>
            
            <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
              {step.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default HowItWorks;