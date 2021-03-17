import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    user: null,
    error: "",
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    person: {
      firstName: "",
      lastName: "",
      address: {
        addressLine: "",
        city: "",
        zipCode: "",
      },
    },
  };
  // constructor(props) {
  //   super(props);
  //   console.log(this);
  //   this.state.onChange = this.handleChange;
  //   if (this.props.person) {
  //     this.state.person = Object.assign(this.state.person, this.props.person);
  //   }
  // }
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  // schema = Joi.object().keys({
  //   firstName: Joi.string(),
  //   lastName: Joi.string(),
  //   address: Joi.object().keys({
  //     addressLine: Joi.string(),
  //     city: Joi.string(),
  //     zipCode: Joi.number(),
  //   }),
  // });

  // validate = () => {
  //   const valid = Joi.validate(this.state.person, this.schema, {
  //     abortEarly: false,
  //   });
  //   const newErrorObject = {};
  //   if (valid.error) {
  //     valid.error.details.forEach((err) => {
  //       newErrorObject[err.path.join(".")] = err.message;
  //     });
  //     console.log(valid.error);
  //   }
  //   this.setState({ error: newErrorObject });
  // };

  // handleChange = (event) => {
  //   const { person } = this.state;
  //   const val = _.set(person, event.target.name, event.target.value);
  //   this.setState(
  //     {
  //       person: val,
  //     },
  //     this.validate
  //   );
  // };

  setUser = () => {};

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product },
      };
    }, this.addTotals);
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotals()
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => this.addTotals()
      );
    }
  };

  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      };
    }, this.addTotals);
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
