import React from 'react'
import './Position.css';
function Position() {
    return (
        <>
        <div>
        <div className="parent">a
           <div className="childone">b
               <div className="childtwo">c
                   <div className="childthree">d
                       
                   </div>
               </div>
               </div>
               
        </div>
        </div>
        <button className="buttonone">He</button>
        <button className="buttontwo">Ha</button>
        </>
    )
}

export default Position
//Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from 
//its normal position. Other content will not be adjusted to fit into any gap left by the element.

//An element with position: absolute; is positioned relative to the nearest positioned ancestor
//However; if an absolute positioned element has no positioned ancestors, it uses the document body