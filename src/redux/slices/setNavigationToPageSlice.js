import { createSlice } from "@reduxjs/toolkit";

const initialNavigationToPage = {
  path: "",
};

const setNavigationToPage = createSlice({
  name: "setNavigationToPage",
  initialState: initialNavigationToPage,
  reducers: {
    navigationToPage(state, action) {
      state.path = action.payload;
    },
  },
});

const { actions, reducer } = setNavigationToPage;

export {
  actions as NavigationToPageAction,
  reducer as NavigationToPageReducer,
};
