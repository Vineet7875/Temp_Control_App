import React, { useState } from "react";
const Temp = () => {
    const [tempValue, settempValue] = useState(10);
    const [tempcolor, settempcolor] = useState("#4756ae")
    const increment = () => {
        if (tempValue >= 30) {
            alert("limit exceeded")
        }
        else {
            settempValue(tempValue + 1)
            if (tempValue >= 14) {
                settempcolor("#ff5722")//red
            }

        }

    }
    const decrement = () => {
        if (tempValue <= 0) {
            alert("limit exceeded")
        }
        else {
            settempValue(tempValue - 1)
            if (tempValue <= 15) {
                settempcolor("#4756ae")//blue
            }
        }

    }
    return (<>
        <div className="grandparent">
            <div className="parent">
                <div className="circle" style={{ backgroundColor: `${tempcolor}` }}>{tempValue}°C</div>
                <div className="child1">
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </div>
            </div>
        </div>
    </>)
}
export default Temp

