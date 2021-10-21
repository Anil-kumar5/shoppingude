import React from 'react';
import {connect} from 'react-redux';
 function ProductDisplay(props){
    return(
        <>
         <ul className="productslist">
                    {
                        props.items.map(product => {
                            return (                    //dont forgot to write return
                                <li key={product._id}>
                                    <div>
                                        <a href={"#" +product._id} >
                                            <img src={product.image} alt={product.title} />
                                            <p>{product.title}</p>
                                        </a>
                                        <div>
                                            <div>
                                                {product.price}
                                            </div>
                                            <button onClick={()=>this.props.addToCart(product)}>click to buy</button>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        items:state.productDataReducer
    }
}
export default connect(mapStateToProps)(ProductDisplay)