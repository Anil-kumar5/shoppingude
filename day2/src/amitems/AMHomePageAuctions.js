import AuctionProductData from "./AMHomePageItems"


function AMHomePageAuctions() {
    return (
        <div className="auction-items-container">
            <h1 className="auction-header">Featured Items</h1>
            <p className="auction-description">Click on submit a bid to submit your bid</p>
            <AuctionProductData/>
            </div>
    )
}

export default AMHomePageAuctions
