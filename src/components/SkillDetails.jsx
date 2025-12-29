import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [skill, setSkill] = useState({});

  useEffect(() => {
    const skillFind = data.find((single) => single.skillId == id);
    if (skillFind) setSkill(skillFind);
  }, [data, id]);

  const handleBookNow = (e) => {
    e.preventDefault(); // পেজ রিফ্রেশ হওয়া আটকাবে

    // ফর্ম ডেটা নেওয়া
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    if (name && email) {
      toast.success("Session Booked Successfully!");
      form.reset(); // ফর্মের ইনপুট ক্লিয়ার করা
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Image & Description */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl mb-6">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-black mb-4">
            {skill.skillName}
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {skill.description}
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <span className="text-3xl font-black text-indigo-600">
                ${skill.price}
              </span>
              <span className="badge badge-ghost font-bold">
                {skill.slotsAvailable} Slots Left
              </span>
            </div>

            {/* Book Session Form */}
            <form onSubmit={handleBookNow} className="space-y-4">
              <div className="form-control">
                <label className="label text-sm font-bold text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full rounded-xl bg-gray-50 focus:bg-white transition-all"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full rounded-xl bg-gray-50 focus:bg-white transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl h-12 md:h-14 font-bold text-lg mt-4 shadow-lg shadow-indigo-100"
              >
                Book Session
              </button>
            </form>
            <ToastContainer position="top-center" autoClose={2000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
