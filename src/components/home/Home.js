import React, { Component } from "react";
import Title from "../Title";
import AddsCarousel from "./AddsCarousel";
import ProductListNew from "../ProductListNew";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="welcome to" title="gaming shop" />
            <AddsCarousel />
            <ProductListNew/> 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
