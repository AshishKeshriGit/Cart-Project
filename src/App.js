import React from 'react';
import  Cart from './Cart';
import Navbar from './Navbar';
import { firestore } from "./firebase";

// import firebase from 'firebase/compat/app';
// firebase.initializeApp(config);
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      //because we will fetch the data from firebase
      products: [],
      loading: true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);

    this.db = firestore();
  
  }

  componentDidMount(){
    
    // firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;

    //       return data;
    //     })

    //     this.setState({
    //       products : products,
    //       loading: false
    //     })
    //   })

    this.db
      .collection('products')
      // .where('price', '<=', 1599)
      // .where('title', '==', 'Bag')
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;

          return data;
        })

        this.setState({
          products : products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
    // console.log('increase qty of ', product);
    const{ products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log('Error ', err);
      })
  }

  handleDecreaseQuantity = (product) => {
    const{products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }

  handleDeleteQuantity = (id) => {
    const{products} = this.state;
    // const filteredProduct = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: filteredProduct
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully');
      })
      .catch((err) => {
        console.log('Error: ', err);
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        title: "Washing Mashing",
        img: "",
        price: 19999,
        qty: 1
      })
      .then((docRef) => {
        console.log("product Added ", docRef);
      })
      .catch((err) => {
        console.log("Error ", err);
      })
  }



  render(){
    const{products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20, marginTop: 20, marginLeft: 20}}>Add Products</button> */}
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteQuantity = {this.handleDeleteQuantity}
        />
        {loading && <h1>Products Loading ...</h1>}
        <div style={{fontSize:20, marginLeft:30}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
