import React, { Component } from "react";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../UI/Button";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div style={{ marginTop: "1.5rem" }}>
                    <Title title="your cart" />
                    <CartColumns />
                    <CartList value={value} />

                    <CartTotals value={value} history={this.props.history} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
