import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import CategoryCard from "./CategoryCard";
export default class CategoriesList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="all" title="categories" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  console.log(value);
                  return value.categories.map((item) => {
                    return (
                      <CategoryCard key={item.category} category={item.category} img={item.img} />
                    );
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
