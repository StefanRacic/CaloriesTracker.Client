import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    register({
      email,
      password
    });
    console.log('Username: ' + email + ' registered');
  };

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box" onSubmit={onSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="*******"
                      className="input"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <div className="field">
                  <button
                    className="button btn-primary"
                    type="submit"
                    value="Register"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
