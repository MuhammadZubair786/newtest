import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import { Card } from "../components/card";
import { database } from "../firebase/firebase";
import { ref, get } from 'firebase/database'

export const ListPage = () => {
  const location = useLocation();
  const [car, setCar] = useState(location.state.car);
  const [option, setOption] = useState(location.state.option);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [openDate, setopenDate] = useState(false);
  const [openType, setopenType] = useState(false);

  let [product,setproduct]=useState([])


  useEffect(() => {
    productdata()
  }, [])

  const productdata = async () => {
    let dbref = ref(database, "Product")
    await get(dbref).then((snap) => {
      console.log(snap.val())
      let data = Object.values(snap.val())
      console.log(data)
      setproduct(data)
    })
  }

  return (
    <>

      <div className="bg-white pt-20   mb-40">
        <div className=" pb-20 container mx-auto  shadow-2xl p-4  rounded-2xl flex bg-white">
          <div className="flex h-fit shadow-xl  p-4 rounded-lg  mx-5">
            <form class="space-y-4 mx-2 text-gray-700">
              <div class="flex flex-wrap">
                <div class="w-full">
                  <label class="block mb-1" for="formGridCode_card">
                    Location
                  </label>
                  <input
                    placeholder={destination}
                    class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    type="text"
                    id="formGridCode_card"
                  />
                </div>
                <div class="w-full my-3">
                  <label class="block mb-1" for="formGridCode_card">
                    Check-in Date
                  </label>
                  <input
                    onClick={() => setopenDate(!openDate)}
                    placeholder={`${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )} to ${format(date[0].startDate, "MM/dd/yyyy")}`}
                    class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    type="text"
                    id="formGridCode_card"
                  />
                  {openDate && (
                    <DateRange
                      className="border border-green-500 rounded-lg m-3"
                      onChange={(item) => setdate([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={1}
                      ranges={date}
                      direction="horizontal"
                      preventSnapRefocus={true}

                      maxDate={new Date()}



                      calendarFocus="backwards"
                    />
                  )}
                </div>
              </div>
              <div class="flex flex-wrap  space-y-4 md:space-y-0">
                <div class="w-full px-2 md:w-1/2">
                  <label class="block mb-1" for="formGridCode_name">
                    Area: <small>Sq-Yard </small>
                  </label>
                </div>
                <div class="w-full px-2 md:w-1/2">
                  <input
                    placeholder={`${option} `}
                    class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    min={1}
                    type="number"
                    id="formGridCode_name"
                  />
                </div>
              </div>

              <div class="w-full px-2 md:w-1/2">
                <label class="block mb-1" for="formGridCode_name">
                  Categories
                </label>
              </div>
              <div class="w-full px-2 ">
                <input
                  onClick={() => setopenType(!openType)}
                  placeholder={car}
                  class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="formGridCode_name"
                />
                {openType && (
                  <select
                    className=" border mt-2   border-green-500 p-1 rounded shadow-lg "
                    onClick={(ev) => setCar(ev.target.value)}
                    name=""
                    id=""
                  >
                    <option value="Storages Near Me"> Storages Near Me</option>
                    <option value="24/7 available storage">
                      {" "}
                      24/7 available storage
                    </option>
                    <option value="Business stock storage">
                      Business stock storage
                    </option>
                    <option value="Vehicle storage (car, bike, bus, truck, container, rickshaws)">
                      {" "}
                      Vehicle storage (car, bike, bus, truck, container,
                      rickshaws)
                    </option>
                    <option value="Cold storage"> Cold storage</option>
                    <option value="Warehouse storage">
                      {" "}
                      Warehouse storage
                    </option>
                  </select>
                )}
              </div>
              <div class="flex flex-wrap  my-5 space-y-4 md:space-y-0">
                <div class="w-full px-2 md:w-1/2">
                  <label class="block mb-1" for="formGridCode_name">
                    Min Price:
                  </label>
                </div>
                <div class="w-full px-2 md:w-1/2">
                  <input
                    placeholder="5000"
                    class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    min={5000}
                    type="number"
                    id="formGridCode_name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap  my-5 space-y-4 md:space-y-0">
                <div class="w-full px-2 md:w-1/2">
                  <label class="block mb-1" for="formGridCode_name">
                    Max Price:
                  </label>
                </div>
                <div class="w-full px-2 md:w-1/2">
                  <input
                    placeholder=""
                    class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    min={1}
                    type="number"
                    id="formGridCode_name"
                  />
                </div>
              </div>
              <div className="w-full   my-3">
                <button className=" flex justify-center w-full lg:mt-2 xl:mt-0 flex-shrink-0  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex ">
            <section className="text-black body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex  flex-wrap -m-4">
                  {/* <div className="p-4 w-1/2 ">
                    <div className="h-full shadow-2xl rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray mb-1">
                          CATEGORY
                        </h2>
                        <h1 className=" text-green-500  title-font text-xl font-medium  mb-3">
                          Location
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center my-3 flex-wrap ">
                          <h1 className="text-2xl font-bold inline-flex items-center md:mb-2 lg:mb-0">
                            Price
                            
                      
                          </h1>
                          <span className="text-gray mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none  pr-3 py-1 border-r-2 border-gray-200 text-lg">
                            
                            Rating
                          </span>
                          <span className="text-white font-bold text-lg bg-green-500 p-1 px-2 rounded  inline-flex items-center leading-none ">
                           
                            6
                          </span>
                        </div>
                        <button   className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500  border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              See Availability
            </button>
                      </div>
                    </div>
                  </div> */}
                  {/* <Card />
                  <Card />
                  <Card /> */}
                  {
                    product.map((v,i)=>{
                      return <Card data={v}/>
                    })
                  }


                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
