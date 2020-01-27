import React, { useContext } from 'react';
import MealsContext from '../../context/meals/mealsContext';

const MealItem = ({ meal }) => {
  const mealsContext = useContext(MealsContext);
  const { deleteMeal, setCurrent, clearCurrent } = mealsContext;
  const { name, id } = meal;

  const onDelete = () => {
    deleteMeal(id);
    clearCurrent();
  };
  const onSetCurrent = () => {
    setCurrent(meal);
  };
  return (
    <div className="box meal test">
      <a>
        {meal !== null ? (
          name
        ) : (
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        )}
      </a>
      <div className="icons">
        <a className="edit" onClick={onSetCurrent}>
          <i className="fas fa-edit"></i>
        </a>
        <a className="remove" onClick={onDelete}>
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default MealItem;
