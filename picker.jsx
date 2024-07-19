import React, {useState} from "react";
function Picker(){
    const [color,setColor]=useState("#000000")
    const HandleColor=(e)=>{
        setColor(e.target.value)
    }
    return(
       <>
        <div className="con1">
            <div className="con2">
                <p className="header">Color Picker</p>
                <div style={{backgroundColor: color}} className="pick">
                <p className="valuetext">Selected Colour :</p>
                <p>{color}</p>
                </div>
                <p>Select the colour :</p>
                <input type="color" value={color} onChange={HandleColor} />
            </div>
        </div>
       </>
    ) 
}
export default Picker