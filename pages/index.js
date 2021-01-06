import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  heroContainer: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "70em",
      margin: "1em",
    },
  },
  buttonsContainer: {
    marginTop: "2em",
  },
  button: {
    margin: "1em",
    borderRadius: "15px",
    width: "20em",
  },
  projectContainer: {
    width: "30em",
    height: "20em",
    backgroundColor: "grey",
    borderRadius: "15px",
    marginBottom: "10em",
    transform: "scale(1)",
    transition: "transform 330ms ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.4)",
      transition: "transform 330ms ease-in-out",
    },
    [theme.breakpoints.down("md")]: {
      width: "25em",
      height: "15em",
      "&:hover": {
        transform: "scale(1.2)",
        transition: "transform 330ms ease-in-out",
      },
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container className={classes.mainContainer}>
      {/* Hero */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.heroContainer}
      >
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontSize: matchesSM ? "2.2rem" : undefined }}
            align="center"
          >
            Front-end Developer
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{
              maxWidth: matchesXS ? "15em" : "30em",
              fontSize: matchesSM ? "1.5rem" : undefined,
              marginTop: matchesSM ? "1.5em" : undefined,
            }}
            align="center"
          >
            Hi, you can call me B. I’m a Front-end Developer with special focus
            on UI and design.
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.buttonsContainer}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              <Typography variant="body1">Recent Works</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              className={classes.button}
            >
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.cream }}
              >
                Contact Me
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* Recent Work */}
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{ fontSize: matchesSM ? "2.2rem" : undefined }}
          >
            Recent Works
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align="center"
            style={{
              maxWidth: matchesXS ? "15em" : "30em",
              fontSize: matchesSM ? "1.5rem" : undefined,
              marginTop: matchesSM ? "1.5em" : undefined,
            }}
          >
            Take a look at some of the projects I’ve recently worked on
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "5em", width: "90vw" }}>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
          <Grid item container sm={6} md={4} justify="center">
            <div className={classes.projectContainer}></div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
