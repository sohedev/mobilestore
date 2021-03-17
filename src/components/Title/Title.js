import React from "react";
import "./Title.css";
import { Typography } from "@material-ui/core";

export default function Title({ title }) {
  return (
    <div>
      <div>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
      </div>
    </div>
  );
}
