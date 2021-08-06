import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Button,
  SettingsIcon,
  Hidden,
} from "../../../MaterialUI/ExportComponent";
import { MENU_NAVBAR } from "../../../Constant/MenuNavbar";
import SubNavbar from "./SubNavbar/SubNavbar";
import { BooleansOfPageActions } from "../../../redux/slices/setBooleansOfPage";
import { NavigationToPageAction } from "../../../redux/slices/setNavigationToPageSlice";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem("isAuthenticated"));
  const { t } = useTranslation();

  const handleOpenSubNavbar = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseSubNavbar = () => {
    setAnchorEl(null);
  };

  const handleNavigationPage = (path) => {
    dispatch(BooleansOfPageActions.toggleLoadingPage(true));
    setTimeout(() => {
      dispatch(BooleansOfPageActions.toggleLoadingPage(false));
    }, 3000);
    dispatch(NavigationToPageAction.navigationToPage(path));
    history.push(`/${path}`);
  };

  return (
    <>
      {MENU_NAVBAR.map((item, index) => {
        return (
          <Hidden smDown key={index}>
            <Button
              color="inherit"
              onClick={() => handleNavigationPage(item.path)}
            >
              {t(item.menu)}
            </Button>
          </Hidden>
        );
      })}
      {userName && (
        <Button style={{ color: "#ff5722" }}>Hi {userName.name}</Button>
      )}
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleOpenSubNavbar}
      >
        <SettingsIcon />
      </Button>
      <SubNavbar anchorEl={anchorEl} closeSubNavbarCB={handleCloseSubNavbar} />
    </>
  );
};

export default React.memo(Navbar);
