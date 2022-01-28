import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions";
const initialState = {
    fact: {},
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
          return {
            ...state,
            fact: {},
            error: ''
          };
        case FETCH_FAIL:
          return {
            ...state,
            fact:{},
            error: action.payload
          };
        case FETCH_SUCCESS:
          return {
            ...state,
            fact: action.payload,
            error: ''
          };
        default:
          return state;
      }
};