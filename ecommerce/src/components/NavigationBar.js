import React from 'react';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import DetailsOutlinedIcon from '@material-ui/icons/DetailsOutlined';
import './NavigationBar.css';
import { PrimeDetailsShow } from './PrimeDetailsShow';
function NavigationBar(){
    const[image,setImage] = React.useState(null)  
    const onMouse = () =>{
        setImage(<img src='./Prime.jpg'/>)
    } 
    const onMouseout = () =>{
        setImage(null)
    }
    return (
        <div>
        <nav>
         <div className="cont">
             <div className="a dehaze ">
             <DehazeOutlinedIcon className="dehazeicon"/>
             <span className="alldetails">All</span>
             </div>
             <div className="a mobilesnav">Mobiles</div>
             <div className="a fashionnav">Fashion</div>
             <div className="a amazonpay">Amazon Pay</div>
             <div className="a homedesigners">Home Designers</div>
             <div className="a electronicsnav">Electronics</div>
             <div className="a primeshow" onMouseOver={onMouse} onMouseLeave={onMouseout} >
              <span className="prime">Prime</span>
              <DetailsOutlinedIcon className="detailsoutlined"/>
             </div>
             <div className="a computers">Computers</div>
             <div className="a support">Customer Support</div>
         </div>
        </nav>
        <span className="imagedisplay">{image}</span>
        </div>
    )
}

export default NavigationBar