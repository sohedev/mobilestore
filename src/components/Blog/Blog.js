import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title:
    "Apple's entire iPhone 13 family is 'likely' to bring a highly anticipated feature to market",
  description:
    "While there's clearly no room for Apple's traditional fingerprint recognition method on modern-day high-end iPhones, the Cupertino-based tech giant has been reportedly working on adapting its classic Touch ID sensor for mobile devices with little to no screen bezels for a number of years now.",
  image:
    "https://m-cdn.phonearena.com/images/articles/370712-940/iPhone-13-Pro-concept-renders.webp",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "By Anam Hamid",
    date: "Nov 13",
    description: "Samsung Galaxy S21 could fall victim to global chip shortage",
    image:
      "https://m-cdn.phonearena.com/images/article/130715-two_1200/Samsung-Galaxy-S21-could-fall-victim-to-global-chip-shortage.webp",
    imageText: "Image Text",
  },
  {
    title: "By Adrian Diaconescu",
    date: "Nov 12",
    description:
      "Samsung's awesome Galaxy S20 FE 5G UW can be yours completely free of charge (no trade-in needed)",
    image:
      "https://m-cdn.phonearena.com/images/article/130720-two_1200/Samsungs-awesome-Galaxy-S20-FE-5G-UW-can-be-yours-completely-free-of-charge-no-trade-in-needed.webp",
    imageText: "Image Text",
  },
  {
    title: "By Raja Qazi",
    date: "Nov 11",
    description:
      "Best Samsung Galaxy S21 Ultra cases you can choose in 2021 (featured by T-Mobile)",
    image:
      "https://m-cdn.phonearena.com/images/article/129350-two_1200/Best-Samsung-Galaxy-S21-Ultra-cases.webp",
    imageText: "Image Text",
  },
  {
    title: "by Joshua Swingle",
    date: "Nov 11",
    description:
      "Standard Huawei P50 5G leaks with Galaxy S21-like display, huge camera",
    image:
      "https://m-cdn.phonearena.com/images/article/130695-two_1200/Standard-Huawei-P50-5G-leaks-with-Galaxy-S21-like-display-huge-camera.webp",
    imageText: "Image Text",
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "In Mobile Store's blog we represent the latest stuffs about mobile phones technology for you to stay up to date with us because you deserve the best. ",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Posts" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
