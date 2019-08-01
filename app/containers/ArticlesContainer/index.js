import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import articleActions from '../../ducks/articles/actions';

import Articles from '../../components/Articles';

import { StyledAuthContainer } from './styles';

const ArticlesContainer = props => {
  const {
    history,
    match: {
      params: { step, param },
    },
    getArticles,
  } = props;
  return (
    <StyledAuthContainer>
      <Articles
        history={history}
        step={step}
        param={param}
        getArticles={getArticles}
      />
    </StyledAuthContainer>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  getArticles: payload => dispatch(articleActions.getArticles(payload)),
});

ArticlesContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  getArticles: PropTypes.func,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ArticlesContainer),
);
