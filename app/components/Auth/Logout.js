import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import defaultMessages from '../../constants/defaultMessages';
import routers from '../../constants/routers';
import messages from '../../containers/AuthContainer/messages';

/* eslint-disable react/prefer-stateless-function */
class Logout extends Component {
  componentDidMount() {
    const { onPurge, history } = this.props;
    onPurge({
      onSuccess: () => {
        toast.success(messages.logout.success);
        setTimeout(() => history.replace(routers.auth.login));
      },
      onFailed: () => {
        toast.success(defaultMessages.promiseFailed);
        setTimeout(() => history.replace(routers.base));
      },
    });
  }
  render() {
    return <p className="text-center">{defaultMessages.logout.description}</p>;
  }
}

Logout.propTypes = {
  history: PropTypes.object.isRequired,
  onPurge: PropTypes.func.isRequired,
};

export default Logout;
