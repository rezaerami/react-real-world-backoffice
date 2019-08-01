import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import messages from '../../../containers/ArticlesContainer/messages';
import routers from '../../../constants/routers';

import { StyledArticleAddWrapper } from './styles';
import ArticleDetails from '../ArticleDetails';
import Card from '../../Globals/Card';

class ArticleAdd extends Component {
  constructor(props) {
    super(props);

    this.handleAddArticle = this.handleAddArticle.bind(this);
  }
  handleAddArticle(payload) {
    const { onAddArticle, history } = this.props;
    const { onSuccess, onFailed, ...rest } = payload;
    onAddArticle({
      ...rest,
      onSuccess: () => {
        toast.success(messages.add.success);
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
    const { getTags } = this.props;
    return (
      <StyledArticleAddWrapper>
        <Card title={messages.add.title}>
          <ArticleDetails
            onFormSubmit={this.handleAddArticle}
            onGetTags={getTags}
          />
        </Card>
      </StyledArticleAddWrapper>
    );
  }
}

ArticleAdd.propTypes = {
  history: PropTypes.object.isRequired,
  onAddArticle: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
};

export default ArticleAdd;
