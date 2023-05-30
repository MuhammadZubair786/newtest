import React from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="">
      <section className="text-black pt-9  body-font bg-green-500  max-w-full max-h-96">
      
      <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center   ">
        
        <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
         
         
          <p className="mb-1 leading-relaxed sm:text-2xl font-bold text-2xl">
            WELCOME TO STORE YOUR STOCK{" "}
          </p>
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
            ONE STOP SOLUTION 
            <br className="hidden lg:inline-block" />
            FOR KEEPING YOUR GOODS
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
          Rent out any space from your home, garage or any place you like. It's easy money!
          </p>
          <div className="flex justify-center">
            <a href="contactus"> 
              <button className="inline-flex  bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
              CONTACT US
            </button>
            </a>
            <a href="aboutus">
            <button className="ml-4 inline-flex text-black bg-white border-1 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
              KNOW US MORE
            </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover max-h-80 object-center rounded"
            alt="hero"
            src="https://cdn.pixabay.com/photo/2016/03/31/17/53/color-1293979_960_720.png"
          />
        </div>
      </div>
    </section>
      </div>
    </>
  );
};
