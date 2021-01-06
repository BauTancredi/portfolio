import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContainer: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
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
  monitor: {
    width: "70%",
    height: "70%",
    [theme.breakpoints.down("md")]: {
      width: "30%",
      height: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      height: "50%",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
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
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ width: "90vw" }}
      >
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
      {/* About Me */}
      <Grid
        item
        container
        style={{ width: "90vw", margin: "auto", marginTop: "5em" }}
        direction={matchesMD ? "column" : "row"}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignContent={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h2"
              style={{
                fontSize: matchesSM ? "2.2rem" : undefined,
                marginBottom: matchesMD ? 0 : "1.5em",
              }}
              align={matchesMD ? "center" : undefined}
            >
              About Me
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
              align={matchesMD ? "center" : undefined}
              paragraph
              gutterBottom
            >
              I am passionate about technology. I love designing incredible
              websites to later bring them to reality.
            </Typography>
            <Typography
              variant="body1"
              style={{
                maxWidth: matchesXS ? "15em" : "30em",
                fontSize: matchesSM ? "1.5rem" : undefined,
              }}
              align={matchesMD ? "center" : undefined}
              paragraph
              gutterBottom
            >
              My toolbox for work consists of the following: Javascript, React,
              Next.js, Material-UI, Node.js, mongoDB, Firebase and Google
              Analytics.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          justify={matchesMD ? "center" : "flex-end"}
          alignItems={matchesLG ? "center" : "flex-start"}
          style={{ marginTop: matchesMD ? "2em" : 0 }}
        >
          <img
            src="/assets/monitor.svg"
            alt="monitor"
            className={classes.monitor}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
