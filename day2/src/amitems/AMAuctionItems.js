import React from "react";

function AMAuctionItems({items}) {
    return (
        <div className="auction-cards">
            <div className="auction-card-image-container">
          <img src={items.image} alt="" className="auction-card-images"/>
          <h3 className="auction-item-name">{items.name}</h3>
          </div>
          <hr/>
          <div className="auction-actions-container">
          <div className="auction-actions">
              <img src="./bidicon.png" alt="bid-icon" className="auction-action-image-current"/>
              <div>
              <div className="auctions-action-name action-current">Current Bid</div>
              <div className="auctions-action-amount">{items.currentBidAmount}</div>
              </div>
          </div>
          <hr/>
          <div className="auction-actions">
              <img src="./buynow.png" alt="buy-now" className="auction-action-image-buynow"/>
              <div>
              <div className="auctions-action-name action-buynow">Buy Now</div>
              <div className="auctions-action-amount">{items.buynowBidAmount}</div>
              </div>
          </div>
          </div>
          <hr/>
          <div className="bid-duration-count">
          <span className="bid-time-left">{items.timeLeft}</span>
          <hr className="bid-duration-count-vrline"/>
          <span className="bid-count">{items.numOfBids}</span>
          </div>
          <div>
              <button className="auction-card-btn">Submit A Bid</button>
          </div>
        </div>
    )
}

export default AMAuctionItems
