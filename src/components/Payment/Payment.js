import React, { useContext, useEffect, useState } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Payment.css";
import firebase from "firebase";
import { Button, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";

const Payment = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  const [inputData, setInputData] = useState([]);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setInputData(Object.values(data));
    console.log(inputData);
  };

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  useEffect(() => {
    const _user = firebase.auth().currentUser;
    setUser(_user);
    console.log(user);
  }, [user]);

  const context = useContext(ProductConsumer);
  const { cartTotal, cart, clearCart } = context;

  return (
    <div>
      {!user && !user?.uid && !user?.Email ? (
        <div
          style={{ width: "100%" }}
          className="alert alert-danger"
          role="alert"
        >
          Dear customer you are not logged in please{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>{" "}
          to continue.
        </div>
      ) : (
        <div>
          <div className="payment__container">
            <div className="payment__subtotal">
              <Typography component="h4" variant="h5" gutterBottom>
                Welcome To Payment
              </Typography>
              <Typography variant="h5" gutterBottom>
                Items:({cart.length})
              </Typography>
              {cart.map((cartItem) => {
                return (
                  <Typography variant="h5" key={cartItem.id} gutterBottom>
                    {cartItem.title}
                    {"  "}
                    <strong>x{cartItem.count}</strong>
                  </Typography>
                );
              })}
              <Typography variant="h5" color="gold" gutterBottom>
                TOTAL PRICE: ${cartTotal}
              </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                className="payment__label"
                style={{ marginTop: "-0.7rem" }}
              >
                First Name
              </label>
              <input
                className="payment__input"
                name="firstName"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.firstName && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  first name at least 3 characters required
                </div>
              )}

              <label className="payment__label">Last Name</label>
              <input
                className="payment__input"
                name="lastName"
                ref={register({ required: true, minLength: 2 })}
              />
              {errors.lastName && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  Last name at least 3 characters required
                </div>
              )}

              <label className="payment__label">City</label>

              <input
                className="payment__input"
                name="city"
                ref={register({ required: true, minLength: 3 })}
              />
              {errors.city && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  City at least 3 characters required
                </div>
              )}

              <label className="payment__label">Address Line</label>
              <input
                className="payment__input"
                name="address"
                ref={register({ required: true, minLength: 15 })}
              />
              {errors.address && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  Address line at least 15 characters required
                </div>
              )}
              <label className="payment__label">Zip Code</label>
              <input
                name="numberInput"
                className="payment__input"
                placeholder="5 characters needed..."
                type="number"
                ref={register({ min: 10000, max: 99999 })}
              />
              {errors.numberInput && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  zipcode 5 characters needs
                </div>
              )}

              <label className="payment__label">Card Number</label>
              <input
                placeholder="16 digits required..."
                ref={register({
                  required: true,
                  min: 1000000000000000,
                  max: 9999999999999999,
                })}
                name="‌bankCardNumber"
                type="number"
                className="payment__input"
              />
              {errors.bankCardNumber && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  card 16 characters required
                </div>
              )}
              <label className="payment__label">CVV2</label>
              <input
                ref={register({ min: 100, max: 999 })}
                className="payment__input"
                name="‌bankCardCV"
                placeholder="3 digits required..."
                type="number"
              />
              {errors.bankCardCV && (
                <div className="payment__alerts">
                  <span>
                    <WarningIcon />
                  </span>{" "}
                  3 digits required
                </div>
              )}

              <input
                className="button payment__input btn"
                disabled={cartTotal < 198 && !user && !user.uid}
                // onClick={}
                type="submit"
              />
            </form>
            <Button
              // disabled={
              //   inputData[5]?.length === 16 && alert("fields didnt filled")
              // }
              onClick={openModal}
            >
              summery
            </Button>
            {modal &&
            inputData[5]?.length === 16 &&
            inputData[6]?.length === 3 &&
            cartTotal > 198 ? (
              <div className="summery__container">
                <div className="summery__items">
                  <DoneIcon />
                  <Typography variant="h4" gutterBottom>
                    Thanks Dear {inputData[0]} {inputData[1]}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Your Items:
                  </Typography>
                  {cart.map((cartItem) => {
                    return (
                      <Typography variant="h6" key={cartItem.id} gutterBottom>
                        {cartItem.title}
                        {"  "}
                        <strong>x{cartItem.count}</strong>
                      </Typography>
                    );
                  })}
                  <Typography variant="h5" gutterBottom>
                    Your Payment: ${cartTotal}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    your will recieve your orders 2 days later at:{" "}
                    <strong>{inputData[3]}</strong> <br /> with zipcode:{" "}
                    <strong>{inputData[4]}</strong>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    wish see you agein ;)
                  </Typography>
                  <Button onClick={closeModal}>CLOSE</Button>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Button onClick={clearCart}>BACK TO HOME</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <p>{""}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
