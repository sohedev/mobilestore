import { Typography } from "@material-ui/core";
import React from "react";

export default function EmptyCart() {
  return (
    <div style={{ height: "100vh" }} className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            your cart is currently empty
          </Typography>
        </div>
      </div>
    </div>
  );
}
