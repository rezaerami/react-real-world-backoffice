import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Row, Col } from 'reactstrap';

import defaultMessages from '../../../constants/defaultMessages';
import messages from '../../../containers/ArticlesContainer/messages';

import { StyledArticlesListWrapper } from './styles';
import Pagination from '../../Globals/Pagination';
import routers from '../../../constants/routers';
import ArticlesTable from './ArticlesTable';
import Card from '../../Globals/Card';

class ArticlesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      offset: 0,
      limit: 20,
      loading: false,
      total: 0,
    };

    this.handleSetOffset = this.handleSetOffset.bind(this);
    this.handleFindOffset = this.handleFindOffset.bind(this);
    this.handleSetTotal = this.handleSetTotal.bind(this);
    this.handleSetArticles = this.handleSetArticles.bind(this);
    this.handleGetArticles = this.handleGetArticles.bind(this);
    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handlePaginate = this.handlePaginate.bind(this);
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
  handleSetTotal(total, callback = () => {}) {
    this.setState(
      {
        total,
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
      onSuccess: data => {
        const { articles, articlesCount: total } = data;
        this.handleSetArticles(articles);
        this.handleSetTotal(total);
        this.handleToggleLoading();
      },
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

  handlePaginate(offset) {
    const { limit } = this.state;
    const { history } = this.props;
    const page = offset / limit + 1;
    history.push(`${routers.articles.list.path}/${page}`);
  }

  render() {
    const { deleteArticle } = this.props;
    const { articles, loading, total, limit, offset } = this.state;
    if (loading) {
      return <p className="text-center">{defaultMessages.loading}</p>;
    }
    return (
      <StyledArticlesListWrapper>
        <Row>
          <Col xs="12">
            <Card title={messages.title}>
              <h2>{}</h2>
              {!loading && articles.length ? (
                <ArticlesTable
                  articles={articles}
                  onDeleteArticle={deleteArticle}
                  onSetArticles={this.handleSetArticles}
                />
              ) : (
                <p className="text-center">{defaultMessages.noResult}</p>
              )}
              <Pagination
                total={total}
                limit={limit}
                offset={offset}
                onPaginate={this.handlePaginate}
              />
            </Card>
          </Col>
        </Row>
      </StyledArticlesListWrapper>
    );
  }
}

ArticlesList.propTypes = {
  history: PropTypes.object.isRequired,
  onGetArticles: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

export default ArticlesList;
