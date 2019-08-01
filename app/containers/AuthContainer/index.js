import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import authActions from '../../ducks/auth/actions';

import Auth from '../../components/Auth';

import { StyledLoginContainer } from './styles';

const AuthContainer = props => {
  const { login, history, register } = props;
  return (
    <StyledLoginContainer>
      <Auth login={login} register={register} history={history} />
    </StyledLoginContainer>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(authActions.login(payload)),
  register: payload => dispatch(authActions.register(payload)),
});

AuthContainer.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
  register: PropTypes.func,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthContainer),
);
