import React from 'react'
import './AuctionsFooter.css';
function AuctionsFooter() {
    return (
        <div className="footercontainer">
         <div className="footercontentcontainer">
          <div className="footeritems">
           <div className="auctiondetails">
               <div className="auction-categories">
                   <h3 className="auctionheader">Auction Categories</h3>
                   <ul>
                       <li>Vehicles</li>
                       <li>Electronics</li>
                       <li>Sports&Outdoor</li>
                   </ul>
               </div>
               <div className="footer-about-auctions">
                   <h3 className="auctionheader">About Us</h3>
                   <ul>
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
                   <ul>
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
                  <ul>
                      <li>[910] 123-4575</li>
                      <li>[910] 123-4575</li>
                      <li>help@AM.com</li>
                      <li>QD Broadway Suite</li>
                  </ul>
                  <div className="social-media-logos">
                     <img src="./fb.png" alt="fb-logo" className="footer-logos"/>
                     <img src="./twitter.png" alt="twitter-logo" className="footer-logos"/>
                     <img src="./instagram.jpg" alt="instagram-logo" className="footer-logos"/>
                     <img src ="./linkedin.png" alt="linkedin-logo" className="footer-logos"/>
                  </div>
              </div>
              </div>   
             <hr/>
             </div>            
        </div>
    )
}

export default AuctionsFooter
