import { ACTIONS } from "../constants.js";

const defState = {
 
};

export function mainReducer(state = defState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_USERS_REQUEST_SUCCESS:{
      return {...state, users: action.request}
    }
    case ACTIONS.GET_USER_DATA: {
      return {...state, state: {user: action.request}}
    }
    case ACTIONS.GET_DATA_OF_NEW_USER: {
      return {...state, state: action.request}
    } 
    case ACTIONS.GET_USER_REQUEST_SUCCESS: {
      return {...state, state: {user: action.request}}
    }
    case ACTIONS.LOGOUT: {
      return {users: state.users}
    }
    case ACTIONS.GET_COLLECTION_DATA: {
      let collection = state.state.user.collections.filter(i => i.id === action.collectionId)
      return {...state, collection: collection}
      
     
    }
    default:
      return { ...state  }
  }
}
