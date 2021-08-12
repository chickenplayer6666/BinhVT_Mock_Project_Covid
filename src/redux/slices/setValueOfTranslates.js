import { createSlice } from "@reduxjs/toolkit";

const initialValueOfTranslate = {
  language: "en",
};

const setValueOfTranslates = createSlice({
  name: "setValueOfTranslates",
  initialState: initialValueOfTranslate,
  reducers: {
    translateLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

const { actions, reducer } = setValueOfTranslates;

export {
  actions as ValueOfTranslatesAction,
  reducer as ValueOfTranslatesReducer,
};
