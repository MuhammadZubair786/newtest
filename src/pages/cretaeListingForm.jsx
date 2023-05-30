import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, storage } from "../firebase/firebase";
import { push, ref, set, getDatabase, get, child } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { ref as sRef, getDownloadURL, uploadBytes } from 'firebase/storage';
import Geolocation from 'geolocation';

export const ListingForm = () => {

    const [open, setopen] = useState(true)
    const [City, setCity] = useState('')
    let [btn_state, setbtn] = useState(false)

    let [title, setttle] = useState("")
    let [description, setdescription] = useState("")
    let [ower, setowner] = useState("")
    let [contact, setcontact] = useState("")
    let [length, setlength] = useState()
    let [width, setwidth] = useState()
    let [price, setprice] = useState()
    let [address, setaddress] = useState()
    let [category, setcategory] = useState()
    let [door, setdoor] = useState()
    let [access, setaccess] = useState()
    let [visthour, setvisthour] = useState()
    let [floorlevel, setfloorlevel] = useState()
    let [stairs, setstairs] = useState()
    let [left, setleft] = useState()
    let [enterance, setenterance] = useState()

    let [checksubmit, setchecksubmit] = useState()
    let [citylist, setCityList] = useState([])
    let [categorylist, setCategoryList] = useState([])

    let [location, setLocation] = useState({ latitude: null, longitude: null });

    let [files, setfiles] = useState()


    const navigate = useNavigate();

     useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                  });
                  getcity1();
            },
            (error) => {
              console.error('Error occurred while retrieving the position:', error);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
          );
    
  }, []);


  const getcity1=()=>{
    console.log(location)
  }



    const handleSearch = () => {
        navigate("/detail", { state: { City } });
    };

    //set city

    // useEffect(()=>{
    //     setcity()
    // },[])

    // const setcity=async()=>{
    //     const databaseRef = ref(database, 'Category');

    //     const key = push(databaseRef).key;
    //     // console.log(key)
    //     var obj ={
    //         key :key,
    //         category_name:"Warehouse Storage"
    //     }

    //     const databaseRef1 = ref(database, `Category/${key}`);

    //     await set(databaseRef1,obj)
    // }



    // get city
    useEffect(() => {
        getcity();
        getcategory();
    }, [])

    const getcity = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Cities`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                let listcity = Object.values(snapshot.val())
                // console.log(listcity)
                setCityList(listcity)
            } else {
                // console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }


    const getcategory = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Category`)).then((snapshot) => {
            if (snapshot.exists()) {
               // console.log(snapshot.val());
                let catlist = Object.values(snapshot.val())
               // console.log(catlist)
                setCategoryList(catlist)
            } else {
               // console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }


      
    const handleopen = async (event) => {
        event.preventDefault()
       
        if (
            title == "" || description == "" || ower == "" || contact == "" ||
            length == "" || price == "" || address == "" || City == "" || category == "" ||
            door == "" || access == "" || visthour == "" || floorlevel == "" ||
            stairs == "" || left == "" || enterance == ""
        ) {

            // fetch ("https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249")
            // .then(response => response.json())
            // .then(result => console.log(result.response.items))


            toast.error("Enter All data", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {

            let imageslist = [];
            let firstimg = [];

            setbtn(true)
            

            for (var i = 0; i < files.length; i++) {
               // console.log(files[i])
                if (i == 0) {

                    const storageRef = sRef(storage, `files/${files[i].name}`);
                   // console.log(storageRef)

                    await uploadBytes(storageRef, files[i]).then((snapshot) => {
                        getDownloadURL(snapshot.ref).then((url) => {
                           // console.log(url)
                            firstimg = url;

                        })
                    })

                }
                else {
                    const storageRef = sRef(storage, `files/${files[i].name}`);
                   // console.log(storageRef)

                    await uploadBytes(storageRef, files[i]).then((snapshot) => {
                        getDownloadURL(snapshot.ref).then((url) => {
                           // console.log(url)
                            imageslist.push(url)
                        })
                    })
                }


            }



           // console.log(title)
           // console.log(description)
           // console.log(ower)
           // console.log(contact)
           // console.log(length)
           // console.log(width)

           // console.log(price)
           // console.log(address)
           // console.log(City)
           // console.log(category)
           // console.log(door)
           // console.log(access)
           // console.log(visthour)
           // console.log(floorlevel)
           // console.log(stairs)
           // console.log(left)
           // console.log(enterance)

            const databaseRef = ref(database, 'Product');

            const key = push(databaseRef).key;
            //     // console.log(key)
            var obj = {
                key: key,
                title, description, ower, contact,
                length, width, price, address,
                City, category,
                door,
                access, visthour, floorlevel, stairs, left, enterance,
                main_image: firstimg,
                imagelist: JSON.stringify(imageslist),
                latitude:location.latitude,
                longitude:location.longitude
            }


            const databaseRef1 = ref(database, `Product/${key}`);

            await set(databaseRef1, obj)


            toast.success('Profile Image Upload Succefully', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setbtn(false)

        }

        // if (setopen(!open)) {
        //    // console.log("");
        // }
        // else {
        //     navigate("/detail");
        //     setTimeout()
        // }
    }


    const handleupload = (e) => {
       // console.log(e.target.files)
        // console.log(e.target.files.length)

        // for(var i=0;i<e.target.files.length;i++){
        //    // console.log(e.target.files[i])

        // }
        setfiles(e.target.files)
    }

    return (

        <>

            {/* Checkout Section: Simple Box */}
            <div className="bg-white"><div className="container mx-auto shadow-2xl bg-white text-black">
                <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Box */}
                    <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
                        <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
                            {/* Heading */}
                            <div className="text-center mt-5">
                                <h1 className="text-2xl uppercase font-bold tracking-wider text-black mb-1">
                                    BECOME A HOST FORM
                                </h1>
                                <h1 className="text-2xl font-bold mb-1">

                                </h1>
                                <p className="text-sm text-gray-600 font-medium mb-5">
                                    Fill up all the fields in order to create your listing
                                </p>

                                <div className="flex items-center my-5">
                                    <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />

                                    <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <ToastContainer />
                                <form onSubmit={(e) => handleopen(e)} className="space-y-6">
                                    <div className="space-y-6 p-4 rounded border bg-gray-50">
                                        <div className="space-y-1">
                                            <label htmlFor="Pic/vid" className="font-medium">PICTURE/VIDEO:</label>
                                            <input
                                                onChange={(e) => handleupload(e)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="file" id="picfiles" name="picfiles" multiple="multiple" />
                                        </div>

                                        <div className="space-y-1 grow">
                                            <label htmlFor="ListingTitle" className="font-medium">TITLE OF LISTING:</label>
                                            <input
                                                value={title}
                                                onChange={(e) => setttle(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="title" name="title" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Description" className="font-medium">DESCRIPTION:</label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setdescription(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 h-44 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="description" name="description" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="PropertyOwnerName" className="font-medium">PROPERTY OWNER NAME:</label>
                                            <input
                                                required
                                                value={ower}
                                                onChange={(e) => setowner(e.target.value)}

                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="propertyownername" name="propertyownername" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="ContactNo" className="font-medium">CONTACT NO:</label>
                                            <input
                                                value={contact}
                                                onChange={(e) => setcontact(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="contactno" name="contactno" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="space-y-1 grow">
                                                <label htmlFor="Dimensions" className="font-medium">DIMENSION (Length):</label>
                                                <input

                                                    value={length}
                                                    onChange={(e) => setlength(e.target.value)}

                                                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="dimensionlength" name="dimensionlength" placeholder="Length in Foot" />
                                            </div>
                                            <div className="space-y-1 grow">
                                                <label htmlFor="Dimensions" className="font-medium">DIMENSION (Width):</label>
                                                <input

                                                    value={width}
                                                    onChange={(e) => setwidth(e.target.value)}

                                                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="dimensionwidth" name="dimensionwidth" placeholder="Width in Foot" />
                                            </div>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Price" className="font-medium">PRICE (PKR):</label>
                                            <input

                                                value={price}
                                                onChange={(e) => setprice(e.target.value)}

                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="price" name="price" placeholder="Eg. 25000" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Location" className="font-medium">LOCATION ADDRESS:</label>
                                            <input

                                                value={address}
                                                onChange={(e) => setaddress(e.target.value)}

                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="location" name="location" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">CITY:  &emsp; &emsp;

                                                <select
                                                    className=" border mt-2   border-green-500 p-1 rounded"
                                                    onChange={(e) => setCity(e.target.value)}
                                                    //   onClick={(ev) => setCar(ev.target.value)}
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="Select"
                                                    >
                                                        Select City
                                                    </option>
                                                    {
                                                        citylist.map((v, i) => {
                                                            return <option value={v.city_name}>
                                                                {v.city_name}
                                                            </option>
                                                        })
                                                    }



                                                </select>
                                            </label>
                                        </div>

                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">CATEGORY:

                                                <select
                                                    className=" border mt-2   border-green-500 p-1 rounded"
                                                    onChange={(e) => setcategory(e.target.value)}
                                                    //   onClick={(ev) => setCar(ev.target.value)}
                                                    name=""
                                                    id=""
                                                >
                                                    <option value="Select">
                                                        Select
                                                    </option>
                                                    {categorylist.map((v, i) => {
                                                        return <option value={v.category_name}>
                                                            {v.category_name}
                                                        </option>
                                                    })}


                                                </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">INDOOR/OUT DOOR: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                onChange={(e) => setdoor(e.target.value)}
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="Indoor">
                                                    Indoor
                                                </option>
                                                <option value="Outdoor">
                                                    Outdoor
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">ACCESSIBILITY: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                onChange={(e) => setaccess(e.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="Daily">
                                                    Daily
                                                </option>
                                                <option value="Weekly">
                                                    Weekly
                                                </option>
                                                <option value="Monthly">
                                                    Monthly
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">VISTING HOURS: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                onChange={(e) => setvisthour(e.target.value)}
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="DayTime(12PM to 6PM)">
                                                    DayTime (12PM to 6PM)
                                                </option>
                                                <option value="NightTime(6PM to 12PM)">
                                                    NightTime (6PM to 12AM)
                                                </option>
                                                <option value="24/7">
                                                    24 Hours
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="FloorLevel" className="font-medium">FLOOR LEVEL:</label>
                                            <input
                                                value={floorlevel}
                                                onChange={(e) => setfloorlevel(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="floorlevel" name="floorlevel" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Stairs" className="font-medium">STAIRS ( YES / NO ):</label>
                                            <input
                                                value={stairs}
                                                onChange={(e) => setstairs(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="stairs" name="stairs" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Lift" className="font-medium">LIFT AVAILABLE ( YES / NO ):</label>
                                            <input
                                                value={left}
                                                onChange={(e) => setleft(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="lift" name="lift" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="PrivateEntrance" className="font-medium">PRIVATE ENTRANCE ( YES / NO ):</label>
                                            <input
                                                value={enterance}
                                                onChange={(e) => setenterance(e.target.value)}
                                                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="privateentrance" name="privateentrance" />
                                        </div>
                                    </div>
                                    {
                                        btn_state == true ?
                                            // <button type="submit" id="loading-button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-600 bg-green-600 text-white hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-blue-700 active:border-blue-700">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" style={{ height: 100, width: 200, textAlign: "center", display: "block", margin: 20 }} alt="" />
                                            // </button>
                                            :
                                            <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-600 bg-green-600 text-white hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-blue-700 active:border-blue-700">
                                                <span>Submit</span>
                                            </button>

                                    }



                                </form>
                            </div>
                        </div>
                    </div>
                    {/* END Box */}
                </div>
            </div></div>
        </>
    )
}


