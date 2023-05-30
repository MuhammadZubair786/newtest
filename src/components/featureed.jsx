import vehiclestorageimg from './pictures/vehiclestorageimg.jpg';
import coldstorageimg from './pictures/coldstorageimg.jpg';
import warehousestorageimg from './pictures/warehousestorageimg.jpg';
import businessstockstorageimg from './pictures/businessstockstorageimg.jpg';
import twentyfouravailablestorageimg from './pictures/twentyfouravailablestorageimg.jpg';
import storagenearmeimg from './pictures/storagenearmeimg.jpg';

import React from "react";

export const Featured = () => {
  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white text-black">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="javascript:void(0)"
              className="sm:col-span-2 rounded-3xl shadow-2xl m-4 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={storagenearmeimg}
                alt="Product Image1"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                	Storage Near Me
                </div>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              className="block group rounded-3xl shadow-2xl m-4  relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={twentyfouravailablestorageimg}
                alt="Product Image2"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                	24/7 available storage
                </div>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              className="block group rounded-3xl shadow-2xl m-4  relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={businessstockstorageimg}
                alt="Product Image3"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                Business stock storage
                </div>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              className="sm:col-span-2 rounded-3xl shadow-2xl m-4  md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={vehiclestorageimg}
                alt="Product Image4"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                Vehicle storage 
                </div>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              className="block group relative rounded-3xl shadow-2xl m-4  transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={coldstorageimg}
                alt="Product Image5"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                	Cold storage
                </div>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              className="block group relative rounded-3xl shadow-2xl m-4  transition ease-out active:opacity-75 overflow-hidden"
            >
              <img
                src={warehousestorageimg}
                alt="Product Image6"
                className="transform transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-green-600">
                	Warehouse storage
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
};
