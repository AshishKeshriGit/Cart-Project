import React from 'react';
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    qty: 1,
                    title:'Phone',
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    qty: 2,
                    title:'Watch',
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    qty: 10,
                    title:'Laptop',
                    img: '', 
                    id: 3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);

    }

    render(){
        const{products} = this.state;
        return(
            <div className='cart'>
               
                {products.map((product) =>{
                    return <CartItem product = {product} key={product.id} />
                })}
            </div>
        )
    }
}

export default Cart;