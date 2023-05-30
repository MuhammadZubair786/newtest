import React, { useEffect, useState } from "react";
import { ImageSlider } from "../components/imageSlider";
import { useLocation, useParams } from "react-router-dom";
import { database } from "../firebase/firebase";
import { ref, get } from 'firebase/database'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// import { useLocation } from 'react-router-dom';

const Detail = ({ google }) => {

  const mapStyles = {
    width: '80%',
    height: '400px',
    marginLeft: "50%"
  };


  const markers = [
    { lat: 24.9327065, lng: 67.0583857 }, // Example marker 1
    { lat: 24.8803713, lng: 67.0693347 }, // Example marker 3
    // Add more markers as needed
  ];



  const location = useLocation();
  const { id } = useParams();
  const [option, setOption] = useState(location.state?.City);
  let [product, setproduct] = useState([])

  useEffect(() => {
    // console.log(location.pathname      )
    console.log(id)
    getdata()
  }, [])

  const getdata = async () => {
    let dbref = ref(database, `Product/${id}`)
    await get(dbref).then((snap) => {
      console.log(snap.val())
      // let data = Object.values(snap.val())
      // console.log(data)
      setproduct(snap.val())
    })
  }
  return (
    <>




      <section className="text-gray-600 body-font bg-white">
        {product.length == 0 ?
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" style={{ height: 100, width: 200, textAlign: "center", display: "block", marginLeft: "50%", marginTop: "1%" }} alt="" />
          :
          <div className="container px-5 py-24 mx-auto flex flex-col shadow-2xl  ">
            <div className="rounded-lg  overflow-hidden">
              {/* <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              /> */}
              <span >
                <ImageSlider data={product} />
              </span>
            </div>
            <div className="lg:w-4/6 mx-auto">

              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-48 h-48 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      {/* {option} */}
                    </h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4" />
                    <p className=" font-bold text-2xl mb-2">
                      {/* {product} */}
                    </p>
                    <h1 className="leading-relaxed font-semibold text-xl mb-3"> {product.address} </h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eaque ea, ad error tenetur reiciendis harum dolorum minus omnis quaerat.</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="leading-relaxed font-bold text-xl mb-4 mr-28 inline-block"> PRICE IN PKR {product.price} </h1>
                  <h1 className="leading-relaxed font-bold text-xl mb-4 ml-32 inline-block "> {product.length}*{product.width}</h1>
                  <p className="leading-relaxed font-bold text-xl mb-4 inline-block ml-2 mr-2" >|</p>
                  <h1 className="leading-relaxed font-bold text-xl mb-4 inline-block ">{product.category} </h1>
                  <h1 className="leading-relaxed font-bold text-xl mb-4"> TITLE OF LISTING </h1>
                  <p className="leading-relaxed text-lg mb-6">
                    {product.description}
                  </p>
                  <h1 className="leading-relaxed font-bold text-m mb-4 "> {product.door} </h1>
                  <h1 className="leading-relaxed font-bold text-m mb-4 inline-block "> {product.access} </h1>
                  <p className="leading-relaxed font-bold text-xl mb-4 inline-block ml-2 mr-2" >|</p>
                  <h1 className="leading-relaxed font-bold text-m mb-4 inline-block ">{product.visthour} </h1>
                  <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-500 bg-green-500 text-white hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-blue-700 active:border-blue-700 mb-8">
                    CONTACT
                  </button>

                  <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    <div class="p-2 sm:w-1/2 w-full">
                      <div class="bg-gray-100 rounded flex p-4 h-full items-center ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-lg">FLOOR LEVEL {product.floorlevel} </span>
                      </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                      <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-lg">STAIRS | {product.stairs}</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div class="p-2 sm:w-1/2 w-full">
                      <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-lg">LIFT AVAILABLE | {product.left}</span>
                      </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                      <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="title-font font-medium text-lg">PRIVATE ENTRANCE | {product.enterance}</span>



                      </div>
                    </div>

                  </div>





                </div>
              </div>
            </div>
            
            <div>

            </div>

          </div>
        }

      </section>

    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQ2c_pOSOFYSjxGMwkFvCVWKjYOM9siow',
})(Detail);

