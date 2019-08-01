import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import { toast } from 'react-toastify';

import routers from '../../../constants/routers';
import messages from '../../../containers/ArticlesContainer/messages';

import TextWrap from '../../Globals/TextWrap';
import Icon from '../../Globals/Icon/';
import DataTable from '../../Globals/DataTable';

/* eslint-disable no-nested-ternary */
class ArticlesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleToDelete: null,
      loading: false,
    };

    this.renderData = this.renderData.bind(this);
    this.handleSetArticleToDelete = this.handleSetArticleToDelete.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.handleToggleLoading = this.handleToggleLoading.bind(this);
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

  handleSetArticleToDelete(articleToDelete, callback = () => {}) {
    this.setState(
      {
        articleToDelete,
      },
      callback,
    );
  }
  handleDeleteArticle() {
    const { onDeleteArticle, onSetArticles, articles } = this.props;
    const { articleToDelete } = this.state;
    this.handleToggleLoading();
    onDeleteArticle({
      slug: articleToDelete,
      onSuccess: () => {
        onSetArticles(
          articles.filter(article => article.slug !== articleToDelete),
        );
        this.handleSetArticleToDelete(null);
        this.handleToggleLoading();
        toast.success(messages.deletedArticle);
      },
      onFailed: error => {
        toast.error(error.message);
        this.handleSetArticleToDelete(null);
        this.handleToggleLoading();
      },
    });
  }

  renderData() {
    const { articles } = this.props;
    const data = [];
    articles.forEach(article => {
      const {
        slug,
        title,
        description,
        createdAt,
        author: { username },
      } = article;
      data.push({
        title: (
          <Link to={`${routers.articles.edit.path}${slug}`}>
            <TextWrap maxLength={20}>{title}</TextWrap>
          </Link>
        ),
        slug: (
          <Link to={`${routers.articles.edit.path}${slug}`}>
            <TextWrap maxLength={20}>{slug}</TextWrap>
          </Link>
        ),
        description: description ? (
          <TextWrap maxLength={20}>{description}</TextWrap>
        ) : (
          ''
        ),
        createdAt: <span>{createdAt}</span>,
        author: <span>{username}</span>,
        actions: (
          <ButtonGroup>
            <Link to={`${routers.articles.edit.path}${slug}`}>
              <Button color="ghost-warning" size="sm">
                <Icon name="pencil" size={16} />
              </Button>
            </Link>
            <Button
              onClick={() => this.handleSetArticleToDelete(slug)}
              color="ghost-danger"
              size="sm"
            >
              <Icon name="delete" size={16} />
            </Button>
          </ButtonGroup>
        ),
      });
    });
    return data;
  }

  render() {
    const data = this.renderData();
    return <DataTable data={data} headers={Object.keys(data[0])} />;
  }
}

ArticlesTable.propTypes = {
  articles: PropTypes.array.isRequired,
  onDeleteArticle: PropTypes.func.isRequired,
  onSetArticles: PropTypes.func.isRequired,
};

export default ArticlesTable;
