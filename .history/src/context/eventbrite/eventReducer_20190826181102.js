import {
  SEARCH_EVENTS,
  SET_WITHIN,
  SET_KEYWORD,
  GET_EVENTS,
  SET_ALERT,
  SET_LOADING,
  CLEAR_EVENTS,
  SET_LOCATION,
  REMOVE_ALERT
} from "../types";

export default (state, action) => {
  // console.log(action);
  switch (action.type) {
    case SEARCH_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_WITHIN:
      return {
        ...state,
        within: action.payload
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    case CLEAR_EVENTS:
      return {
        ...state,
        events: {},
        keyword: action.payload
      };
    default:
      return state;
  }
};
