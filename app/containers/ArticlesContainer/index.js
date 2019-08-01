import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Articles from '../../components/Articles';

import { StyledAuthContainer } from './styles';

const ArticlesContainer = props => {
  const {
    history,
    match: {
      params: { step },
    },
  } = props;
  return (
    <StyledAuthContainer>
      <Articles history={history} step={step} />
    </StyledAuthContainer>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

ArticlesContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ArticlesContainer),
);
