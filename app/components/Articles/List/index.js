import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// import DataTable from '../../Globals/DataTable';

import { StyledArticlesListWrapper } from './styles';

class ArticlesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      offset: 0,
      limit: 20,
      loading: false,
    };

    this.handleSetOffset = this.handleSetOffset.bind(this);
    this.handleFindOffset = this.handleFindOffset.bind(this);
    this.handleGetArticles = this.handleGetArticles.bind(this);
    this.handleToggleLoading = this.handleToggleLoading.bind(this);
  }
  componentDidMount() {
    const { page } = this.props;
    this.handleFindOffset(page, this.handleGetArticles);
  }
  componentWillReceiveProps(nextProps) {
    const { page } = nextProps;
    const { page: currentPage } = this.props;
    if (page !== currentPage) {
      this.handleFindOffset(page, this.handleGetArticles);
    }
  }

  handleSetOffset(offset, callback = () => {}) {
    this.setState(
      {
        offset,
      },
      callback,
    );
  }
  handleSetArticles(articles, callback = () => {}) {
    this.setState(
      {
        articles,
      },
      callback,
    );
  }
  handleFindOffset(page, callback = () => {}) {
    const { limit } = this.state;
    this.handleSetOffset((page - 1) * limit, callback);
  }

  handleGetArticles() {
    const { offset, limit } = this.state;
    const { onGetArticles } = this.props;
    this.handleToggleLoading();
    onGetArticles({
      offset,
      limit,
      onSuccess: articles =>
        this.handleSetArticles(articles, this.handleToggleLoading),
      onFailed: errors => {
        this.handleToggleLoading();
        toast.error(errors.message);
      },
    });
  }

  handleToggleLoading(callback = () => {}) {
    const { loading } = this.state;
    this.setState(
      {
        loading: !loading,
      },
      callback,
    );
  }

  render() {
    const { articles } = this.state;
    console.log('articles', articles);
    return <StyledArticlesListWrapper>list</StyledArticlesListWrapper>;
  }
}

ArticlesList.propTypes = {
  onGetArticles: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

export default ArticlesList;
