import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Modal from "./components/UI/Modal";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import firebase from "firebase";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Payment from "./components/Payment/Payment";
import Summery from "./components/Summery/Summery";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Navbar />
            <Banner />
            <ProductList />
            <Pricing />
            <Footer />
          </Route>

          <Route path="/details">
            <Navbar />
            <Details />
          </Route>

          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>

          <Route path="/blog">
            <Navbar />
            <Blog />
          </Route>

          <Route path="/payment">
            <Navbar />
            <Payment />
          </Route>
          {/* 
          <Route path="/summery">
            <Navbar />
            <Summery />
          </Route> */}

          <Route component={Default} />
        </Switch>

        <Modal />
      </div>
    );
  }
}

export default App;
