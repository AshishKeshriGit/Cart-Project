import React from 'react';

class CartItem extends React.Component{
  
    

    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this.state', this.state);
        //setState type 1
        this.setState({
            qty: this.state.qty + 1
        })
    }

    decreaseQuantity = () => {
        const{qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) =>{ //setState type 2
            return {
                qty: prevState.qty - 1
            }
        })
    }


    render(){
        console.log('this.props', this.props);
        const {price, qty, title} = this.props.product; //object destructuring

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
                        onClick={this.increaseQuantity}
                        />

                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' 
                        alt='decrease' 
                        onClick={this.decreaseQuantity}
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