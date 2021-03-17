import React, { Component } from "react";
import Product from "./Product";
import Title from "../Title/Title";
import "./ProductList.css";
import { storeProducts } from "../../data";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "../UI/Button";
import { Button, Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
    customProducts: [],
    showButtons: false,
    company: "all",
  };

  setShowButtons = () => {
    this.setState({ showButtons: !this.state.showButtons });
  };

  setCompany = (value) => {
    this.setState({ company: value });
  };

  render() {
    let companies = [
      "all",
      "Apple",
      "Honor",
      "Huawei",
      "Motorola",
      "Samsung",
      "Xiaomi",
      "Vivo",
    ];
    return (
      <React.Fragment>
        <ProductWrapper className="product__list py-5">
          <div className="container">
            <Title title="Mobile Phones" />

            <Tooltip
              TransitionComponent={Zoom}
              title="it shows the brands of cellphones"
            >
              <Button onClick={() => this.setShowButtons()}>
                {!this.state.showButtons ? (
                  <span> Show Brands</span>
                ) : (
                  <span> Hide Brands</span>
                )}
              </Button>
            </Tooltip>
            {this.state.showButtons ? (
              <div className="product__buttons">
                <ButtonContainer onClick={() => this.setCompany("all")}>
                  {companies[0]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Apple")}>
                  {companies[1]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Honor")}>
                  {companies[2]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Huawei")}>
                  {companies[3]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Motorola")}>
                  {companies[4]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Samsung")}>
                  {companies[5]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Xiaomi")}>
                  {companies[6]}
                </ButtonContainer>
                <ButtonContainer onClick={() => this.setCompany("Vivo")}>
                  {companies[7]}
                </ButtonContainer>
              </div>
            ) : null}
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter((item) => {
                      if (this.state.company === "all") return item;
                      return item.company === this.state.company;
                    })
                    .map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
          {/* 
          <div className="container">
            <div className="row">
              {/* {this.state.customProducts.map((cproduct) => {
                return <CustomProduct key={cproduct.id} product={cproduct} />;
              })} */}
          {/* </div>
          // </div> */}
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
