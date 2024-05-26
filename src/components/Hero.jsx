import heroimg from "../assets/images/5.webp";

const Hero = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-auto scrollbar-hide">
      <div className="relative inset-0 h-screen w-screen flex items-center justify-center">
        <img
          src={heroimg}
          alt="Hero Image 1"
          className="object-cover w-full h-full absolute"
        />
        <div className="absolute inset-x-0 top-3/4 text-white text-center transform -translate-y-1/2 z-[70]">
          <h1 className="text-6xl font-bold">SpectoV</h1>
          <p className="text-xl">SUM MORE TEXX</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
