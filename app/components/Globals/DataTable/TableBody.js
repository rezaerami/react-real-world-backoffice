import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */
const TableBody = props => {
  const { data } = props;
  return (
    <thead>
      {data.map((row, key) => (
        <tr key={key}>
          {Object.values(row).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
    </thead>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
};
export default TableBody;
