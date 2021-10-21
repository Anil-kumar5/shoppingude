
function Cart(props){
    const{items,onAdd,products} = props;
    return(
        <aside>
        <h2>cart items</h2>
        <div>{items.length===0 &&<div>cart items are empty</div>}</div>
          {
              items.map(item=><div key={item.id}>{item.name}</div>)
              
          } 
        </aside>
    )
}
export default Cart