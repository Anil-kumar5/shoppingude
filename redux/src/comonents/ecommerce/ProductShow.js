
import React from 'react';

export class ProductShow extends React.Component {
    render() {
        return (
            <>
                <ul className="productslist">
                    {
                        this.props.products.map(product => {
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
}