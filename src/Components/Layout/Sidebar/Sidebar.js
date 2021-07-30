import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

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
import { NavigationToPageAction } from "../../../redux/slices/setNavigationToPageSlice"
import { MENU_NAVBAR } from "../../../Constant/MenuNavbar";
import { useHistory } from 'react-router-dom';

//import {SidebarStyles} from '../../../MaterialUI/CustomStyles/SidebarStyles';

const Sidebar = (props) => {
  const classes = SidebarStyles();
  const translate = useSelector(
    (state) => state.BooleansOfPageReducer.isTranslate
  );
  const displaySidebar = useSelector(
    (state) => state.BooleansOfPageReducer.isDisplaySidebar
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en-US");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    translate ? i18n.changeLanguage("vi-VN") : i18n.changeLanguage("en-US");
  }, [translate]); // eslint-disable-line react-hooks/exhaustive-deps

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
              <>
                <ListItem
                  button
                  key={index + item.menu}
                  onClick={() => handleNavigationPage(item.path)}
                >
                  <ListItemIcon>
                    <i className={item.icon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={t(`${item.menu}.1`)}
                    style={{ marginLeft: "-1.5em" }}
                  />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
}

export default Sidebar;