import HeaderBg from "../../assets/images/header-bg.png";
import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="py-7 text-white overflow-hidden"
      style={{ backgroundImage: `url(${HeaderBg})`, backgroundSize: "cover" }}
    >
      <div className="max-width">
        <div className="flex flex-wrap-reverse gap-5 md:gap-0 md:flex-nowrap items-center">
          {/* Left Side */}
          <div className="w-full md:w-7/12">
            <h1 className="text-2xl md:text-xl leading-[36px] lg:text-5xl lg:leading-[64px] xl:text-[64px] font-bold xl:leading-[80px]">
              Advance Your Career with Certified UK Training
            </h1>
            <p className="text-[#A1B4C5] text-sm lg:text-base leading-7 xl:text-xl xl:leading-[30px] md:mt-5 mb-5 md:mb-10 lg:font-medium">
              Join thousands of students gaining practical skills and
              UK-recognized certifications to build a better future.
            </p>
            <button className="bg-[#FF6600] text-white text-sm lg:text-base font-semibold px-6 lg:px-8 py-2.5 lg:py-4 rounded-[38px]">
              Book a Call
            </button>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-[30px] mt-5 md:mt-[50px] lg:mt-[100px] xl:pr-[70px]">
              <div className="flex flex-col">
                <p className="border-l border-white/70 text-white/60 leading-6 pl-4 py-1 text-sm xl:text-base">
                  UK-trusted for career-focused training.
                </p>
                <span className="text-white font-semibold text-xl lg:text-3xl xl:text-[40px] pl-4 border-l border-white/10 py-1">
                  10+ Years
                </span>
              </div>
              <div className="flex flex-col">
                <p className="border-l border-white/10 text-white/60 leading-6 pl-4 py-1 text-sm xl:text-base">
                  Trained thousands across the UK.
                </p>
                <span className="text-white font-semibold text-xl lg:text-3xl xl:text-[40px] pl-4 border-l border-white/70 py-1">
                  4,500+
                </span>
              </div>
              <div className="flex flex-col">
                <p className="border-l border-white/70 text-white/60 leading-6 pl-4 py-1 text-sm xl:text-base">
                  Government-approved certificates.
                </p>
                <span className="text-white font-semibold text-xl lg:text-3xl xl:text-[40px] pl-4 border-l border-white/10 py-1">
                  100%
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-5/12">
            <div className="relative">
              <img
                src={HeroImg}
                alt="Student"
                className="w-full h-[340px] sm:h-[400px] lg:h-[600px] xl:h-[740px] object-contain object-bottom md:object-cover mx-auto relative z-[2]"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[316px] sm:size-[336px] lg:size-[536px] xl:size-[676px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15)_0%,rgba(16,65,107,0.15)_100%)] rounded-full flex items-center justify-center">
                <span className="block size-[65%] rounded-full bg-[#0B1A56]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
