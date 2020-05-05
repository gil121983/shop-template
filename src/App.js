import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import CategoriesList from "./components/CategoriesList";
import CategoryPage from "./components/CategoryPage";
import Modal from "./components/Modal";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import ProductListNew from "./components/ProductListNew";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/new-products" component={ProductListNew} />
          <Route path="/details" component={Details} />
          <Route path="/categories" component={CategoriesList} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />

      </React.Fragment>
    );
  }
}

export default App;