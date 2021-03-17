import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/StarBorder";

import { makeStyles } from "@material-ui/core/styles";

export default function Pricing() {
  const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[700],
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const tiers = [
    {
      title: "Free",
      price: "0",
      description: [
        "Mobile Store Free",
        "5 GB of storage",
        "covers Safety mode",
        "Carryover data; Safety mode",
      ],
      buttonText: "Start now",
      buttonVariant: "contained",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "100 GB of our Cloud storage",
        "Affordable price",
        "Amount of Data: Unlimited",
        "5G coverage included",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "God",
      price: "30",
      description: [
        "150 GB of our Cloud storage ",
        "Free Netflix and Spotify",
        "Amount of Data: Unlimited",
        "5G coverage included",
      ],
      buttonText: "Contact us",
      buttonVariant: "contained",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <Container
        maxWidth="md"
        boxShadow={3}
        component="main"
        className={classes.heroContent}
      >
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Special Offers
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Looking for the best mobile phones? At Mobile Store, we have exclusive
          special offers on some of the best and most powerful smartphones
          around, including the latest iPhones, lightning-fast Samsung models,
          innovative Huawei phones and much more.we’ve got you covered
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
