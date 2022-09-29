import React, { useState } from "react";


const Cycle=()=>{
  
    const[count,setCount]=useState(0);
    const increm=()=>{
        setCount(count+1)
    }
    const decrem=()=>{
        if(count>0){setCount(count-1)}
        else{setCount(0)
        alert("value cannot be decrease beyond this limit")}
    }
    
    return(
    <><h1>{count}</h1>
    <div className='center'>
    <button onClick={increm}>+</button>
    <button onClick={decrem}>-</button></div>
    </>
    );
}
export default Cycle