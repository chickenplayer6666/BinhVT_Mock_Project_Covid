import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SidebarStyles,
} from "../../../MaterialUI/ExportComponent";
import { BooleansOfPageActions } from "../../../redux/rootAction";
import { NavigationToPageAction } from "../../../redux/slices/setNavigationToPageSlice";
import { MENU_NAVBAR } from "../../../Constant/MenuNavbar";
import { useHistory } from "react-router-dom";

const Sidebar = (props) => {
  const classes = SidebarStyles();
  const displaySidebar = useSelector(
    (state) => state.BooleansOfPageReducer.isDisplaySidebar
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSidebarToggle = () => {
    dispatch(BooleansOfPageActions.toggleSidebar(!displaySidebar));
  };

  const handleNavigationPage = (path) => {
    dispatch(BooleansOfPageActions.toggleLoadingPage(true));
    setTimeout(() => {
      dispatch(BooleansOfPageActions.toggleLoadingPage(false));
    }, 3000);
    dispatch(NavigationToPageAction.navigationToPage(path));
    history.push(`/${path}`);
    dispatch(BooleansOfPageActions.toggleSidebar(!displaySidebar));
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        open={displaySidebar}
        onClose={handleSidebarToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {MENU_NAVBAR.map((item, index) => (
              <React.Fragment key={index + item.menu}>
                <ListItem
                  button
                  onClick={() => handleNavigationPage(item.path)}
                >
                  <ListItemIcon>
                    <i className={item.icon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t(item.menu)}
                    style={{ marginLeft: "-1.5em" }}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Sidebar;
