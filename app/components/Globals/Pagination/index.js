import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Pagination as ReactStrapPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

import Icon from '../Icon';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.pageinationLimit = 5;

    this.handlePaginate = this.handlePaginate.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }

  handlePaginate(page) {
    const { limit, total, onPaginate, offset: currentOffset } = this.props;
    const offset = limit * page;
    if (offset >= 0 && offset <= total && offset !== currentOffset) {
      onPaginate(offset);
    }
  }

  renderPages() {
    const { total, limit, offset } = this.props;
    const pagesCount = Math.ceil(total / limit);
    const currentPage = Math.ceil(offset / limit);
    const pages = [];

    let paginationStart = currentPage - this.pageinationLimit;
    if (paginationStart < 0) {
      paginationStart = 0;
    }
    let paginationEnd = paginationStart + this.pageinationLimit * 2;
    if (paginationEnd > pagesCount) {
      paginationStart -= paginationEnd - pagesCount;
      paginationStart = paginationStart < 0 ? 0 : paginationStart;
      paginationEnd = pagesCount;
    }

    for (let i = paginationStart; i < paginationEnd; i += 1) {
      pages.push(
        <PaginationItem
          onClick={() => this.handlePaginate(i)}
          active={currentPage === i}
          key={i}
        >
          <PaginationLink tag="button">{i + 1}</PaginationLink>
        </PaginationItem>,
      );
    }
    return (
      <Fragment>
        <PaginationItem onClick={() => this.handlePaginate(0)}>
          <PaginationLink tag="button">
            <Icon name="angle-double-left" modifier="font-awesome-icon" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => this.handlePaginate(currentPage - 1)}>
          <PaginationLink tag="button">
            <Icon name="angle-left" modifier="font-awesome-icon" />
          </PaginationLink>
        </PaginationItem>
        {pages}
        <PaginationItem onClick={() => this.handlePaginate(currentPage + 1)}>
          <PaginationLink tag="button">
            <Icon name="angle-right" modifier="font-awesome-icon" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => this.handlePaginate(pagesCount - 1)}>
          <PaginationLink tag="button">
            <Icon name="angle-double-right" modifier="font-awesome-icon" />
          </PaginationLink>
        </PaginationItem>
      </Fragment>
    );
  }

  render() {
    return <ReactStrapPagination>{this.renderPages()}</ReactStrapPagination>;
  }
}

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};
export default Pagination;
