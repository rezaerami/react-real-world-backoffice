import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './styles';

const Grid = props => {
  const { perRow, children, className } = props;
  return (
    <StyledGrid className={className} perRow={perRow}>
      {children}
    </StyledGrid>
  );
};
Grid.propTypes = {
  perRow: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  perRow: 1,
  className: '',
};

export default Grid;
