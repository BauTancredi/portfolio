import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Hidden,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { Link } from "react-scroll";

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
  aboutContainer: {
    width: "90vw",
  },
  buttonsContainer: {
    marginTop: "2em",
  },
  button: {
    margin: "1em",
    borderRadius: "15px",
    width: "20em",
    transform: "scale(1)",
    transition: "transform 330ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 330ms ease-in-out",
    },
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
  form: {
    marginTop: "10em",
  },
  textInput: {
    marginTop: "3em",
    backgroundColor: "white",
  },
  formButton: {
    margin: "1em",
    borderRadius: "15px",
    width: "18em",
    marginTop: "3em",
    transform: "scale(1)",
    transition: "transform 330ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 330ms ease-in-out",
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    let valid;
    console.log(e.target.id);
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);

        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        if (e.target.value === "") {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);

    const url =
      "https://us-central1-portfolio-d38d2.cloudfunctions.net/sendMail";

    axios
      .get(url, {
        params: {
          name: name,
          email: email,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

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
        id="landing"
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
              <Link to="works" spy={true} smooth={true}>
                <Typography variant="body1">Recent Works</Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              className={classes.button}
            >
              <Link to="contact" spy={true} smooth={true}>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.cream }}
                >
                  Contact Me
                </Typography>
              </Link>
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
        justify="center"
        className={classes.aboutContainer}
        id="works"
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{
              fontSize: matchesSM ? "2.2rem" : undefined,
              marginTop: "3em",
            }}
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
        style={{
          width: "90vw",
          margin: "auto",
          marginTop: matchesSM ? "8em" : "5em",
        }}
        direction={matchesMD ? "column" : "row"}
        id="about"
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
                marginBottom: matchesMD ? "1em" : "1.5em",
                marginTop: "2em",
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
          style={{ marginTop: matchesMD ? "2em" : "10em" }}
        >
          <img
            src="/assets/monitor.svg"
            alt="monitor"
            className={classes.monitor}
          />
        </Grid>
      </Grid>
      {/* Contact Me */}
      <Hidden mdDown>
        <Grid
          item
          container
          style={{ width: "90vw", margin: "auto", marginTop: "5em" }}
          direction={matchesMD ? "column" : "row"}
          id="contact"
        >
          <Grid item container md className={classes.form}>
            <form style={{ width: "100%" }}>
              <Grid item className={classes.textInput}>
                <TextField
                  id="nombre"
                  label="Name"
                  fullWidth
                  color="primary"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item className={classes.textInput}>
                <TextField
                  id="email"
                  label="Mail"
                  fullWidth
                  color="primary"
                  onChange={(e) => handleChange(e)}
                  error={emailHelper.length !== 0}
                  value={email}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item className={classes.textInput}>
                <TextField
                  id="message"
                  label="Message"
                  fullWidth
                  color="primary"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  disableElevation
                  color="secondary"
                  className={classes.formButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0
                  }
                  onClick={onConfirm}
                >
                  {loading ? (
                    <CircularProgress
                      size={30}
                      color={theme.palette.common.cream}
                    />
                  ) : (
                    <Typography
                      variant="body1"
                      style={{ color: theme.palette.common.cream }}
                    >
                      Send message!
                    </Typography>
                  )}
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignContent={matchesMD ? "center" : undefined}
            alignItems="flex-end"
            style={{ paddingRight: matchesLG ? "5em" : "10em" }}
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{
                  fontSize: matchesSM ? "2.2rem" : undefined,
                  marginBottom: matchesMD ? 0 : "1.5em",
                  marginTop: "2em",
                }}
                align={matchesMD ? "center" : "right"}
              >
                Let's get in touch!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  maxWidth: matchesXS ? "15em" : "20em",
                  fontSize: matchesSM ? "1.5rem" : undefined,
                  marginTop: matchesSM ? "1.5em" : undefined,
                }}
                align={matchesMD ? "center" : "right"}
                paragraph
                gutterBottom
              >
                Ready to bring your idea to life? Tell me about your project and
                I will help you make it come true.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  maxWidth: matchesXS ? "15em" : "20em",
                  fontSize: matchesSM ? "1.5rem" : undefined,
                }}
                align={matchesMD ? "center" : "right"}
                paragraph
                gutterBottom
              >
                Whether you've developed the whole idea or just glimpsed it,
                tell me what it's about!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid
          item
          container
          style={{ width: "90vw", margin: "auto", marginTop: "5em" }}
          direction="column"
          id="contact"
        >
          <Grid
            item
            container
            direction="column"
            md
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{
                  fontSize: matchesSM ? "2.2rem" : undefined,
                  marginBottom: "1em",
                  marginTop: "3em",
                }}
                align="center"
              >
                Let's get in touch!
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
                paragraph
                gutterBottom
              >
                Ready to bring your idea to life? Tell me about your project and
                I will help you make it come true.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  maxWidth: matchesXS ? "15em" : "30em",
                  fontSize: matchesSM ? "1.5rem" : undefined,
                }}
                align={matchesMD ? "center" : "right"}
                paragraph
                gutterBottom
              >
                Whether you've developed the whole idea or just glimpsed it,
                tell me what it's about!
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md className={classes.form}>
            <form style={{ width: "100%" }}>
              <Grid item className={classes.textInput}>
                <TextField
                  id="nombre"
                  label="Name"
                  fullWidth
                  color="primary"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item className={classes.textInput}>
                <TextField
                  id="email"
                  label="Mail"
                  fullWidth
                  color="primary"
                  onChange={(e) => handleChange(e)}
                  error={emailHelper.length !== 0}
                  value={email}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item className={classes.textInput}>
                <TextField
                  id="message"
                  label="Message"
                  fullWidth
                  color="primary"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="outlined"
                  type="search"
                  autoComplete="off"
                />
              </Grid>
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  disableElevation
                  color="secondary"
                  className={classes.formButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0
                  }
                  onClick={onConfirm}
                >
                  {loading ? (
                    <CircularProgress
                      size={30}
                      color={theme.palette.common.cream}
                    />
                  ) : (
                    <Typography
                      variant="body1"
                      style={{ color: theme.palette.common.cream }}
                    >
                      Send message!
                    </Typography>
                  )}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Hidden>
      {/* Footer */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: "10em" }}
      >
        <Grid item>
          <Typography
            variant="body1"
            style={{
              fontSize: matchesSM ? "1.5rem" : undefined,
            }}
            align="center"
            paragraph
            gutterBottom
          >
            Designed By Bautista Tancredi
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: matchesSM ? "1.5rem" : undefined,
            }}
            align="center"
            paragraph
            gutterBottom
          >
            Copyright 2021 &#169;
          </Typography>
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor, fontSize: "1rem" },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
}
