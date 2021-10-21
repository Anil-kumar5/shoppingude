import React from 'react';
import { slideData } from './SlideData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './SlideBar.css'
function SlideBar({slides}){
    const[current,setCurrent] = React.useState(0);
    const nextSlide =()=>{
        setCurrent(current===slides.length-1?0:current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0?slides.length-1:current-1)
    }
    return(
        <section className="slide">
            <ArrowForwardIosIcon className="rightarrow" onClick={nextSlide}/>
            <ArrowBackIosIcon  className="leftarrow"  onClick={prevSlide} />
           
         {
             slideData.map((slide)=>{
                 return <img src={slide.image} alt="" />
             })
         }
    
        </section>
    )
}

export default SlideBar