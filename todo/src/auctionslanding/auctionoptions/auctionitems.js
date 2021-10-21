
import GavelIcon from '@material-ui/icons/Gavel';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


function AuctionItems({ bidItems }) {
    return (
        <div className="auction-item-content-container">
            
                <div className="auction-item-header">
                <img className="auction-item-image" />
                <h3 className="auction-item-name">{bidItems.itemName}</h3>
                </div>
                <hr/>
                <div className='bid-data-container'>
                    <div className="current-bid-container">
                        <GavelIcon className="current-bid-icon"/>
                        <div className="action-content">
                            <div className="current-bid-content">Current Bid</div>
                            <span className="bid-amount">{bidItems.currentBidAmount}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="buynow-bid-container">
                        <EmojiPeopleIcon className="buynow-bid-icon" />
                        <div className="action-content">
                            <div className="buy-bid-content">Buy Now</div>
                            <span className="bid-amount">{bidItems.AuctionAmount}</span>
                        </div>
                    </div>
                </div>
                        <hr/>
                <div className="auction-item-footer">
                    <span className="action-item-duration">{bidItems.bidEnd}</span>
            
                    <span className="action-item-bid-count ">{bidItems.numOfBids}</span>
                </div>
                <button className="auction-item-btn">Submit A Bid</button>
            </div>

        
    )
}
export default AuctionItems