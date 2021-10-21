import React from 'react'
import { C } from '../componentshooks/UseContext';

function TaskPract() {
//     const data=  fetch('https://api.npoint.io/a1fbf48c810e0aff7956')
//       .then(res=>res.json())
//       .then(da=>da)
      
// console.log(data.colleges)
// const count=[1,2,3,4,5,6,7,8];
// let ini = 0;
// for(let x of count){
//     ini +=x;
// }
// console.log(ini)

const aray=[{a:'an'},{a:'an'},{a:'an'},{a:'an'},{a:'an'},{a:'an'},{a:'an'},{a:'an'}];
const ar2 = [1,20,5,7,8,37,6,89,65,32,90,107,122,135];
const renderData = () =>{
  console.log(Math.max(...ar2))
}

const aray3=[1,2,3,4,5,6,7,8];
aray3.map(data=>{
  console.log(data)
})
    return (
        <div>
           <button onClick={renderData}>click here</button>
        </div>
    )
}

export default TaskPract
