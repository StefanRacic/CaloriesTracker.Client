import {
  GET_MEALS,
  MEALS_ERROR,
  ADD_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload
      };
    case ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload]
      };
    case MEALS_ERROR:
      return {
        ...state,
        meals: null,
        error: action.payload
      };
    case DELETE_MEAL:
      return {
        ...state,
        meals: state.meals.filter(meal => meal.id !== action.payload)
      };
    case UPDATE_MEAL:
      return {
        ...state,
        meals: state.meals.map(meal =>
          meal.id === action.payload.id ? action.payload : meal
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
