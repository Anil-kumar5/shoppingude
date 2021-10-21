import React from 'react';

export class FilteredProducts extends React.Component{
    render(){
    return(
        <>
        <div className="cont">
        items available------{this.props.coun}
        <div>{" "}order---
            <select value={this.props.sort} onChange={this.props.onSortChange}>
                <option value="latest">latest</option>
                <option value="lowest">low to high</option>
                <option value="highest">high to low</option>
            </select>
        </div>
        <div>
       size------- <select value={this.props.size} onChange={this.props.onSizeChange}>
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
}