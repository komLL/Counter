import { useState } from 'react';
import './App.css';

const App=()=>{
  let newTime=new Date().toLocaleTimeString();
  const state=useState();
  const[ctime,setCtime]=useState(newTime);
  const Update=()=>{
  newTime=new Date().toLocaleTimeString();
  setCtime(newTime)}
return(
  <>
  <h1>Time {ctime}</h1>
  <div className='center'>
  <button onClick={Update}>Click</button>
  </div>
  </>
);
}


export default App;