import React from 'react';

const CalorieTracker = () => {
  return (
    <div className="container">
      <div className="columns is-desktop  is-centered calories-section">
        <div className="column is-3 has-text-centered">
          <div class="box add-form">
            <input
              type="text"
              className="input"
              placeholder="Meal Name"
              required
            />
            <input
              type="number"
              className="input"
              placeholder="Calories"
              required
            />
            <a className="button btn-primary" type="submit">
              Add Meal
            </a>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <h1>Table</h1>
          </div>
          <div className="box">
            <h1>Table</h1>
          </div>
          <div className="box">
            <h1>Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieTracker;
