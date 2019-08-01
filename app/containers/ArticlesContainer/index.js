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
    deleteArticle,
  } = props;
  return (
    <StyledAuthContainer>
      <Articles
        history={history}
        step={step}
        param={param}
        getArticles={getArticles}
        deleteArticle={deleteArticle}
      />
    </StyledAuthContainer>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  getArticles: payload => dispatch(articleActions.getArticles(payload)),
  deleteArticle: payload => dispatch(articleActions.deleteArticle(payload)),
});

ArticlesContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  getArticles: PropTypes.func,
  deleteArticle: PropTypes.func,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ArticlesContainer),
);
