import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
const Spinner = props => {
  const { className } = props;
  return (
    <div className={className}>
      <span className="d-inline-block text-primary-brand-color spinner">
        <Icon name="spinner" size={2} />
      </span>
    </div>
  );
};
Spinner.propTypes = {
  className: PropTypes.string,
};
export default Spinner;
