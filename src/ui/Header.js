import React, { Fragment, useState } from "react";
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
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../Link";
import { Link as ReactLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.common.cream,
    padding: "1em",
  },
  logoContainer: {
    fontStyle: "italic",
  },
  drawerLogoContainer: {
    fontStyle: "italic",
  },
  logo: {
    fontSize: "3rem",
  },
  drawerLogo: {
    fontSize: "2.5rem",
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
  drawer: {
    backgroundColor: theme.palette.common.cream,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: theme.palette.common.blue,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerItem: {
    ...theme.typography.tab,
    fontWeight: 400,
    opacity: "0.7",
    fontSize: "1rem",
    fontWeight: 400,
    textTransform: "uppercase",
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

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabsOptions = [
    { name: "Github", id: "aa" },
    { name: "Recent Works", id: "works" },
    { name: "About Me", id: "about" },
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
        disableElevation
        className={classes.button}
        style={{ textDecoration: "none" }}
      >
        <ReactLink to="contact" spy={true} smooth={true}>
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
        </ReactLink>
      </Button>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        style={{ zIndex: 1402 }}
      >
        <Button className={classes.drawerLogoContainer} disableRipple>
          <ReactLink to="landing" spy={true} smooth={true}>
            <Typography variant="h1" className={classes.drawerLogo}>
              {"<B />"}
            </Typography>
          </ReactLink>
        </Button>
        <List disablePadding>
          {tabsOptions.map((route, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setOpenDrawer(false);
              }}
              divider
              button
              component={Link}
              href="/"
              // href={route.link}
              className={classes.listItem}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            className={classes.listItem}
            style={{
              backgroundColor: theme.palette.common.red,
            }}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              style={{ color: theme.palette.common.cream }}
            >
              <ReactLink to="contact" spy={true} smooth={true}>
                CONTACT ME
              </ReactLink>
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} disableRipple>
              <ReactLink to="landing" spy={true} smooth={true}>
                <Typography variant="h1" className={classes.logo}>
                  {"<B />"}
                </Typography>
              </ReactLink>
            </Button>
            <Hidden smDown>{tabs}</Hidden>
            <Hidden mdUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};

export default Header;
