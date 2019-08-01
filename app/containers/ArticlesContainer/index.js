import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import articleActions from '../../ducks/articles/actions';
import tagsActions from '../../ducks/tags/actions';

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
    addArticles,
    getTags,
  } = props;
  return (
    <StyledAuthContainer>
      <Articles
        history={history}
        step={step}
        param={param}
        getArticles={getArticles}
        deleteArticle={deleteArticle}
        addArticles={addArticles}
        getTags={getTags}
      />
    </StyledAuthContainer>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  getArticles: payload => dispatch(articleActions.getArticles(payload)),
  deleteArticle: payload => dispatch(articleActions.deleteArticle(payload)),
  addArticles: payload => dispatch(articleActions.addArticle(payload)),
  getTags: payload => dispatch(tagsActions.getTags(payload)),
});

ArticlesContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  getArticles: PropTypes.func,
  deleteArticle: PropTypes.func,
  addArticles: PropTypes.func,
  getTags: PropTypes.func,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ArticlesContainer),
);
