import React, { useEffect, Fragment, useContext } from 'react';
import MealsContext from '../context/meals/mealsContext';
import AuthContext from '../context/auth/authContext';
import MealItem from '../components/meals/MealItem';
import MealForm from '../components/meals/MealForm';

const CalorieTracker = () => {
  const mealsContext = useContext(MealsContext);
  const authContext = useContext(AuthContext);
  const { getMeals, meals } = mealsContext;
  let sum = 0;

  useEffect(() => {
    authContext.loadUser();
    getMeals();
    // eslint-disable-next-line
  }, []);

  if (meals !== null) {
    meals.map(meal => {
      sum += parseFloat(meal.calories);
    });
  }

  return (
    <Fragment>
      {meals !== null ? (
        <div className="background">
          <div className="container">
            <div className="columns is-desktop  is-centered calories-section">
              <div className="column is-3 has-text-centered">
                <MealForm />
              </div>
              <div className="column is-4">
                {meals.map(meal => (
                  <MealItem meal={meal} key={meal.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="sum">
            <div className="box">
              <h1>Total Calories: {sum}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="container tst">
          <progress className="progress is-large is-primary" max="100">
            30%
          </progress>
        </div>
      )}
    </Fragment>
  );
};

export default CalorieTracker;
