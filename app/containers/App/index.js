/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import routers from '../../constants/routers';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            render={({ location }) => {
              const routes = (
                <Switch location={location}>
                  <Route path={routers.base} render={() => <h1>Base</h1>} />
                </Switch>
              );
              return routes;
            }}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />
        </div>
      </Router>
    );
  }
}
export default App;
