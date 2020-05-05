import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
import { ButtonContainer } from "../StyledButton";
import { DropdownMenu } from "../StyledDropdown";
import Autocomplete from "./Autocomplete";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  closeNavbar = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5  ">
        <Link
          to="/"
          className="navbar-brand"
          onClick={this.closeNavbar}
        >
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <button
          className="navbar-toggler nav-link"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button> */}

        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={this.closeNavbar}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <ul className="navbar-nav ">
              <div className="dropdown nav-item">
                <p
                  className="dropdown-toggle nav-link"
                  type=""
                  id="dropdownMenuReference"
                  data-reference="parent"
                  style={{ cursor: "pointer" }}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </p>
                <DropdownMenu
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuReference"
                >
                  <Link className="dropdown-item" to={"/new-products"} onClick={this.closeNavbar}>
                    new products
                  </Link>

                  <Link className="dropdown-item" to={"/products"} onClick={this.closeNavbar}>
                    all products
                  </Link>

                  <Link className="dropdown-item" to={"/categories"} onClick={this.closeNavbar}>
                    all categories
                  </Link>
                  <div className="dropdown-divider"></div>
                  <React.Fragment>
                    <ProductConsumer>
                      {(value) => {
                        return value.categories.map((category) => {
                          return (
                            <div
                              key={category.category + "drop-item"}
                              onClick={() =>
                                value.handleCategory(category.category)
                              }
                            >
                              <Link className="dropdown-item" to={`/category`} onClick={this.closeNavbar}>
                                {category.category}
                              </Link>
                            </div>
                          );
                        });
                      }}
                    </ProductConsumer>
                  </React.Fragment>
                </DropdownMenu>
              </div>
              <li className="nav-item active">
                {/* <form className="form-inline">
                   <InputContainer className=" mr-sm-2 nav-link" type="search" placeholder="Search" aria-label="Search" />
                   <ButtonContainer >Search</ButtonContainer>
                 </form> */}
                {/* <Searcher/> */}

                <React.Fragment > 
                  <ProductConsumer>
                    {(value) => <Autocomplete value={value} closeNavbar={this.closeNavbar}/>}
                  </ProductConsumer>
                </React.Fragment>
              </li>
            </ul>
            {/* social likns */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fab fa-facebook" />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fab fa-twitter" />
              </Link>
            </li> */}
          </ul>
        </div>

        <Link to="./cart" className="ml-auto">
          <ButtonContainer className="cart-btn">
            <span className="mr-2">
              {" "}
              <i className="fas fa-cart-plus" />
            </span>
            <span className="btn-txt">my cart</span>{" "}
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--main1) !important;
  z-index: 12 !important;
  .nav-link {
    margin: 0.4rem;
    justify-self: center !important;
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
