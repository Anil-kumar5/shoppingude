
import './App.css';
import AuctionOptions from './auctionslanding/auctionoptions/auctionoptions';
import AuctionsFooter from './auctionslanding/AuctionsFooter';
import AuctionsLanding from './auctionslanding/AuctionsLanding';
import Timer from './components/Timer';
import ToDo from './components/ToDO';
import UseState, { MultipleEvents, RenderingData, UseCallbackHook, UseLayoutEffectHook, UseMemoHook, UseRefHook } from './hooks/UseState';
import Position from './table/Position';
import TableRetrieve from './table/TableRetrieve';
import { Render } from './todopractice/Render';


function App() {
//  function fun(a) {
//    return a+100;
//  }
//  console.log(fun(2));
//  const fun1 = (a,b) =>{
//    const  c =10;
//    const addition = a+b+c;
//    const multiplication = a*b*c;
//    const division = (a+b)/c;

//    return (
//      console.log(`add:${addition},multi:${multiplication}`),
//    console.log(division)
//    )
//   }
//  fun1(20,30);

  return(
<div>
{/* <Timer/> */}
{/* <ToDo/> */}
{/* <Render/> */}
{/* <Practice/> */}
{/* <UseState/> */}
{/* <UseRefHook/> */}
{/* <UseLayoutEffectHook/> */}
{/* <UseCallbackHook/> */}
{/* <UseMemoHook/> */}
{/* <RenderingData/> */}
{/* <MultipleEvents/> */}
{/* <TableRetrieve/> */}
{/* <Position/> */}
{/* <AuctionsLanding/> */}
{/* <AuctionsFooter/> */}
<AuctionOptions/>
</div>
  )
}

export default App;

/* 

import React from 'react'
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightSharpIcon from '@material-ui/icons/CopyrightSharp';

function Footer() {
    return (
        <div className="footercontainer">
         <div className="footercontentcontainer">
          <div className="footeritems">
           <div className="auctiondetails">
               <div className="auction-categories">
                   <h3 className="auctionheader">Auction Categories</h3>
                   <ul className="details-lists">
                       <li>Vehicles</li>
                       <li>Electronics</li>
                       <li>Sports&Outdoor</li>
                   </ul>
               </div>
               <div className="footer-about-auctions">
                   <h3 className="auctionheader">About Us</h3>
                   <ul className="details-lists">
                       <li>About AM</li>
                       <li>Help</li>
                       <li>Affiliates</li>
                       <li>Jobs</li>
                       <li>Press</li>
                       <li>Our blog</li>
                   </ul>
               </div>
               <div className="footer-help">
                   <h3 className="auctionheader">We're Here to Help</h3>
                   <ul className="details-lists">
                       <li>Your Account</li>
                       <li>Safe and Secure</li>
                       <li>Shipping Information</li>
                       <li>Contact Us</li>
                       <li>Help & FAQ</li>
                   </ul>
               </div>
               </div>   
              <div className="social-contact">
                  <h3 className="auctionheader">Follow Us</h3>
                  <ul className="details-lists">
                      <li>[910] 123-4575</li>
                      <li>[910] 123-4575</li>
                      <li>help@AM.com</li>
                      <li>QD Broadway Suite</li>
                  </ul>
                  <div className="social-media-logos">
                  <FacebookIcon className="socialmedia"/>
                  <TwitterIcon className="socialmedia"/>
                  <InstagramIcon className="socialmedia"/>
                  <LinkedInIcon className="socialmedia"/>
                  </div>
              </div>
              </div>   
             <hr className="footerhr"/>
             <div className="footercopy">
                 <div className="amlogo">
                     <img src="./logo.png" className="footer-logo" />
                 </div>
                 <div className="paymentoptions">
                 <img src="./paypal.png" className="payment-card"/>
                 <img src="./visa.png"   className="payment-card" />
                 <img src="./discover.png" className="payment-card"/>
                 <img src="./master.jpg" className="payment-card"/>
                 </div>
                 <div className="copyrights">
                     <span><CopyrightSharpIcon className="copyrights-logo"/></span>
                     <p>Copyright 2021 | Auction Master </p>
                 </div>
             </div>
             </div>  
        </div>
    )
}

export default Footer
*/
/* 

.footercontainer{
    background-color:#050D22;
    margin:50px 0 0;
    padding:32px 75px 25px;
}

.footeritems{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin:30px 0 0px;
}
.auctiondetails{
    display: flex;
    flex:0.65;
    justify-content: space-between;
}
.auctionheader{
    font-size:18px;
    color: #fff;
}
.details-lists{
    list-style-type: none;
}
.social-media-logos{
    filter: grayscale(100);
}
.footerhr{
    border:none;
    height:1px;
    background-color: #bababa;
    box-shadow: 0 .3px #3a3a3a ;
}
.payment-card{
    width:30px;
    height:25px;
    border-radius: 2.5px;
    margin-left: 10px;
    filter: grayscale(100);
    position: relative;
    top:12px;
}
.footer-logo{
    width:100px;
    height:40px;
}
.footercopy{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.copyrights{
    display: flex;
    color:white;
    opacity: .8;
    font-size: 14px;
}
.copyrights-logo{
    width:14px !important;
    height:15px !important;
    position: relative;
    top:16.6px;
    right:1px;
}
li{
    font-size: 12px;
    margin-bottom: 3px;
    color: #fff;
    opacity: .8;
    position: relative;
    right:40px;
}
.socialmedia{
    color: gray;
}

@media (max-width:720px) {
    .auctiondetails{
        display: flex;
        flex-direction: column;
    }
}*/