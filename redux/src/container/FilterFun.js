import React from 'react';
import {connect} from 'react-redux';
function FilterFun(props){
    return(
        <>
        <div className="cont">
        items available------
        <div>{" "}order---
            <select>
                <option value="latest">latest</option>
                <option value="lowest">low to high</option>
                <option value="highest">high to low</option>
            </select>
        </div>
        <div>
       size------- <select>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>            
            </select> 
        </div>
        </div>
        </>
    )
}
export default connect((state)=>({pr:state.productDataReducer.size})) (FilterFun)
