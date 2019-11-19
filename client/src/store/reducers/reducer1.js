// import action_types from action_types.js
import * as ACTION_TYPES from '../actions/action_types';

// setup variables -- no need to export
// these files will only be use in here
const initialState = {
  stateprop1: false
};

const rootReducer = (state = initialState, action) => {
  //use switch...cass to check if this happen run this
  switch (
    action.type // 1. check the action.type
  ) {
    case ACTION_TYPES.SUCCESS: // 2. if the action type is SUCCESS
      return {
        ...state, // 4. create a new copy
        stateprop1: true // 3.run this code
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false
      };
    default:
      return {
        state
      };
  }
};

export default rootReducer;
