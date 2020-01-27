import React, { useReducer } from 'react';
import MealsContext from '../meals/mealsContext';
import mealsReducer from '../meals/mealsReducer';
import axios from 'axios';

import {
  GET_MEALS,
  MEALS_ERROR,
  ADD_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const MealsState = props => {
  const initialState = {
    meals: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(mealsReducer, initialState);

  //GET Meals
  const getMeals = async () => {
    const config = {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.get('/api/meals', config);
      dispatch({ type: GET_MEALS, payload: res.data });
    } catch (error) {
      dispatch({ type: MEALS_ERROR, payload: error });
    }
  };

  // Add Meal
  const addMeal = async meal => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.post('/api/meals', meal, config);
      dispatch({ type: ADD_MEAL, payload: res.data });
    } catch (error) {
      dispatch({ type: MEALS_ERROR, payload: error });
    }
  };

  // Delete Meal
  const deleteMeal = async id => {
    const config = {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.delete(`/api/meals/${id}`, config);
      dispatch({ type: DELETE_MEAL, payload: id });
    } catch (error) {
      dispatch({ type: MEALS_ERROR, payload: error });
    }
  };

  // Update Meal
  const updateMeal = async meal => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    };
    try {
      const res = await axios.put('/api/meals/' + meal.id, meal, config);
      dispatch({ type: UPDATE_MEAL, payload: res.data });
    } catch (error) {
      dispatch({ type: MEALS_ERROR, payload: error });
    }
  };

  // Set Current Meal
  const setCurrent = meal => {
    dispatch({ type: SET_CURRENT, payload: meal });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  return (
    <MealsContext.Provider
      value={{
        meals: state.meals,
        current: state.current,
        error: state.error,
        getMeals,
        addMeal,
        deleteMeal,
        updateMeal,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsState;
