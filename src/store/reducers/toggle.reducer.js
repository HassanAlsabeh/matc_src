import * as actionTypes from '../actions';

const initialState = {
  toggleData: {},
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TOGGLE:
      return {
        toggleData: action.toggleData,
      };
   
    default:
      return state;
  }
};

export default toggleReducer;
