import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BooleansOfPageActions } from "../../../../redux/slices/setBooleansOfPage";
import {
  ListItemIcon,
  ListItemText,
  StyledSubNav,
  StyledSubNavItem,
  Switch,
  PowerSettingsNewIcon,
} from "../../../../MaterialUI/ExportComponent";
import { ValueOfTranslatesAction } from "../../../../redux/slices/setValueOfTranslates";

function SubNavbar({ anchorEl, closeSubNavbarCB }) {
  const translate = useSelector(
    (state) => state.BooleansOfPageReducer.isTranslate
  );
  const darkMode = useSelector(
    (state) => state.BooleansOfPageReducer.isDarkMode
  );
  const setLanguage = useSelector(
    (state) => state.ValueOfTranslatesReducer.language
  );
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(setLanguage);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    i18n.changeLanguage(setLanguage);
  }, [setLanguage]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTranslate = () => {
    if (translate === true) {
      dispatch(ValueOfTranslatesAction.translateLanguage("en-US"));
      dispatch(BooleansOfPageActions.toggleTranslate(!translate));
    } else {
      dispatch(ValueOfTranslatesAction.translateLanguage("vi-VN"));
      dispatch(BooleansOfPageActions.toggleTranslate(!translate));
    }
  };

  const handleDarkModeTheme = () => {
    dispatch(BooleansOfPageActions.toggleDarkModeTheme(!darkMode));
  };

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    dispatch(BooleansOfPageActions.toggleLoadingPage(true));
    setTimeout(() => {
      dispatch(BooleansOfPageActions.toggleLoadingPage(false));
    }, 2000);
    history.push("/");
  };

  return (
    <StyledSubNav
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      style={{ zIndex: 1600 }}
      open={Boolean(anchorEl)}
      onClose={closeSubNavbarCB}
    >
      <StyledSubNavItem>
        <ListItemIcon>
          <Switch
            checked={translate}
            onChange={handleTranslate}
            color="default"
            name="checkedB"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </ListItemIcon>
        <ListItemText primary={translate ? "Vi???t Nam" : "English"} />
      </StyledSubNavItem>
      <StyledSubNavItem>
        <ListItemIcon>
          <Switch
            checked={darkMode}
            onChange={handleDarkModeTheme}
            color="default"
            name="checkedTheme"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </ListItemIcon>
        <ListItemText primary={darkMode ? t("Dark Mode") : t("Light Mode")} />
      </StyledSubNavItem>
      <StyledSubNavItem>
        <ListItemIcon>
          <PowerSettingsNewIcon
            fontSize="small"
            style={{ marginLeft: "1em" }}
          />
        </ListItemIcon>
        {localStorage.getItem("isAuthenticated") ? (
          <ListItemText primary={t("Logout")} onClick={handleLogOut} />
        ) : (
          <ListItemText primary={t("Login")} onClick={handleLogIn} />
        )}
      </StyledSubNavItem>
    </StyledSubNav>
  );
}

export default SubNavbar;
