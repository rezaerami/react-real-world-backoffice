import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routers from '../../constants/routers';

import { StyledArticlesWrapper } from './styles';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.validSteps = ['list', 'add', 'edit'];

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
    const { step } = this.props;

    const steps = {
      list: <h1>list</h1>,
      add: <h1>add</h1>,
      edit: <h1>edit</h1>,
    };

    return steps[step];
  }

  render() {
    const { step } = this.props;
    if (!step) {
      return null;
    }
    return <StyledArticlesWrapper>{this.renderSteps()}</StyledArticlesWrapper>;
  }
}

Articles.propTypes = {
  step: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default Articles;
