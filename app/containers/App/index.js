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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import authSelectors from '../../ducks/auth/selectors';

import PanelLayout from '../../components/Globals/Layouts/PanelLayout';
import PrivateRoutes from './PrivateRoutes';

import routers from '../../constants/routers';

import AuthContainer from '../AuthContainer';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    const { accessToken } = this.props;
    return (
      <Router>
        <div>
          <Route
            render={({ location }) => {
              const routes = (
                <Switch location={location}>
                  <PrivateRoutes
                    path={routers.auth.index}
                    hasPermission={!accessToken}
                    redirectTo={routers.base}
                    component={AuthContainer}
                  />
                  <PrivateRoutes
                    path={routers.base}
                    hasPermission={!!accessToken}
                    redirectTo={routers.auth.login}
                    render={props => (
                      <PanelLayout {...props}>
                        <Switch>
                          <Route
                            exact
                            path={routers.base}
                            render={() => <h1>authenticated</h1>}
                          />
                        </Switch>
                      </PanelLayout>
                    )}
                  />
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

const mapStateToProps = state => ({
  accessToken: authSelectors.accessToken(state),
});

App.propTypes = {
  accessToken: PropTypes.string,
};
export default connect(mapStateToProps)(App);
