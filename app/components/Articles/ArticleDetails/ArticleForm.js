import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  FormText,
  Button,
} from 'reactstrap';

import messages from '../../../containers/ArticlesContainer/messages';
import defaultMessages from '../../../constants/defaultMessages';
import routers from '../../../constants/routers';

const ArticleForm = props => {
  const {
    body,
    description,
    loading,
    onFormSubmit,
    onSetBody,
    onSetDescription,
    onSetTitle,
    title,
  } = props;
  return (
    <Form onSubmit={onFormSubmit}>
      <FormGroup row>
        <Col xs={12}>
          <Label htmlFor="slug">{messages.details.title.title}</Label>
        </Col>
        <Col xs={12}>
          <Input
            type="text"
            id="slug"
            placeholder={messages.details.title.placeholder}
            onChange={e => onSetTitle(e.target.value)}
            autoComplete="off"
            value={title}
            required
          />
          <FormText className="help-block">
            {messages.details.title.tips}
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs={12}>
          <Label htmlFor="slug">{messages.details.description.title}</Label>
        </Col>
        <Col xs={12}>
          <Input
            type="text"
            id="slug"
            placeholder={messages.details.description.placeholder}
            onChange={e => onSetDescription(e.target.value)}
            autoComplete="off"
            value={description}
            required
          />
          <FormText className="help-block">
            {messages.details.description.tips}
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs={12}>
          <Label htmlFor="slug">{messages.details.body.title}</Label>
        </Col>
        <Col xs={12}>
          <Input
            type="textarea"
            id="slug"
            placeholder={messages.details.body.placeholder}
            onChange={e => onSetBody(e.target.value)}
            autoComplete="off"
            value={body}
          />
          <FormText className="help-block">
            {messages.details.body.tips}
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs={12}>
          <Button
            color="primary"
            onClick={onFormSubmit}
            disabled={!title || !description || !body || loading}
            type="submit"
          >
            {defaultMessages.submit}
          </Button>
          <Button color="primary" outline type="button" className="ml-2">
            <Link to={routers.articles.list.path}>
              {defaultMessages.cancel}
            </Link>
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

ArticleForm.propTypes = {
  title: PropTypes.string,
  onSetTitle: PropTypes.func.isRequired,
  description: PropTypes.string,
  onSetDescription: PropTypes.func.isRequired,
  body: PropTypes.string,
  onSetBody: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onFormSubmit: PropTypes.func.isRequired,
};
ArticleForm.defaultProps = {
  title: '',
  description: '',
  body: '',
  loading: false,
};

export default ArticleForm;
