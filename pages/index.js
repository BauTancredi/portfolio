import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  heroContainer: {
    height: "80em",
  },
  buttonsContainer: {
    marginTop: "2em",
  },
  button: {
    margin: "1em",
    borderRadius: "15px",
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.heroContainer}
      >
        <Grid item>
          <Typography variant="h1">Front-end Developer</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{ maxWidth: "30em" }}
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
    </Grid>
  );
}
