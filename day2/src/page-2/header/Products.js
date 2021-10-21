import React from 'react'
import AMFooter from '../../amfooter/AMFooter';
import AMAuctionItems from '../../amitems/AMAuctionItems';
import AuctionProductData from '../../amitems/AMHomePageItems';
import HeaderImage from '../../HeaderImage/HeaderImage'
import Navbar, { Navigation } from '../../navbar/Navbar'
import ItemFilter from '../ItemFilter';
import './Product.css';
function Products() {
    return (
        <div>
            <div>
            <HeaderImage>
                <Navbar/>
                <Navigation/>
                <h1 className="products-heading">Bid On These Featured Auctions!</h1>
                <AuctionProductData/>
            </HeaderImage>
            </div>
            <div style={{marginTop:'400px'}}>
                <ItemFilter/>
            </div>
            {/* <AMFooter/> */}
        </div>
    )
}

export default Products
