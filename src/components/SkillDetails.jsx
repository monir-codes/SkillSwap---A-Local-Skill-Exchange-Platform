import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SkillDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [skill, setSkill] = useState({})

    useEffect(()=>{
        const skillFind = data.find((single) => single.skillId == id);
        setSkill(skillFind)
    }, [])


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* lg:grid-cols-12 মানে বড় স্ক্রিনে ১২ কলামের গ্রিড */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Image & Description: মোবাইলে ১ নাম্বার পজিশনে */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl mb-6">
            <img src={skill.image} className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover" />
          </div>
          <h1 className="text-2xl md:text-4xl font-black mb-4">{skill.skillName}</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{skill.description}</p>
        </div>

        {/* Booking Form Card: মোবাইলে ইমেজের নিচে চলে আসবে */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <span className="text-3xl font-black text-indigo-600">${skill.price}</span>
              <span className="badge badge-ghost font-bold">{skill.slotsAvailable} Slots Left</span>
            </div>
            {/* ... Form input fields ... */}
            <button className="btn btn-primary w-full rounded-xl h-12 md:h-14 font-bold text-lg">Book Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillDetails;