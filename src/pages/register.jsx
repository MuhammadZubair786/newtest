import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingForm } from "./cretaeListingForm";
import { useFirebase } from "../context/firebase-context";
import { database, storage } from "../firebase/firebase";
import { ref, set } from "firebase/database";
import { getDownloadURL, uploadBytes, } from 'firebase/storage'
import { ToastContainer, toast } from 'react-toastify';
import { ref as sRef } from 'firebase/storage';


export function RegisterForm() {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(false);
  const [File, setFile] = useState();
  let [downloadurl, setDownloadURL] = useState("");
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    city: '',
    cnic: '',
    w1fn: "",
    w1ln: "",
    w1address: "",
    w1city: "",
    w1contact: "",
    w1cnic: "",
    w2fn: "",
    w2ln: "",
    w2address: "",
    w2city: "",
    w2contact: "",
    w2cnic: "",
    isAgree: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("authUser"))
    if (user != null || user != undefined) {
        navigate('/') 
        console.log(user.uid)
    }
    
})


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile)
    console.log(storage)
    const storageRef = sRef(storage, `files/${selectedFile.name}`);
    console.log(storageRef)

    uploadBytes(storageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
        setDownloadURL(url)


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


      })
        .catch((e) => {
          toast.error("Error in Upload Image")
        })

    });

  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(downloadurl)



    try {
      if (downloadurl != "") {
        const createdUser = await firebase.registerUser(user.email, user.password);
        firebase.setLoggedInUser(createdUser);

        console.log(createdUser.uid)

        console.log(user)
        user["uid"] = createdUser.uid
        user["image"]= downloadurl


        const databaseRef = ref(database, `user/${createdUser.uid}`);

        await set(databaseRef, user)
          .then(() => {
            console.log("Data set successfully!");

            toast.success('Registration Successful', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

          })
          .catch((error) => {
            console.error("Error setting data:", error);

            toast.error(error, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });




      }
      else {

        toast.error("Image Not upload Wait", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }




      // navigate('/signin');
    } catch (err) {
      // setLoading(false);
      toast.error(err, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      throw err;
    }
  };

  const handleChange = (ev) => {
    setUser((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value
    }));
  };

  return (
    <>
      {/* Checkout Section: Simple Box */}
      {loading && <div className="bg-white">
        <div className="container m-auto bg-white text-black">Loading....</div>
      </div>}
      {!loading && <div className="bg-white"><div className="container mx-auto shadow-2xl bg-white text-black">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Box */}
          <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
            <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
              {/* Heading */}
              <div className="text-center mt-5">
                <h1 className="text-2xl uppercase font-bold tracking-wider text-black mb-1">
                  Know Your Customer Form
                </h1>
                <h1 className="text-2xl font-bold mb-1">
                  (KYC)
                </h1>
                <p className="text-sm text-gray-600 font-medium mb-3">
                  Please read the Terms & Conditions before filling out this form
                </p>
                <p className="text-sm text-gray-600 font-medium mb-5">
                  Enter valid information only
                </p>

                <div className="flex items-center my-5">
                  <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />

                  <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
                </div>
              </div>
              {/* END Heading */}
              {/* Checkout Form */}
              <div className="space-y-6">
                <ToastContainer />
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">

                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="fname" name="fname" placeholder="FIRST NAME"
                        value={user.fname}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="lname" name="lname" placeholder="LAST NAME"
                        value={user.lname}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="email" id="email" name="email" placeholder="EMAIL"
                        value={user.email}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="password" id="password" name="password" placeholder="PASSWORD"
                        value={user.password}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label htmlFor="Address" className="font-medium">ADDRESS:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="address" name="address"
                        value={user.address}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="City" className="font-medium">CITY:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="city" name="city"
                        value={user.city}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="Contact" className="font-medium">CONTACT NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="contact" name="contact"
                        value={user.contact}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNo" className="font-medium">CNIC NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="cnic" name="cnic"
                        value={user.cnic}
                        required
                        onChange={(ev) => handleChange(ev)} />
                    </div>

                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNoB" className="font-medium">ProFile  Pic</label>
                      <input
                        required
                        onChange={(ev) => handleFileChange(ev)}
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="File" id="proFilepic" name="proFilepic" />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNoF" className="font-medium">CNIC NO (Front):</label>
                      <input

                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="File" id="cnicfront" name="cnicfront" />
                    </div>

                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNoB" className="font-medium">CNIC NO (Back):</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="File" id="cnicback" name="cnicback" />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label className="font-medium text-lg block pt-2 pb-7">WITNESS 1:</label>
                      <label htmlFor="W1FN" className="font-medium">FIRST NAME:</label>
                      <input required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        type="text" id="w1fname" name="w1fn"

                        onChange={(ev) => handleChange(ev)}
                        value={user.w1fn} />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1LN" className="font-medium">LAST NAME:</label>
                      <input required
                        onChange={(ev) => handleChange(ev)}
                        value={user.w1ln}
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1lname" name="w1ln" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1Address" className="font-medium">ADDRESS:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w1address}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1address" name="w1address" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1CITY" className="font-medium">CITY:</label>
                      <input
                        required
                        onChange={(ev) => handleChange(ev)}
                        value={user.w1city}
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1city" name="w1city" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1Contact" className="font-medium">CONTACT NO:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w1contact}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w1contact" name="w1contact" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1CNIC" className="font-medium">CNIC NO:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w1cnic}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w1cnic" name="w1cnic" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1Signature" className="font-medium">SIGNATURE IMAGE:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="File" id="w1signature" name="w1signature" />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label className="font-medium text-lg block pt-2 pb-7">WITNESS 2:</label>
                      <label htmlFor="W2FN" className="font-medium">FIRST NAME:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2fn}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2fname" name="w2fn" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2LN" className="font-medium">LAST NAME:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2ln}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2lname" name="w2ln" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2Address" className="font-medium">ADDRESS:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2address}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2address" name="w2address" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2CITY" className="font-medium">CITY:</label>
                      <input
                        required
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2city}
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2city" name="w2city" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2Contact" className="font-medium">CONTACT NO:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2contact}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w2contact" name="w2contact" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2CNIC" className="font-medium">CNIC NO:</label>
                      <input
                        onChange={(ev) => handleChange(ev)}
                        value={user.w2cnic}
                        required className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w2cnic" name="w2cnic" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2Signature" className="font-medium">SIGNATURE IMAGE:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="File" id="w2signature" name="w2signature" />
                    </div>
                  </div>
                  <div className="rounded border p-5 text-sm text-gray-600 text-center">
                    <input required name="isAgree" type="checkbox" value={user.isAgree} onChange={handleChange} /> I agree, on the terms & conditions mentioned in the <a href="termsandconditions" className=" text-blue-500"> Terms & Conditions </a>  Page, also the information provided above is valid
                  </div>
                  <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                    Submit
                  </button>
                </form>
              </div>
              {/* Footer */}
            </div>
          </div>
          {/* END Box */}
        </div>
      </div></div>}
      {/* END Checkout Section: Simple Box */}
    </>
  );
}


