import React from 'react';
import PropTypes from 'prop-types';
import * as router from 'react-router-dom';

import { Container } from 'reactstrap';

import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

import DefaultHeader from './DefaultHeader';
import navigations from '../../../../constants/navigations';

const DefaultLayout = props => {
  const { children, location } = props;
  return (
    <div className="app">
      <AppHeader fixed>
        <DefaultHeader />
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <AppSidebarNav
            navConfig={navigations}
            router={router}
            location={location}
          />
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <Container fluid>
            <div>{children}</div>
          </Container>
        </main>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default router.withRouter(DefaultLayout);
