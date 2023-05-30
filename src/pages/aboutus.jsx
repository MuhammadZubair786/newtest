import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import React
 from "react";
export const AboutUs = () => {
    return (
        <>
        <div>
<section class="text-gray-600 body-font bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">ABOUT US </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-2xl">Store your stock is a secure and affordable self-storage solution that helps individuals and businesses store their belongings. With its user-friendly platform, customers can easily find, reserve, and manage their storage unit online. The company's facilities are equipped with 24/7 Available Storage, climate control, and agreement through KYC Form to ensure the safety and protection of stored items.</p>
    </div>
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR MISSIONS</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-2xl">Our mission is to make self-storage more accessible and affordable for everyone. We believe that everyone should have access to safe and secure storage solutions, regardless of where they live or how much they can afford.</p>
    </div>
    <div class="flex flex-col text-center w-full mb-">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR VISION </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-2xl">Our vision is to create a world where everyone has the storage space they need, when they need it, without having to pay exorbitant fees or travel far from home. We believe that by connecting people with extra space to those who need it, we can make self-storage more accessible, affordable and convenient for everyone.</p>
    </div>
    </div>
    <div class="flex flex-col text-center w-full mb-0">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
    </div>
    <div class="flex flex-wrap ">

      <div class="p-4 lg:w-1/3 md:w-1/2">
      </div>
    <div class="flex flex-wrap ">
      <div class="p-4 lg:w-1/4 md:w-1/2  ">
        <div class="h-full flex flex-col items-center text-center ">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={img1}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Muhammad Saad Iqbal</h2>
            <h3 class="text-gray-500 mb-3">Web Develepor</h3>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={img2}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Ibrahim Tariq</h2>
            <h3 class="text-gray-500 mb-3">Web Developer</h3>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={img3}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Hayyan Ali</h2>
            <h3 class="text-gray-500 mb-3">Web Developer</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</>
)
    }