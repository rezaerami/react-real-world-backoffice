import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';

import messages from '../../containers/AuthContainer/messages';
import routers from '../../constants/routers';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: null,
    };

    this.handleSetEmail = this.handleSetEmail.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.handleToggleLoading = this.handleToggleLoading.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSetErrors = this.handleSetErrors.bind(this);
  }

  handleSetEmail(email) {
    this.setState({
      email,
    });
  }
  handleSetPassword(password) {
    this.setState({
      password,
    });
  }
  handleSetErrors(errors) {
    this.setState({
      errors,
    });
  }
  handleToggleLoading() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  handleLogin(e) {
    if (e) {
      e.preventDefault();
    }
    const { onLogin, history } = this.props;
    const { email, password } = this.state;
    if (email && password) {
      this.handleToggleLoading();
      onLogin({
        email,
        password,
        onSuccess: () => {
          toast.success(messages.loggedInSuccessfully);
          history.push(routers.base);
        },
        onFailed: error => {
          const { message, errors } = error;
          toast.error(message);
          this.handleSetErrors(errors);
          this.handleToggleLoading();
        },
      });
    }
  }

  renderErrors() {
    const { errors } = this.state;
    const errorsList = [];
    Object.keys(errors).forEach(error =>
      errorsList.push(
        <p key={error} className="text-danger mt-2">
          <b>{error}: </b> <span>{errors[error]}</span>
        </p>,
      ),
    );
    return <div className="mt-4">{errorsList}</div>;
  }

  render() {
    const { email, password, loading, errors } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleLogin}>
                      <h1>{messages.login}</h1>
                      <p className="text-muted">{messages.description}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          type="email"
                          placeholder={messages.email}
                          autoComplete="off"
                          onChange={e => this.handleSetEmail(e.target.value)}
                          value={email}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          type="password"
                          placeholder={messages.password}
                          autoComplete="off"
                          onChange={e => this.handleSetPassword(e.target.value)}
                          value={password}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button
                            type="submit"
                            color="primary"
                            className="px-4"
                            disabled={!!loading}
                          >
                            {messages.login}
                          </Button>
                          <Link to={routers.auth.register} className="ml-4">
                            {messages.signUp}
                          </Link>
                        </Col>
                      </Row>
                      {errors && this.renderErrors()}
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Login;
