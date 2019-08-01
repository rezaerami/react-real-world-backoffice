import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */
const TableHeader = props => {
  const { headers } = props;
  return (
    <thead>
      <tr>{headers.map((value, key) => <th key={key}>{value}</th>)}</tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.array.isRequired,
};
export default TableHeader;
