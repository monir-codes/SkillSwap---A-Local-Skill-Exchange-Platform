
import { Search, Monitor, Briefcase, Award, Clock, BookOpen, Users, Smartphone, Star } from 'lucide-react';
import Hero from '../components/Hero';
import PopularSkills from '../components/PopularSkills';
import { useLoaderData } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import TopProviders from '../components/TopProviders';

const Home = () => {
  const skills = useLoaderData()


  return (
    <div className="min-h-screen bg-[#FDF8EE] font-sans overflow-x-hidden">
      

      {/* Hero Section */}
      <Hero></Hero>

      {/* popular skills */}
      <PopularSkills skills={skills}></PopularSkills>

      {/* how it works  */}
      <HowItWorks></HowItWorks>

      {/* top rated providers */}
        <TopProviders></TopProviders>
      

    </div>
  );
};

export default Home;