import logo from './logo.svg';
import { useState } from "react";
import './App.css';


export default function App() {

  const [x, setX] = useState(0);
  const [tog, setTog] = useState(false);

  function handleClick(){
    if(tog)
      setX(x+1);
  }
  function handleClick2(){
    setTog(!tog);
  }


  return (
    <>
      <p>Is this text?</p>
      <button onClick = {handleClick2}>toggle</button>
      <button onClick = {handleClick}>{x}</button>
    </>
  );
}
