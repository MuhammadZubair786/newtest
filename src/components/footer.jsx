import React from "react";

export const FooterComponent =()=>{

    return(
        <>
        <hr className="container mx-auto"></hr>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">STORE YOUR STOCK</h2>
        <nav className="list-none mb-10 ">
         <p className="pr-10">StoreYourStock offers nearest and most reliable storage facility with the best rent rates you can ever ask for! Join us now to get the latest updates.</p>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PAGES</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="/" className="text-black hover:text-green-600">Home</a>
          </li>
          <li>
            <a href="contactus" className="text-black hover:text-green-600">Contact Us</a>
          </li>
          <li>
            <a href="aboutus" className="text-black hover:text-green-600">About Us</a>
          </li>
          <li>
            <a href="termsandconditions" className="text-black hover:text-green-600">Terms & Conditions</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OUR CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-black hover:text-green-600">Storage Near Me</a>
          </li>
          <li>
            <a className="text-black hover:text-green-600">24/7 Available Storage</a>
          </li>
          <li>
            <a className="text-black hover:text-green-600">Business Stock Storage</a>
          </li>
          <li>
            <a className="text-black hover:text-green-600">Vehicle Storage</a>
          </li>
          <li>
            <a className="text-black hover:text-green-600">Cold Storage</a>
          </li>
          <li>
            <a className="text-black hover:text-green-600">Warehouse Storage</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Join Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="register" className="text-black hover:text-green-600">Become Host</a>
          </li>
          <li>
            <a href="register" className="text-black hover:text-green-600">Become Renter</a>
          </li>
          <li>
            <a href="signin" className="text-black hover:text-green-600">Sign In</a>
          </li>
        </nav>
      </div>
      <hr className="container mx-auto"></hr>
      <br />
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Subscribe to our Newsletter</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Subscribe</button>
        </div>

      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Store Your Stock</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Store Your Stock —
        <label className="text-gray-600 ml-1">All Rights Reserved</label>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href="https://www.facebook.com/profile.php?id=100090482311361" target="_blank" className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>

      </span>
    </div>
  </div>
</footer>

        
        </>
    )
}