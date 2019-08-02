import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './styles';

const Icon = props => {
  const { name, size, modifier, className } = props;
  let iconName = '';
  switch (modifier) {
    case 'font-awesome-icon':
      iconName = `fa fa-${name}`;
      break;
    case 'core-ui-icon':
      iconName = `icons cui-${name}`;
      break;
    case 'flag-icon':
      iconName = `flag-icon flag-icon-${name}`;
      break;
    case 'line-icon':
      iconName = `icons icon-${name}`;
      break;
    default:
      break;
  }
  return <StyledIcon className={`${iconName} ${className}`} size={size} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  modifier: PropTypes.oneOf([
    'font-awesome-icon',
    'core-ui-icon',
    'flag-icon',
    'line-icon',
  ]),
  className: PropTypes.string,
};
Icon.defaultProps = {
  modifier: 'core-ui-icon',
  size: 10,
  className: '',
};

export default Icon;
