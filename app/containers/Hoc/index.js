import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { withCookies } from 'react-cookie';

import coreActions from '../../ducks/core/actions';
import coreSelectors from '../../ducks/core/selectors';

import App from '../App';
import BlockUiLoader from '../../components/Globals/Loaders/BlockUiLoader';

class Hoc extends Component {
  componentDidMount() {
    const { initialize } = this.props;

    initialize();
  }
  render() {
    const { history, loading } = this.props;
    return loading ? (
      <BlockUiLoader />
    ) : (
      <Fragment>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Fragment>
    );
  }
}
Hoc.propTypes = {
  history: PropTypes.object.isRequired,
  initialize: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: coreSelectors.loading(state),
});
const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(coreActions.initialize()),
});
export default withCookies(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Hoc),
);
