import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export class CategoryCard extends Component {
  render() {
    const { category, img } = this.props;

    return (
      <CategoryWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleCategory(category)}
              >
                <Link to="./category">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                {/* <button
                  className="cart-btn"
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                </button> */}
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer text-center">
            <p className="align-self-center mb-0">{category}</p>
          </div>
        </div>
      </CategoryWrapper>
    );
  }
}
const CategoryWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.05rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(230, 230, 230);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--light1);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    z-index: 3;
    transition: all 0.3s linear;
    &:focus {
      outline: none;
    }
  }
  .img-container: hover .cart-btn {
    transform: translate(0%, 0%);
    color: var(--main1);
    cursor: pointer;
  }
`;

export default CategoryCard;
