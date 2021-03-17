import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { ButtonContainer } from "../UI/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import BookIcon from "@material-ui/icons/Book";
import firebase from "firebase";
import VR from "./assets/vr.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let _user = firebase.auth().currentUser;
    setUser(_user);
  }, []);

  console.log(user);
  return (
    <Nav
      className="navbar shadow sticky-top navbar-expand-sm  navbar-dark  px-sm-5"
      style
    >
      {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
      <Link style={{ textDecoration: "none" }} to="/">
        <img
          src={logo}
          alt="store"
          style={{ color: "#ffd700" }}
          className="navbar-brand mr-2"
        />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ">
          <Link style={{ textDecoration: "none" }} to="/" className="nav-link">
            <ButtonContainer>
              <span className="mr-1 align-items-center">
                <PhoneAndroidRoundedIcon />
              </span>
              Products
            </ButtonContainer>
          </Link>
        </li>
      </ul>

      <Link style={{ textDecoration: "none" }} to="/cart" className="">
        <ButtonContainer>
          <span className="mr-1">
            <AddShoppingCartIcon />
          </span>
          My Cart
        </ButtonContainer>
      </Link>

      {user ? (
        <div className="">
          <ButtonContainer disabled>
            <span>logged in</span>
            <VerifiedUserIcon />
          </ButtonContainer>
        </div>
      ) : (
        <Link style={{ textDecoration: "none" }} to="/login" className="">
          <ButtonContainer>
            <span className="mr-1">
              <PermIdentityIcon />
            </span>
            Login
          </ButtonContainer>
        </Link>
      )}

      <Link style={{ textDecoration: "none" }} to="/blog" className="">
        <ButtonContainer>
          <span className="mr-1">
            <BookIcon />
          </span>
          Blog
        </ButtonContainer>
      </Link>

      <div className="navbar__text">
        <img className="navbar__vr" src={VR} alt="we are the best" />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: var(--mainBlue);
  .navbar {
    width:100%;
    position: fixed;
    z-index: 1;
  }
  .navbar__text {
    margin: auto;
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  .navbar-brand {
    height: 3.7rem;
  }

  @media (max-width: 1200px) {
    .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  }

 @media (max-width: 900px) {
   .navbar__vr {
     width: 16rem;
     height: auto;
     margin-left: 3rem; 
   }

   .MuiSvgIcon-root {
    font-size: 1rem;
  }
 }

  @media (max-width: 600px) {
    .MuiSvgIcon-root {
      font-size: 0.7rem;
    }
    .navbar__text {
      height: auto;
      display:none;
    }
    .navbar-brand {
      width: 3rem;
      height: auto;
    }
    .navbar-nav {
      flex-direction: column !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
