import React from 'react';
import { connect } from 'react-redux';
import userSelectors from '../../ducks/auth/selectors';

const withUser = () => WrappedComponent => {
  const WrappedProvider = props => <WrappedComponent {...props} />;
  const mapStateToProps = state => ({
    user: userSelectors.user(state),
  });
  return connect(
    mapStateToProps,
    null,
  )(WrappedProvider);
};
export default withUser;
