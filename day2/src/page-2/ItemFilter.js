import React from 'react'
import './ItemFilter.css';
function ItemFilter() {
    return (
        <div className="item-filter-container">
            <div className="items-sortby-filter-container">
                <div className="sortby-names">
                    <span className="sortby-header">Sort By : </span>
                    <select className="select-container">
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    </select>
                </div>
                <div className="sortby-count">
                    <span className="sortby-header">Sort By :</span>
                    <select className="select-container">
                        <option>6</option>
                        <option>6</option>
                        <option>6</option>
                        <option>6</option>
                        <option>6</option>
                    </select>
                </div>
                <div className = "sortby-searching">
                    <input type = "text" placeholder="Item Name" className="search-action"/>
                    <img src = "./search.png" alt="search-icon"/>
                </div>
            </div>
            {/* <div className="range-slider-container">
             <div className="range-slider">
                 <div className="range-tracker"></div>
                 <input type="range" min="0" max="100" value="30" className="slider-1"/>
                 <input type="range" min="0" max="100" value="70" className="slider-2"/>
             </div>
            </div> */}
            <div className="auction-type-filter">
                <h3 className='auction-items-filter-header'>Auction Type</h3>
              <div className="auction-category-action">
                  <div>
                  <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">Live Auction</span>
                  </div>
                  <div>
                  <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">Timed Auction</span>
                  </div>
                  <div>
                  <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">Buy Now</span>
                  </div>
                  

              </div>

            </div>
            <div className="auction-items-filter-timeleft">
                <h3 className="auction-items-filter-header" >Ending Within</h3>
                <div className="auction-filter-timeduration-action">
                    <div>
                    <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">1 Day</span>
                    </div>
                    <div>
                    <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">1 Week</span>
                    </div>
                    <div>
                    <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">1 Month</span>
                    </div>
                    <div>
                    <input type="checkbox" className="checkbox-filter-auction"/><span className="auction-typefilter-descp">3 Months</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemFilter
