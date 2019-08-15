import {
  FETCH_DRINKS_START,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAILURE
} from "../actions";

const initialState = {
  drinks: [],
  error: ""
  isFetching: false,
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        isFetching: false,
        drinks: action.payload
      };
    case FETCH_DRINKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "Can't fetch drinks"
      };
    default:
      return state;
  }
};

export default reducer;
