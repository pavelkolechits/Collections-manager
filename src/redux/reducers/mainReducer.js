import { ACTIONS } from "../constants.js";

const defState = {
  users: [],
};

export function mainReducer(state = defState, action) {
  switch (action.type) {
    case ACTIONS.GET_USERS_REQUEST_SUCCESS:{
      console.log(action)
      return {...state, action}
    }
    default:
      return { ...state };
  }
}
