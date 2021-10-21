
import './auctionoptions.css';
import AuctionItems from './auctionitems';
const itemsToBid = [
    {
        image:'',
        itemName:'RE Himalayan',
        currentBidAmount:'RS 1,50,000.00',
        AuctionAmount:'RS 2,00,000.00',
        bidEnd:'4h:31m:27s',
        numOfBids:'30 Bids',
        id:1
    },
    {
        image:'',
        itemName:'HP Laptop 15B',
        currentBidAmount:'RS 50,000.00',
        AuctionAmount:'RS 70,000.00',
        bidEnd:'2h:57m:16s',
        numOfBids:'46 Bids',
        id:2
    },
    {
        image:'',
        itemName:'SS Bat',
        currentBidAmount:'RS 2,000.00',
        AuctionAmount:'RS 2,800.00',
        bidEnd:'8h:39m:07s',
        numOfBids:'24 Bids',
        id:3
    }
    
]
function AuctionOptions(){
    return(
            <div className="auction-container">
        
                    <h1 className="auction-header">Featured Items</h1>
                    <p className="auction-description">Click on  Submit A Bid to Submit Your Bid </p>
        
                <div className="auction-items-container">
                   {
                       itemsToBid.map(bidItems=>(
                           <AuctionItems key={bidItems.id} bidItems={bidItems}/>
                       )
                           
                       )
                   }
                </div>
            </div>
            
        
    )
}

export default AuctionOptions