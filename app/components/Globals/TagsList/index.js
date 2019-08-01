import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, InputGroup, Input, Button } from 'reactstrap';

import {
  StyledTagsListWrapper,
  StyledTagsListItemsWrapper,
  StyledTagsListItem,
} from './styles';
import Icon from '../Icon';
import defaultMessages from '../../../constants/defaultMessages';

class TagsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tag: '',
    };

    this.handleSetTag = this.handleSetTag.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }
  handleSetTag(tag) {
    this.setState({
      tag,
    });
  }

  handleAddTag(e) {
    if (e) {
      e.preventDefault();
    }
    const { tag } = this.state;
    const { onAddTag } = this.props;
    onAddTag(tag);
    this.handleSetTag('');
  }

  renderTags() {
    const { tags, selectedTags, onSelectTag } = this.props;
    const tagsList = [];
    tags.forEach(tag => {
      const active = selectedTags.includes(tag);
      tagsList.push(
        <StyledTagsListItem
          className="mb-2"
          key={tag}
          onClick={() => onSelectTag(tag)}
        >
          <Icon
            name={active ? 'check-square-o' : 'square-o'}
            size={30}
            modifier="font-awesome-icon"
            className="text-primary"
          />
          <span className="pl-2">{tag}</span>
        </StyledTagsListItem>,
      );
    });
    return <StyledTagsListItemsWrapper>{tagsList}</StyledTagsListItemsWrapper>;
  }
  render() {
    const { tags } = this.props;
    const { tag } = this.state;
    return (
      <StyledTagsListWrapper>
        <Form onSubmit={this.handleAddTag}>
          <FormGroup row>
            <Col xs={12}>
              <InputGroup>
                <Input
                  type="text"
                  onChange={e => this.handleSetTag(e.target.value)}
                  autoComplete="off"
                  placeholder={defaultMessages.addTag}
                  value={tag}
                />
                <Button
                  color="primary"
                  type="submit"
                  onClick={this.handleAddTag}
                  disabled={!tag}
                >
                  {defaultMessages.submit}
                </Button>
              </InputGroup>
            </Col>
          </FormGroup>
        </Form>
        {!!tags.length && <div>{this.renderTags()}</div>}
      </StyledTagsListWrapper>
    );
  }
}

TagsList.propTypes = {
  tags: PropTypes.array,
  selectedTags: PropTypes.array,
  onSelectTag: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
};
TagsList.defaultProps = {
  tags: [],
  selectedTags: [],
};
export default TagsList;
