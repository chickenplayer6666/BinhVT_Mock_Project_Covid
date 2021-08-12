import { combineReducers } from "redux";

import { BooleansOfPageReducer } from "./slices/setBooleansOfPage";
import { NavigationToPageReducer } from "./slices/setNavigationToPageSlice";
import { ValueOfTranslatesReducer } from "./slices/setValueOfTranslates";

const rootReducer = combineReducers({
  BooleansOfPageReducer,
  NavigationToPageReducer,
  ValueOfTranslatesReducer,
});

export default rootReducer;
