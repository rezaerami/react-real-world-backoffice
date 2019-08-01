import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routers from '../../constants/routers';

import Login from './Login';
import Register from './Register';

import { StyledAuthWrapper } from './styles';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.validSteps = ['login', 'register'];

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
    const { history } = this.props;
    if (!this.validSteps.includes(step)) {
      history.push(routers.auth.login);
    }
  }

  renderSteps() {
    const { step, login, register, history } = this.props;

    const steps = {
      login: <Login onLogin={login} history={history} />,
      register: <Register onRegister={register} history={history} />,
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
};

export default Auth;
