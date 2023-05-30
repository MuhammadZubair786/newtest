import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

export const ImageSlider = (props) => {

  let [imageslider,setmageslider]=useState([])

  useEffect(() => {
    getimageslide()
  }, [])

 const getimageslide = () => {
   let  mainarray = []
    console.log(props.data.imagelist[0])
    let data = JSON.parse(props.data.imagelist)
    console.log(data)
   mainarray.push(props.data.main_image)
   data.map((v,i)=>{
    mainarray.push(v)
   })
   console.log(mainarray)
   setmageslider(mainarray)
  }
  return (
    <div className="slide-container">
      <Slide>
        {imageslider.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': {slideImage} }}>
              <span style={spanStyle}>{slideImage.caption}</span>
              <img
            className=""
            style={{width:"80%",height:"100%"}}
            src={slideImage}
            alt="blog"
          />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}