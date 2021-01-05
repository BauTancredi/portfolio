import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  AppBar,
  Toolbar,
  Hidden,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#FAF8F0",
    padding: "1em",
  },
  logoContainer: {
    fontStyle: "italic",
  },
  logo: {
    fontSize: "3rem",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "2em",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "15px",
  },
  button: {
    marginLeft: "15px",
    borderRadius: "15px",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  const tabsOptions = [
    { name: "Github" },
    { name: "Recent Works" },
    { name: "About Me" },
  ];

  const tabs = (
    <Fragment>
      <Tabs value={false} className={classes.tabContainer}>
        {tabsOptions.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            label={route.name}
            disableRipple
            value="0"
          />
        ))}
      </Tabs>

      <Button
        variant="contained"
        color="secondary"
        component={Link}
        href="/"
        disableElevation
        className={classes.button}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="body1"
          style={{
            fontFamily: "'Montserrat', 'sans-serif'",
            fontSize: "1rem",
            color: "#FAF8F0",
            fontWeight: "400",
            textDecoration: "none",
          }}
        >
          CONTACT ME
        </Typography>
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} disableRipple>
              <Typography variant="h1" className={classes.logo}>
                {"<B />"}
              </Typography>
            </Button>
            {tabs}

            {/* <Hidden lgUp>{drawer}</Hidden> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};

export default Header;
