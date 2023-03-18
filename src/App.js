import React from 'react';
import  Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [
        {
          price: 999,
          qty: 1,
          title:'Phone',
          img: 'https://cdn-icons-png.flaticon.com/512/173/173055.png',
          id: 1
        },
        {
          price: 99,
          qty: 2,
          title:'Watch',
          img: 'https://cdn-icons-png.flaticon.com/512/7347/7347843.png',
          id: 2
        },
        {
          price: 9999,
          qty: 10,
          title:'Laptop',
          img: 'https://cdn-icons-png.flaticon.com/512/6062/6062646.png', 
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

  getCartCount = () => {
    const{products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const{products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty*product.price;
    })
    return total;
  }



  render(){
    const{products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteQuantity}
        />
        <div style={{fontSize:20, marginLeft:30}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
