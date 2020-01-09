import React, { useEffect, useContext } from 'react';
import '../pages/home.css';
import hero from '../pages/hero.png';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <section className="hero is-medium bck">
      <div className="hero-section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="title">Fitness & Food</h1>
              <h2 className="subtitle">In easiest way posible</h2>
            </div>
            <div className="column is-6">
              <img className="logo" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
