import React, {useEffect, useState} from 'react'
import Box from './components/box';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

    const [markArray, setMarkArray] = useState(Array(9).fill(false));
    const [colorArray,setColorArray] = useState(Array(9).fill(false));
    const [totalMarked,setTotalMarked] = useState(0);


    useEffect(()=>{
      let flag = false;
      let turn = -1;
      
      if(totalMarked===9) flag = true;
      for(let i = 0; i<3; i++){
  
         if(markArray[3*i]===true && markArray[3*i+1]===true && markArray[3*i+2]===true && colorArray[3*i]===colorArray[3*i+1] && colorArray[3*i+1]===colorArray[3*i+2]){
          if(colorArray[3*i]===true) turn = 1;
          else turn = 0;
          flag = true;
         }
         if(markArray[i]===true && markArray[i+3]===true && markArray[i+6]===true && colorArray[i]===colorArray[i+3] && colorArray[i+3]===colorArray[i+6]){
          if(colorArray[i]===true) turn = 1;
          else turn = 0;
           flag = true;
         }
      }
      if(markArray[0]===true && markArray[4]===true && markArray[8]===true && colorArray[0]===colorArray[4] && colorArray[4]===colorArray[8]){
        if(colorArray[0]===true) turn = 1;
        else turn = 0;
         flag = true;
      }
      if(markArray[2]===true && markArray[4]===true && markArray[6]===true && colorArray[2]===colorArray[4] && colorArray[4]===colorArray[6]){
        if(colorArray[2]===true) turn = 1;
        else turn = 0;
         flag = true;
      }
      if(flag===true){
        if(turn===-1)
          toast.info("Game Draw");
         else if(turn==0){
           toast.success("Player 2 wins");
         }
         else{
           toast.success("Player 1 wins");
         }
         setTimeout(() => {
       const a = Array(9).fill(false);
       setMarkArray(a);
       setColorArray(a);
       setTotalMarked(0);
      }, 2000);
       
      }
      
    },[totalMarked])

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j<3; j++){
      boxes.push(<Box xInd = {i} yInd = {j} markArray={markArray} totalMarked={totalMarked} setMarkArray={setMarkArray} setTotalMarked={setTotalMarked} colorArray={colorArray} setColorArray={setColorArray}/>);
      }
    }
    return boxes;
  };

  return (
     <div className="upperContainer">
    <div className='MainContainer'>
 
        {
          renderBoxes()
          
        }
     
    </div>
     <ToastContainer/>
    </div>
  );
}

export default App
