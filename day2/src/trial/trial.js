import React from 'react'
import Tri from './Tri';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const pr = [
    {
        name:'anil'
    },
    {
        name:'anil'
    },
    {
        name:'anil'
    },
    {
        name:'anil'
    }
]
function Trial(props) {
    const [count,setCount] = React.useState(4);
   const onchangeHandler = e =>{
       return(
           setCount(e.target.value)
       )
   }
    return (
        // <div style={{width:'100%',height:'50vh',backgroundColor:'greenyellow'}}>
        // {props.children}
        // </div>
        <div>
       <select onChange={onchangeHandler}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
       </select>
       {
           pr.filter((data,index)=>index<count)
           .map(data=>console.log(data))
       }
       <Carousel>
       <div>
                    <img src="./pic1.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="./pic2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="./pic3.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
       </Carousel>
       <div>
          <div className = "wrapper">
              <div className = "range-container">
                  <input type ="range" min = "0" max ="100" value = "30"
                  id ="range-1"/>
                  <input type ="range" min = "0" max ="100" value = "70"
                  id ="range-2"/>
              </div>
               </div> 
       </div>
        </div>
    )
}

export default Trial
