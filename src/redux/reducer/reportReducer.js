import { ADD_GENERATED_REPORT, ADD_REPORT } from "../../actions";


  export const reportReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_REPORT:
        return [...state, action.payload];
    //   case DecrementCounterRdxConst:
    //     return DecrementCounterReducer(state, action);
      default:
        return state;
    }
  };


  export const genReportReducer = (state = null, action) => {
    switch (action.type) {
      case ADD_GENERATED_REPORT:
        return  action.payload;
      default:
        return state;
    }
  };
  
  