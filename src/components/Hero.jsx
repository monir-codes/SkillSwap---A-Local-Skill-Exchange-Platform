import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
      title: "Master Any Skill with Ease",
      sub: "Connect with expert mentors and level up your career today."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070",
      title: "Learn From the Best Providers",
      sub: "Hand-picked experts to ensure the highest quality of learning."
    }
  ];

  return (
    <div className="mt-4 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-[400px] md:h-[550px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col items-start justify-center text-white px-10 md:px-20">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">{slide.title}</h1>
                <p className="text-md sm:text-lg md:text-xl mb-8 opacity-80 max-w-lg">{slide.sub}</p>
                <button className="btn btn-primary btn-lg rounded-full px-10 shadow-xl border-none">Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;