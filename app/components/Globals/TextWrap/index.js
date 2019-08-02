import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextWrap = props => {
  const { children, maxLength, ellipsis } = props;
  return (
    <Fragment>
      {children.length > maxLength
        ? `${children.slice(0, maxLength)} ${ellipsis}`
        : children}
    </Fragment>
  );
};
TextWrap.propTypes = {
  ellipsis: PropTypes.any,
  maxLength: PropTypes.number,
  children: PropTypes.string.isRequired,
};
TextWrap.defaultProps = {
  ellipsis: '...',
  maxLength: 50,
};

export default TextWrap;
