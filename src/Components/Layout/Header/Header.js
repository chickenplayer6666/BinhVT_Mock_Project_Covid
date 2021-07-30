import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  AppBar,
  Hidden,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
  HeaderStyles,
} from "../../../MaterialUI/ExportComponent";
import { Navbar } from "../../index";
import { BooleansOfPageActions } from "../../../redux/rootAction";

const Header = (props) => {
  const classes = HeaderStyles();
  const displaySidebar = useSelector(
    (state) => state.BooleansOfPageReducer.isDisplaySidebar
  );
  const darkMode = useSelector(
    (state) => state.BooleansOfPageReducer.isDarkMode
  );
  const dispatch = useDispatch();
  const [themeHeader, setThemeHeader] = useState({
    background: "rgba(255, 255, 255)",
    color: "black",
  });

  useEffect(() => {
    if (darkMode) {
      setThemeHeader({
        background: "rgba(0, 0, 0)",
        color: "white",
      });
    } else {
      setThemeHeader({
        background: "rgba(255, 255, 255)",
        color: "black",
      });
    }
  }, [darkMode]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDisplaySidebar = () => {
    dispatch(BooleansOfPageActions.toggleSidebar(!displaySidebar));
  };

  return (
    <AppBar className={classes.header} style={themeHeader}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            smUp
            onClick={handleDisplaySidebar}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" className={classes.title}>
          BinhVT
        </Typography>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
