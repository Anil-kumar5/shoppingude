import { useState , useEffect  } from 'react';
import AMAuctionItems from './AMAuctionItems';
import './AMAuctionItems.css';
import axios from 'axios';
function AuctionProductData() {
    const [itemData , setItemData] = useState([]);
    useEffect(() =>{
         axios.get('https://api.npoint.io/fdcbc83b1368132f36c8')
         .then(res => res.data)
         .then(data => setItemData(data.items))
    },[])
    console.log(itemData)
    return (
        
            <div className="auction-item-cards-container">
                { 
                      itemData && 
                    itemData
                    .filter((items,index) => index<3 )
                    .map(item=>(
                        <AMAuctionItems key={item.id} items={item} />
                    ))
                }
            </div>
    )
}

export default AuctionProductData
