import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import messages from '../../../containers/ArticlesContainer/messages';
import routers from '../../../constants/routers';

import { StyledArticleEditWrapper } from './styles';
import ArticleDetails from '../ArticleDetails';
import Card from '../../Globals/Card';
import defaultMessages from '../../../constants/defaultMessages';

class ArticleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null,
      loading: false,
    };

    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleGetArticle = this.handleGetArticle.bind(this);
    this.handleSetArticle = this.handleSetArticle.bind(this);
    this.handleEditArticle = this.handleEditArticle.bind(this);
  }

  componentDidMount() {
    const { slug } = this.props;
    this.handleGetArticle(slug);
  }

  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  handleGetArticle(slug) {
    const { onGetArticle } = this.props;
    this.handleToggleLoading();
    onGetArticle({
      slug,
      onSuccess: article => {
        this.handleSetArticle(article);
        this.handleToggleLoading();
      },
      onFailed: errors => {
        toast.error(errors.message);
        this.handleToggleLoading();
      },
    });
  }
  handleSetArticle(article) {
    this.setState({
      article,
    });
  }

  handleEditArticle(payload) {
    const { onEditArticle, history, slug } = this.props;
    const { onSuccess, onFailed, ...rest } = payload;
    onEditArticle({
      slug,
      ...rest,
      onSuccess: () => {
        toast.success(messages.edit.success);
        history.push(routers.articles.list.path);
        setTimeout(onSuccess, 0);
      },
      onFailed: errors => {
        toast.error(errors.message);
        setTimeout(onFailed, 0);
      },
    });
  }
  render() {
    const { article, loading } = this.state;
    const { getTags } = this.props;
    if (loading && !article) {
      return <p className="text-center">{defaultMessages.loading}</p>;
    }
    if (!loading && !article) {
      return null;
    }
    return (
      <StyledArticleEditWrapper>
        <Card title={messages.edit.title}>
          <ArticleDetails
            onFormSubmit={this.handleEditArticle}
            onGetTags={getTags}
            article={article}
          />
        </Card>
      </StyledArticleEditWrapper>
    );
  }
}

ArticleEdit.propTypes = {
  history: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  onEditArticle: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
  onGetArticle: PropTypes.func.isRequired,
};

export default ArticleEdit;
