import React from 'react';
import PropTypes from 'prop-types';

import { StyledFlexBoxContainer } from './styles';

const FlexBox = props => {
  const { perSlide, children, className } = props;
  return (
    <StyledFlexBoxContainer
      perSlide={perSlide}
      className={className}
      {...this.props}
    >
      {children}
    </StyledFlexBoxContainer>
  );
};
FlexBox.propTypes = {
  perSlide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
FlexBox.defaultProps = {
  perSlide: 3.5,
};
export default FlexBox;
