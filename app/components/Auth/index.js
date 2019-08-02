import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routers from '../../constants/routers';

import Login from './Login';
import Register from './Register';
import Logout from './Logout';

import { StyledAuthWrapper } from './styles';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.validSteps = ['login', 'register', 'logout'];

    this.handleValidateStep = this.handleValidateStep.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
  }
  componentDidMount() {
    const { step } = this.props;
    this.handleValidateStep(step);
  }
  componentWillReceiveProps(nextProps) {
    const { step } = nextProps;
    const { step: currentStep } = nextProps;
    if (step !== currentStep) {
      this.handleValidateStep(step);
    }
  }

  handleValidateStep(step) {
    const { history, isLoggedIn } = this.props;
    const redirectTo = isLoggedIn ? routers.base : routers.auth.login;
    if (!this.validSteps.includes(step)) {
      history.replace(redirectTo);
    } else if (
      (step === 'logout' && !isLoggedIn) ||
      (step !== 'logout' && isLoggedIn)
    ) {
      history.replace(redirectTo);
    }
  }

  renderSteps() {
    const { step, login, register, history, purge } = this.props;

    const steps = {
      login: <Login onLogin={login} history={history} />,
      register: <Register onRegister={register} history={history} />,
      logout: <Logout onPurge={purge} history={history} />,
    };

    return steps[step];
  }

  render() {
    const { step } = this.props;
    if (!step) {
      return null;
    }
    return <StyledAuthWrapper>{this.renderSteps()}</StyledAuthWrapper>;
  }
}

Auth.propTypes = {
  step: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  purge: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

export default Auth;
