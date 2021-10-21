import React from 'react';
import Cart from './Cart';
import Header from './Header';
import Main from './Main';
import data from './Data';
function Render(){
    const {products} = data;
    const[items,setItems] = React.useState([]);
    const onAdd = (product) =>{
        const exist = items.find((x)=>x.id===product.id);
        if(exist){
            setItems(items.map((x)=>x.id===product.id?{...exist,qty:exist.qty + 1}:x));
            
        }else{
            setItems([...items,{...product,qty:1}]);
        }
    };
    return(
        <React.Fragment>
            <Header/>
            <div className='container'>
            <Main products={products} onAdd={onAdd}/>
            <Cart key={items.id} items={items} onAdd={onAdd} products={products}/>
            
            </div>
            
        </React.Fragment>
       
    )
}

export default Render