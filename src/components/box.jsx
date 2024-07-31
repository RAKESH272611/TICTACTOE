import React from 'react'
import '../css/box.css'

const Box = ({xInd,yInd,markArray,totalMarked,setMarkArray,setTotalMarked,colorArray,setColorArray}) => {
  let newInd = 3*xInd+yInd;
   const MarkIt = () => {
        const newArray = [...markArray]
        const newColor = [...colorArray]
        console.log(newArray);
        if(newArray[newInd]===false){
          setTotalMarked(prevTotalMarked => {
          const updatedTotalMarked = prevTotalMarked + 1;
    
         
          newArray[newInd] = true;
          setMarkArray(newArray);
          if(updatedTotalMarked%2===1){
             newColor[newInd] = true
          }
          else{
            newColor[newInd] = false;
          }
          setColorArray(newColor);
          return updatedTotalMarked;
        });
      }
     
   };

  return (
    <div className='block' onClick={MarkIt}>
      {
        markArray[newInd] && colorArray[newInd] && <div className='CircleMark'>O</div>
      }
      {
        markArray[newInd] && !colorArray[newInd] && <div className='CrossMark'>X</div>
      }
    
    </div>
  )
}

export default Box
