import React from 'react';
import defaultMessages from '../../../constants/defaultMessages';

const BlockUiLoader = () => (
  <div className="block-ui-loader">
    <div>
      <span>{defaultMessages.loading}</span>
    </div>
  </div>
);
export default BlockUiLoader;
