import { combineReducers } from "redux";
import { reportReducer,genReportReducer } from "./reportReducer";

export const rootReducer = combineReducers({
  reports: reportReducer,
  genReports: genReportReducer

});