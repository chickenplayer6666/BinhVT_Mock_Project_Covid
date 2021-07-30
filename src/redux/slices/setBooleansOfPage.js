import { createSlice } from "@reduxjs/toolkit";

const initialBooleansOfPage = {
  isLoading: false,
  isError: false,
  isDisplaySidebar: false,
  isDarkMode: false,
  isTranslate: false,
};

const setBooleansOfPage = createSlice({
  name: "setBooleansOfPage",
  initialState: initialBooleansOfPage,
  reducers: {
    toggleSidebar(state, action) {
      state.isDisplaySidebar = action.payload;
    },
    toggleDarkModeTheme(state, action) {
      state.isDarkMode = action.payload;
    },
    toggleLoadingPage(state, action) {
      state.isLoading = action.payload;
    },
    toggleTranslate(state, action) {
      state.isTranslate = action.payload;
    },
    toggleErrorPage(state, action) {
      state.isError = action.payload;
    },
  },
});

const { actions, reducer } = setBooleansOfPage;

export { actions as BooleansOfPageActions, reducer as BooleansOfPageReducer };
