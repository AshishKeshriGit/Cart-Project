import React from 'react';

class CartItem extends React.Component{

    render(){
        console.log('this.props', this.props);
        const {price, qty, title} = this.props.product; //object destructuring
        const {product, onIncreaseQuantity, onDecreaseQuantity} = this.props;

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'grey'}}>Rs {price}</div>
                    <div style={{color:'grey'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                        alt='increase' 
                        onClick={() => onIncreaseQuantity(product)}
                        />

                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' 
                        alt='decrease' 
                        onClick={() => onDecreaseQuantity(product)}
                        />

                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' 
                        alt='delete' 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;