import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from 'reactstrap';

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';

const DefaultHeader = () => (
  <Fragment>
    <AppSidebarToggler className="d-lg-none" display="md" mobile />
    <AppNavbarBrand
      full={{ src: null, width: 89, height: 25, alt: 'CoreUI Logo' }}
      minimized={{ src: null, width: 30, height: 30, alt: 'CoreUI Logo' }}
    />
    <AppSidebarToggler className="d-md-down-none" display="lg" />

    <Nav className="d-md-down-none" navbar>
      <NavItem className="px-3">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem className="px-3">
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </NavItem>
      <NavItem className="px-3">
        <NavLink to="#" className="nav-link">
          Settings
        </NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <NavItem className="d-md-down-none">
        <NavLink to="#" className="nav-link">
          <i className="icon-bell" />
          <Badge pill color="danger">
            5
          </Badge>
        </NavLink>
      </NavItem>
      <NavItem className="d-md-down-none">
        <NavLink to="#" className="nav-link">
          <i className="icon-list" />
        </NavLink>
      </NavItem>
      <NavItem className="d-md-down-none">
        <NavLink to="#" className="nav-link">
          <i className="icon-location-pin" />
        </NavLink>
      </NavItem>
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav>
          <img
            src="../../assets/img/avatars/6.jpg"
            className="img-avatar"
            alt="admin@bootstrapmaster.com"
          />
        </DropdownToggle>
        <DropdownMenu right style={{ right: 'auto' }}>
          <DropdownItem header tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-bell-o" /> Updates<Badge color="info">42</Badge>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-envelope-o" /> Messages<Badge color="success">
              42
            </Badge>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-tasks" /> Tasks<Badge color="danger">42</Badge>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-comments" /> Comments<Badge color="warning">
              42
            </Badge>
          </DropdownItem>
          <DropdownItem header tag="div" className="text-center">
            <strong>Settings</strong>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-user" /> Profile
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-wrench" /> Settings
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-usd" /> Payments<Badge color="secondary">
              42
            </Badge>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-file" /> Projects<Badge color="primary">
              42
            </Badge>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <i className="fa fa-shield" /> Lock Account
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-lock" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    </Nav>
    <AppAsideToggler className="d-md-down-none" />
    {/* <AppAsideToggler className="d-lg-none" mobile /> */}
  </Fragment>
);

export default DefaultHeader;
