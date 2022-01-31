import { ACTIONS } from "../constants.js";

const defState = {};

export function mainReducer(state = defState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_USERS_REQUEST_SUCCESS: {
      return { ...state, users: action.request };
    }
    case ACTIONS.GET_USER_DATA: {
      return { ...state, state: { user: action.request } };
    }
    case ACTIONS.GET_DATA_OF_NEW_USER: {
      return { ...state, state: action.request };
    }
    case ACTIONS.GET_USER_REQUEST_SUCCESS: {
      if (state.collection) {
        let collectionId = state.collection["0"]
          ? state.collection["0"].id
          : "";
        let collection = action.request.collections.filter(
          (i) => i.id === collectionId
        );
        return {
          ...state,
          state: { user: action.request },
          collection: collection,
        };
      }else{
        return {
          ...state,
          state: { user: action.request },
        };
      }

     
    }
    case ACTIONS.LOGOUT: {
      return { users: state.users };
    }
    case ACTIONS.GET_COLLECTION_DATA: {
      let collection = state.state.user.collections.filter(
        (i) => i.id === action.collectionId
      );
      return { ...state, collection: collection };
    }
    case ACTIONS.CREATE_ITEM: {
      let item = {
        item: action.item,
        collectionId: action.collectionId,
        id: action.id,
      };
      return { ...state, collection: { ...state.collection, item: item } };
    }
    case ACTIONS.DELETE_ITEM: {
      delete state.collection.item;
      return { ...state, collection: state.collection };
    }
    default:
      return { ...state };
  }
}
