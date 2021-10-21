import React from 'react';
import './Cart.css'
export class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showChechout:false,
            userName:'',
            email:'',
            address:'',
            phone:''
        }
    }
    onChangeHandler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onOrderCheckout = e =>{
        e.preventDefault();
        const order ={
            userName:this.state.userName,
            email:this.state.email,
            address:this.state.address,
            phone:this.state.phone,
            cartItems:this.props.cartItems

        }
        this.props.createOrder(order);
    }
    render(){
        const {cartItems} = this.props;
        const {userName,email,address,phone} = this.state
        return(
            <>
            {
                cartItems===0?'no':<div>you have {cartItems.length} items in cart</div>
            }
            <div>
                <ul className="cartitems">
                  {
                      cartItems.map(item=>{
                          return(
                          <li key={item._id} className="listitem">
                              <img src={item.image} className="image"/>
                              <p className="title">{item.title}</p>
                              <div>
                               {item.count}*{item.price}
                              <button onClick={()=>this.props.removeItem(item)}>remove</button>
                              </div>
                          </li>
                          )
                      })
                  }
                  
                          <div>

                         {cartItems.length!==0&& ( <div> total price-- {cartItems.reduce((a,c)=>a+c.price*c.count,0)}</div>)}
                          </div>
                      
                  
                </ul>

                <div>
                <button onClick={()=>this.setState({showChechout:true})}>proceed</button>
                </div>
                <div>
                {
                    this.state.showChechout&&(
                        <div>
                        <form>
                        <div>  username:<input type='text' value={userName} name="userName" onChange={this.onChangeHandler}/></div>
                         <div> email:<input type="email" value ={email} name="email" onChange={this.onChangeHandler}/> </div>
                          <div>phonenuber:<input type="text" value={phone} name="phone" onChange={this.onChangeHandler}/></div>
                          <div>address:<input type='text' value={address} name="address" onChange={this.onChangeHandler}/></div>
                      </form>
                      <div>
                      <button type="submit" onClick={this.onOrderCheckout}>checkout</button>
                  </div>
                  </div>
                    )
                }
                </div>
            {
                console.log(userName),
                console.log(email)
            }
            </div>
            </>
        )
    }
}
