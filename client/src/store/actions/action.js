// import the action_types
import * as ACTION_TYPES from './action_types';

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
};

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
};

// FUNCTION CREATER -- return javascript object
export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  };
};

export const user_input = text => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  };
};
