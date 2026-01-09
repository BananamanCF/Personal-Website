import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';


export default function App() {

  const [x, setX] = useState(0);
  const [tog, setTog] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, dirR: 1, dirG: 1, dirB: 1 });

  function handleClick(){
    if(tog)
      setX(x+1);
  }

  function handleClick2(){}

  useEffect(() => {
    const id = setInterval(() => {
      setColor(prev => {
        let newDirR = prev.dirR;
        let newDirG = prev.dirG;
        let newDirB = prev.dirB;
        if(prev.r < 0 || prev.r > 255)newDirR = prev.dirR == 1 ? -1 : 1;
        if(prev.g < 0 || prev.g > 255)newDirG = prev.dirG == 1 ? -1 : 1;
        if(prev.b < 0 || prev.b > 255)newDirB = prev.dirB == 1 ? -1 : 1;

        let newR = (prev.r + newDirR) 
        let newG = (prev.g + newDirG) 
        let newB = (prev.b + newDirB)

        setBackgroundColor(`rgb(${newR}, ${newG}, ${newB})`);

        return { r: newR, g: newG, b: newB, dirR: newDirR, dirG: newDirG, dirB: newDirB };
      });


    }, 6);

    return () => clearInterval(id);
}, []);


  return (
    <>
      <div style = {{ backgroundColor: backgroundColor, minHeight: "100vh"}}>
        <a href = "https://youtube.com"> This is a link </a>
        <p>Is this text? This is a test</p>
        <button onClick = {handleClick2}>toggle</button>
        <button onClick = {handleClick}>{x}</button>
      </div>
    </>
  );
}
