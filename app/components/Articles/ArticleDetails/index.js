import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

import { StyledArticleDetailsWrapper } from './styles';
import ArticleForm from './ArticleForm';

class ArticleDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      tags: [],
      title: '',
      description: '',
      body: '',
      selectedTags: [],
    };

    this.handleSetArticle = this.handleSetArticle.bind(this);
    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleGetTags = this.handleGetTags.bind(this);
    this.handleSetTags = this.handleSetTags.bind(this);
    this.handleSetTitle = this.handleSetTitle.bind(this);
    this.handleSetDescription = this.handleSetDescription.bind(this);
    this.handleSetBody = this.handleSetBody.bind(this);
    this.handleSetSelectedTags = this.handleSetSelectedTags.bind(this);
    this.handleSelectTag = this.handleSelectTag.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }
  componentDidMount() {
    this.handleGetTags(() => {
      const { article } = this.props;
      if (article) {
        this.handleSetArticle(article);
      }
    });
  }
  handleSetArticle(article) {
    const { title, description, body, tagsList: selectedTags } = article;
    this.handleSetTitle(title);
    this.handleSetDescription(description);
    this.handleSetBody(body);
    this.handleSetSelectedTags(selectedTags);
  }

  handleGetTags(callback = () => {}) {
    const { onGetTags } = this.props;
    this.handleToggleLoading();
    onGetTags({
      onSuccess: tags => {
        this.handleToggleLoading();
        this.handleSetTags(tags, callback);
      },
      onFailed: errors => {
        toast.error(errors.message);
        this.handleToggleLoading();
      },
    });
  }
  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }
  handleSetTags(tags, callback = () => {}) {
    this.setState(
      {
        tags,
      },
      callback,
    );
  }
  handleSetTitle(title, callback = () => {}) {
    this.setState(
      {
        title,
      },
      callback,
    );
  }
  handleSetDescription(description, callback = () => {}) {
    this.setState(
      {
        description,
      },
      callback,
    );
  }
  handleSetBody(body, callback = () => {}) {
    this.setState(
      {
        body,
      },
      callback,
    );
  }
  handleSetSelectedTags(selectedTags, callback = () => {}) {
    this.setState(
      {
        selectedTags,
      },
      callback,
    );
  }
  handleSelectTag(tag) {
    const { selectedTags } = this.state;
    let newTags = [];
    if (selectedTags.includes(tag)) {
      newTags = selectedTags.filter(selectedTag => selectedTag !== tag);
    } else {
      newTags = [...selectedTags, tag];
    }
    this.handleSetTags(newTags);
  }
  handleAddTag(tag) {
    const { tags, selectedTags } = this.state;
    if (!tags.includes(tag)) {
      this.handleSetTags([...tags, tag]);
    }
    if (!selectedTags.includes(tag)) {
      this.handleSetTags([...selectedTags, tag]);
    }
  }
  render() {
    const {
      loading,
      title,
      description,
      body,
      tags,
      selectedTags,
    } = this.state;
    console.log(tags, selectedTags);
    return (
      <StyledArticleDetailsWrapper>
        <Row>
          <Col md={9}>
            <ArticleForm
              loading={loading}
              title={title}
              onSetTitle={this.handleSetTitle}
              description={description}
              onSetDescription={this.handleSetDescription}
              body={body}
              onSetBody={this.handleSetBody}
            />
          </Col>
          <Col md={3}>
            {/* {tags.length && ( */}
            {/* <TagsList */}
            {/* items={tags} */}
            {/* selectedItems={selectedTags} */}
            {/* onAddTag={this.handleAddTag} */}
            {/* onSelectTag={this.handleSelectTag} */}
            {/* /> */}
            {/* )} */}
          </Col>
        </Row>
      </StyledArticleDetailsWrapper>
    );
  }
}

ArticleDetails.propTypes = {
  onGetTags: PropTypes.func.isRequired,
  article: PropTypes.object,
};
ArticleDetails.defaultProps = {
  article: null,
};

export default ArticleDetails;
