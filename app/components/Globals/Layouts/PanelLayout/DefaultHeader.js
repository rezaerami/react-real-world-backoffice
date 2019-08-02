import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import withUser from '../../../../containers/Hoc/withUser';

import defaultMessages from '../../../../constants/defaultMessages';
import routers from '../../../../constants/routers';

const DefaultHeader = props => {
  const {
    user: { username },
  } = props;
  return (
    <Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: null, width: 89, height: 25, alt: 'Real World' }}
        minimized={{ src: null, width: 30, height: 30, alt: 'Real World' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <Link to={routers.base} className="nav-link">
            {defaultMessages.welcomeUser(username)}
          </Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none">
          <NavLink to={routers.auth.logout} className="nav-link">
            {defaultMessages.logout}
          </NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  );
};

DefaultHeader.propTypes = {
  user: PropTypes.object,
};

export default withUser()(DefaultHeader);
