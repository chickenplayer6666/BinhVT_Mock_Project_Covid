import React from "react";
import { useSelector } from "react-redux";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from "../../../MaterialUI/ExportComponent";
import { Header, Sidebar } from "../../index";

function MainLayout(props) {
  const darkMode = useSelector(
    (state) => state.BooleansOfPageReducer.isDarkMode
  );

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <Sidebar />
        <Container style={{marginTop: 80}}>
          {props.children}
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default MainLayout;
