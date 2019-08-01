import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

import {
  AppAside,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

import DefaultAside from './DefaultAside';
import DefaultHeader from './DefaultHeader';

const DefaultLayout = props => {
  const { children } = props;
  return (
    <div className="app">
      <AppHeader fixed>
        <DefaultHeader />
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <AppSidebarNav />
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          {/* <AppBreadcrumb /> */}
          <Container fluid>
            <div>{children}</div>
          </Container>
        </main>
        <AppAside fixed>
          <DefaultAside />
        </AppAside>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
