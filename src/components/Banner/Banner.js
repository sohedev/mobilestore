import { h6 } from "@material-ui/core";
import React from "react";
import banner from "./assets/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__image" src={banner} alt="Banner" />
      <div className="typo__container">
        <h6>BUY YOUR DESIRED MOBILE PHONE IN LESS THAN 1 MINUTE</h6>
      </div>
    </div>
  );
};

export default Banner;
