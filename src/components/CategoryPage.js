import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Title from "./Title";
import Product from "./Product";

export default class CategoryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="category name" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  const filteredCategory = value.products.filter(
                    (item) => item.category == value.currentCategory
                  );
                  return filteredCategory.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
