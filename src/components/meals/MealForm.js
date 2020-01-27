import React, { useState, useContext, useEffect } from 'react';
import MealsContext from '../../context/meals/mealsContext';

const MealForm = () => {
  const mealsContext = useContext(MealsContext);
  const { addMeal, current, updateMeal, clearCurrent } = mealsContext;

  useEffect(() => {
    if (current !== null) {
      setMeal(current);
    } else {
      setMeal({
        name: '',
        calories: ''
      });
    }
  }, [mealsContext, current]);

  const [meal, setMeal] = useState({
    name: '',
    calories: ''
  });

  const { name, calories } = meal;

  const onChange = e => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addMeal(meal);
    } else {
      updateMeal(meal);
      clearCurrent();
    }
    setMeal({
      name: '',
      calories: ''
    });
  };
  return (
    <form className="box add-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        className="input"
        placeholder="Meal Name"
        required
      />
      <input
        type="number"
        name="calories"
        value={calories}
        onChange={onChange}
        className="input"
        placeholder="Calories"
        min={0}
        required
      />
      {current ? (
        <div>
          <button className="button btn-primary" type="submit">
            Edit Meal
          </button>
          <button className="button btn-danger" onClick={() => clearCurrent()}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="button btn-primary" type="submit">
          Add Meal
        </button>
      )}
    </form>
  );
};

export default MealForm;
