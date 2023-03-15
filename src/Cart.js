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

    handleIncreaseQuantity = (product) => {
        // console.log('increase qty of ', product);
        const{ products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        const{products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products: products
        })
    }

    handleDeleteQuantity = (id) => {
        const{products} = this.state;
        const filteredProduct = products.filter((item) => item.id !== id);

        this.setState({
            products: filteredProduct
        })
    }

    render(){
        const{products} = this.state;
        return(
            <div className='cart'>
               {products.map((product) =>{
                    return (
                        <CartItem 
                            product = {product} 
                            key = {product.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteQuantity = {this.handleDeleteQuantity}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;