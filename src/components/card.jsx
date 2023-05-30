import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  // console.log(props.data)

  return (
    <>
      <div className="p-4 w-1/2 ">
        <div className="h-full shadow-2xl rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={props.data.main_image }
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray mb-1">
              {props.data.category}
            </h2>
            <h1 className=" text-green-500  title-font text-xl font-medium  mb-3">
              {props.data.address}
            </h1>
            <p className="leading-relaxed mb-3">
              {props.data.description}
            </p>
            <div className="flex items-center my-3 flex-wrap ">
              <h1 className="text-2xl font-bold inline-flex items-center md:mb-2 lg:mb-0">
                {props.data.price}


              </h1>
              <span className="text-gray mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none  pr-3 py-1 border-r-2 border-gray-200 text-lg">

                Rating
              </span>
              <span className="text-white font-bold text-lg bg-green-500 p-1 px-2 rounded  inline-flex items-center leading-none ">

                6
              </span>
            </div>
            <Link to={`detail/${props.data.key}`} > <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500  border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              See Availability
            </button>
            </Link>
          </div>
        </div>
      </div>


    </>
  );
}