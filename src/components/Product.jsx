
import SplineEmbed from "./SplineEmbed.jsx";
function Product() {
  return (
    <div className="relative h-screen w-screen flex items-center overflow-x-hidden">
      <div className="object-cover w-full h-full absolute bg-black hidden"></div>
      <SplineEmbed className="object-cover w-full h-full absolute"/>
      <div className="absolute text-white ml-10 lg:ml-40 z-[70]">
        <h1 className="text-8xl font-bold">DefXV</h1>
        <p className="text-2xl">Our product blah blah blah</p>
        <button
          className="
        box-border
        bg-white 
        py-2 
        px-8 
        rounded-xl 
        text-black 
        text-xl 
        mt-10  
        hover:bg-[#000000bc]
        hover:text-white
        hover:border-white 
        hover:border-solid
        hover:border-2
        transition-all 
        duration-500"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Product;
