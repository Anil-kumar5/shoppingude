import data from "./data.json";
import React from 'react';
import { ProductShow } from "./ProductShow";
import { FilteredProducts } from "./FilteredProduct";
import { Cart } from "./Cart";
export class Render extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:data.products,
            size:"",
            sort:"",
            cartItems:[]
        }
    }
    addToCart = product =>{
         const cartItems = this.state.cartItems.slice();
         let alreadyInCart = false; 
         cartItems.forEach(item=>{
              if(item._id===product._id){
                  item.count++;
                  alreadyInCart = true;
              }
          })
          if(!alreadyInCart){
              cartItems.push({...product,count:1})
          }
          this.setState({
              cartItems:cartItems
          })
    }
    removeItem = item =>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems:cartItems.filter(x=>x._id!==item._id)
        })
    }
    createOrder = (order) =>{
        alert(`need to save order for ${order.userName}`)
    }
    onSortChange = event =>{
        console.log(event.target.value)
        const sort = event.target.value
        this.setState(state=>({
         sort:sort,
         products:this.state.products
         .slice().sort((a,b)=>(
             sort==="lowest"?
             ((a.price>b.price)?10:-10):
             sort==="highest"?
             ((a.price<b.price)?10:-10):
             ((a._id>b._id)?10:-10)
         ))
        }))
    }
    onSizeChange = event=>{
        console.log(event.target.value)
        if(event.target.value===""){
            this.setState({
                size:event.target.value,
                products:data.products
            })
        }
        this.setState({
            size:event.target.value,
            products:data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0)
        })
    }
    render(){
        console.log(this.state.products)
    return(
        <>

        <FilteredProducts coun={this.state.products.length} size={this.state.size} sort={this.state.sort} onSortChange={this.onSortChange} onSizeChange={this.onSizeChange}/>
        <Cart cartItems={this.state.cartItems} removeItem={this.removeItem} createOrder={this.createOrder}/>
        <ProductShow products={this.state.products} addToCart={this.addToCart}/>
        </>
    )
}
}