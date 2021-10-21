import Product from "./Product";
function Main(props){
    const {products,onAdd} = props;
    return(
       <main>
           products are 
           <div>
               {
                   
            products.map(product=>{
                return (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}/>
                       <h2>name:{product.name}</h2>
                      price:$ {product.price} 
                     <div> <button onClick={onAdd} className="butn">addtocart</button></div>
                     </div>
                   )
            })
               }
           </div>
       </main>
    )
}


export default Main