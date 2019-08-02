import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import authActions from '../../ducks/auth/actions';
import authSelectors from '../../ducks/auth/selectors';
import coreActions from '../../ducks/core/actions';

import Auth from '../../components/Auth';

import { StyledAuthContainer } from './styles';

const AuthContainer = props => {
  const {
    login,
    history,
    register,
    purge,
    isLoggedIn,
    match: {
      params: { step },
    },
  } = props;
  return (
    <StyledAuthContainer>
      <Auth
        login={login}
        register={register}
        history={history}
        step={step}
        purge={purge}
        isLoggedIn={isLoggedIn}
      />
    </StyledAuthContainer>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
});
const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(authActions.login(payload)),
  register: payload => dispatch(authActions.register(payload)),
  purge: payload => dispatch(coreActions.purge(payload)),
});

AuthContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  login: PropTypes.func,
  register: PropTypes.func,
  purge: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthContainer),
);
