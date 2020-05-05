import React, { Component } from "react";
 import { storeProducts, detailProduct } from "./data";
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    currentCategory:'',
    cart: [],
    modalOpen: false,
    modalProduct: "",
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    categories: [],
  };
  componentDidMount() {
    this.setProducts();
  }
  // get all products
  setProducts = () => {
    let tempProducts = [];
    // axios
    //   .get("http://localhost:80/react-php-mysql-shop/list.php")
    //   .then((res) => {
        // res.data.forEach((item) => {
        storeProducts.forEach((item) => {
          const singleItem = {
            id: parseInt(item.id),
            // id:item.id,
            category:item.category,
            title: item.name,
            company: item.company,
            info: item.details,
            price: parseFloat(item.price),
            img: item.img,
            isNewProduct:item.isNewProduct,
            inCart: false,
            count: 0,
            total: 0,
          };
          tempProducts = [...tempProducts, singleItem];
        });
        
        // get all categories
        const tempCatgories= tempProducts.reduce((prev,curr)=>{
          let object = prev.filter(object => object.category === curr.category)
          if(object.length ===0){
            prev.push(curr)
          }
          return prev.filter(item=>item.category != "");
        },[])
        this.setState(() => {
          return { 
              products: tempProducts,
              categories:tempCatgories
            };
        });
        
      // })
      // .catch((err) => console.log(err));
  };

  //product methods
  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  handleCategory = (category) => {
     this.setState(() => {
       return { currentCategory:category };
     });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // modal methods
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };




  // cart methods
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const productClicked = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(productClicked);
    const product = tempCart[index];
    product.count++;
    product.total += product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const productClicked = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(productClicked);
    const product = tempCart[index];
    product.count--;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total -= product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts(); // resets the products to inCart:false
        this.addTotals(); // resets the total to 0
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCategory:this.handleCategory,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
