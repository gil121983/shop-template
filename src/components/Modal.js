import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./StyledButton";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="card">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <div className="row">
                        <h5>item added to cart</h5>
                      </div>
                      <div className="row">
                        <div className="col">
                          <img src={img} className="img-fluid" alt="product" style={{ minWidth: '40px' }} />
                        </div>
                        <div className="col">
                          <h5>{title}</h5>
                          <h5 className="text-muted">price : ${price}</h5>
                        </div>
                        <div className="row">
                          <Link to="#">
                            <ButtonContainer onClick={() => closeModal()}>
                              back to shop
                        </ButtonContainer>
                          </Link>
                          <Link to="/cart">
                            <ButtonContainer onClick={() => closeModal()} cart>
                              view cart
                        </ButtonContainer>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  z-index:8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
