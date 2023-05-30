import React, { useState } from "react";
import './model.css'

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [fromUnit,setFromUnit]=useState('SQY')
    const [toUnit,setToUnit] =useState('MTR')
    const [value,setValue]=useState('')
    const [result,setResult]=useState('')
    const [area, setArea] = useState('')
    const [value_per_sqft, setvalue_per_sqft] = useState('')
    const [currentConversion,setCurrentConversion]=useState('1')

    const onSelectChange =(event)=>{ // For switching headings SQY to MTR
        console.log('event',event.target.value)
        const value=event.target.value
        setCurrentConversion(value)
        setValue('')
        setResult('')
        if(event.target.value=='1'){
            setFromUnit('SQY')
            setToUnit('MTR')
        }
        else if(value=='2'){
            setFromUnit('MTR')
            setToUnit('SQY')
        }
    }

    const onValueChange = (event)=>{ // 1 and 2 are value of input field
        setValue(event.target.value)
        if(event.target.value==''){
            setResult('')
        }
        else{
            if(currentConversion=='1'){
                setResult(parseFloat(event.target.value)/1.196)
            }
            else if(currentConversion =='2'){
                setResult(parseFloat(event.target.value)*1.196)
            }

        }
       
    }

    const onResultChange = (event)=>{ // 1 and 2 are value of input field
        setResult(event.target.value)
        if(event.target.value==''){
            setValue('')
        }
        else{
            if(currentConversion=='1'){
                setValue(parseFloat(event.target.value)*1.196)
            }
            else if(currentConversion =='2'){
                setValue(parseFloat(event.target.value)/1.196)
            }

        }
    
    }

    const onAreaChange = (event) =>{ // Catching the value of Area field in calc
        setArea(event.target.value)
    }

    const onChangeValue = (event) =>{  // Catching the value of price field in calc
        setvalue_per_sqft(event.target.value)
    }
  return (
    <>
      <button onClick={toggleModal} class="btn-modal">
        Tool
      </button>

      {modal && (
        <div class="modal">
          <div onClick={toggleModal} class="overlay"></div>
          <div class="modal-content" style={{'height':'500px'}}>
            <h2 className="m-3 ">TOOLS</h2>
            <form style={{'color':'black'}}>
            <div controlId='conversion'>
            <label className=" font-bold block m-4 text-white border">UNIT CONVERTER</label>
                <label className="text-black font-semibold" >Select Your Conversion: </label>
                <select aria-label="Default select example" onChange={onSelectChange}>
                    <option value="1">Square Yard-Square Meter</option>
                    <option value="2">Square Meter-Square Yard</option>
                </select>
            </div>
                <group controlId="formBasicEmail">
                    <label><b>{fromUnit}</b></label>
                    <input type="text" className="rounded" placeholder="Enter Value"  value={value} onChange={onValueChange}/>
                </group>

                <group className="mb-3" controlId="formBasicPassword">
                    <label><b>{toUnit}</b></label>
                    <input type="text" className="rounded" placeholder="Result" value={result} onChange={onResultChange}/>
                </group>
                <div style={{"padding":'50px'}}>
                  <label className=" font-bold block m-4 text-white border">PRICE CALCULATOR</label>
                    <label className="text-black font-semibold ">Price:</label>
                    <input type="text" className="m-3 rounded" placeholder="Price Per SQY" value={value_per_sqft} onChange={onChangeValue}/>
                    <label className="text-black font-semibold ">Area:</label>
                    <input type="text" className="m-3 rounded" placeholder="Total Area (SQY)" value={area} onChange={onAreaChange}/>
                    <label className="text-black font-semibold p-1 ">Result:</label>
                    <input type="text" className="m-3 rounded" placeholder="Price" value={area*value_per_sqft}/>
                    
                </div>
                </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}