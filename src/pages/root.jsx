import React from "react";
import Header from "../components/header";
import Home from "./home";
import { FooterComponent } from "../components/footer";


export const RootComponent =()=>{

    return(
        <>
       <div>
       <Header/>
       <FooterComponent/>
       
       </div>
        </>
    )
}