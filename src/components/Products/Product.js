import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link style={{ textDecoration: "none" }} to="/details">
                    <img src={img} alt="" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <AddShoppingCartIcon />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    height: 23rem;
    object-fit: contain;
    border-color: 0.5px solid black;
    transition: all 0.5s linear;
  }
  .card-footer {
    background-color: #fff !important;
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.2);
      transform: scale(1.0012);
    }
    .card-footer {
      background: rgba(247, 247, 247);
      border-top: 0.05px solid rgba(230, 230, 230, 1);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
    height: 12rem;
    object-fit: contain;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    .cart-btn {
      position: absolute;
      bottom: 20;
      right: 20;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color: var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      //
    }
  }
`;
