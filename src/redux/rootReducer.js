import { combineReducers } from "redux";

import { BooleansOfPageReducer } from "./slices/setBooleansOfPage";
import { NavigationToPageReducer } from "./slices/setNavigationToPageSlice";
const rootReducer = combineReducers({
  BooleansOfPageReducer,
  NavigationToPageReducer,
});

export default rootReducer;
