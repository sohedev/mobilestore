import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import banner from "./assets/banner2.png";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Link style={{ textDecoration: "none" }} to="/">
        <img src={banner} style={{ width: "100%" }} />
      </Link>
      {/* <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
