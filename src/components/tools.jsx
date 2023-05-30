import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

import { addDays } from "date-fns";
import { useState } from "react";
import { format } from "date-fns";

export const Tools = () => {
  const [openDate, setOpenDate] = useState(false);
  const [car, setCar] = useState("Storages Near Me");
  const [option, setOption] = useState(50);
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), -30),
      key: "selection",
      calendarFocus:"backwards"
      

    },
  ]);

  const handleAdd = () => {
    return <>{setOption((i) => i + 10)}</>;
  };
  const handleSub = () => {
    return <>{setOption((i) => (i == 10 ? 10 : i - 10))}</>;
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/listing", { state: { option, car, date, destination } });
  };
  return (
    <>
      <div className=" pt-20 flex md:flex-row flex-col justify-center  justify-items-center  w-full">
        <div class="text-black  container  bg-white shadow-xl p-2 rounded border border-white     flex md:flex-row flex-col justify-around  justify-items-center ">
          <div class="py-1    ">
            {" "}
            <input
              onChange={(e) => setDestination(e.target.value)}
              className=" placeholder:text-black  block bg-white w-full border px-1 rounded border-green-500   py-2  focus:outline-none "
              placeholder="Enter City"
              type="text"
              name="search"
            />
          </div>

          <div class="py-1 w-1/4">
            {" "}
            <input
              class=" border px-1 rounded border-green-500  placeholder:text-black block item-center bg-white w-full   py-2    focus:outline-none  placeholder:text-center "
              onClick={() => setOpenDate(!openDate)}
              placeholder={`${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].startDate, "MM/dd/yyyy")}`}
              type="text"
              name="search"
            />
            <span>
              {openDate && (
                <DateRangePicker
                  className="  rounded p-1 m-3 w-1/4 shadow-lg  "
                  onChange={(item) => setdate([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={date}
                  direction="horizontal"
                  maxDate={new Date()}

                  

                  calendarFocus="backwards"
                />
              )}
            </span>
          </div>
          <div class="py-1 w-1/4">
            {" "}
            <input
              onClick={() => setOpenOption(!openOption)}
              class="  border px-1 rounded border-green-500  placeholder:text-black placeholder:text-center   block bg-white w-full    py-2   focus:outline-none "
              placeholder={`Area: ${option} / Type: ${car}`}
              type="text"
              name="search"
            />
            {openOption && (
              <span>
                <div className="flex flex-col m-3      items-start ">
                  <div>
                    <span>
                      {" "}
                      <button
                        onClick={handleSub}
                        className="border border-green-500 p-1 rounded m-1 font-bold"
                      >
                        -
                      </button>{" "}
                      {` Area: ${option} ${' '} Sq-Yard`}
                      <button
                        onClick={handleAdd}
                        className="border p-1 border-green-500  rounded m-1 font-bold"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </span>
                  </div>
                  <div>
                    <select
                      className=" border mt-2   border-green-500 p-1 rounded shadow-lg "
                      onClick={(ev) => setCar(ev.target.value)}
                      name=""
                      id=""
                    >
                      <option value="Storages Near Me">
                        {" "}
                        Storages Near Me
                      </option>
                      <option value="24/7 Available Storage">
                        {" "}
                        24/7 Available Storage
                      </option>
                      <option value="Business Stock Storage">
                        Business Stock Storage
                      </option>
                      <option value="Vehicle Storage">
                        {" "}
                        Vehicle Storage
                      </option>
                      <option value="Cold Storage"> Cold Storage</option>
                      <option value="Warehouse Storage">
                        {" "}
                        Warehouse Storage
                      </option>
                    </select>
                  </div>
                </div>
              </span>
            )}
          </div>
          <div className="py-1">
            <button
              onClick={handleSearch}
              className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
