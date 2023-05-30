import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Modal from './model'
import { useFirebase } from "../context/firebase-context";
import { ref, child, get,getDatabase } from 'firebase/database'
// import { getDatabase } from "../firebase/firebase";

const Header = () => {
  const firebase = useFirebase()
  const navigate = useNavigate()

 let  [userimage,setuserimage]=useState()

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("authUser"))
    if(user !=undefined || user !=null){
    console.log(user.uid)
    const dbRef = ref(getDatabase());
    get(child(dbRef, `user/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {

       
        setuserimage(snapshot.val()["image"])
        console.log(snapshot.val()["image"]);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  }, [])

  const handleSignout = async () => {
    try {
      const isloggedOut = await firebase.logout()
      if (isloggedOut) {
        navigate('/signin')
      }
    } catch (err) {
      alert('Error logging out')
    }
  }

  return (
    <>
      <header className="text-white bg-green-500 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/'>
            <a className="flex title-font font-medium items-center  text-black mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-black p-2 bg-green-500  rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl text-white">STORE YOUR STOCK</span>
            </a></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {
              !firebase?.getAuthenticatedUser() && <>
                <a className="mr-5 border py-1 px-3 font-bold rounded text-xl hover:text-gray-900"><Link to='/signin'> Login</Link></a>
                <a className="mr-5 border py-1 px-3 font-bold rounded text-xl hover:text-gray-900"><Link to='/register'>Register</Link></a>
              </>
            }
            {
              firebase?.getAuthenticatedUser() && <>
                {/* <span>Logged in as: {firebase?.getAuthenticatedUser()?.user?.email}</span> */}
                <img src={userimage} style={{width:80,height:60,borderRadius:"50%",margin:"10px"}}/>
                <span onClick={handleSignout} className="mr-5 border py-1 px-3 font-bold rounded text-xl hover:text-gray-900">Sign Out</span>
              </>
            }
          </nav>

        </div>
        <div className="flex flex-row pb-7  justify-start container mx-auto justify-items-center gap-3 text-lg ">
          <div className="flex flex-row gap-1 justify-items-around px-2 py-1 border rounded border-white text-white font-bold ml-4">
            <span><Link to={'/'} >HOME</Link></span>
          </div>
          <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
            <span> <Link to={'aboutus'}>About Us</Link></span>
          </div>
          {firebase?.getAuthenticatedUser() && <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
            <span> <Link to={'listingform'}>Listing Form</Link></span>
          </div>}
          <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
            <button className="openModelBtn"><Modal /></button>
          </div>
          <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
            <span> <Link to={'termsandconditions'}>Terms & Conditions</Link></span>
          </div>
          <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
            <span> <Link to={'contactus'}>Contact Us</Link></span>
          </div>

        </div>
        <Outlet />
      </header>

    </>
  )
}
export default Header;