import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import defaultMessages from '../../../constants/defaultMessages';
import messages from '../../../containers/ArticlesContainer/messages';

const ArticleDeleteModal = props => {
  const { onAccept, onDismiss, className } = props;
  return (
    <Modal isOpen toggle={onDismiss} className={className}>
      <ModalHeader toggle={onDismiss}>{messages.delete.title}</ModalHeader>
      <ModalBody>{messages.delete.description}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onAccept}>
          {defaultMessages.submit}
        </Button>{' '}
        <Button color="secondary" onClick={onDismiss}>
          {defaultMessages.cancel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ArticleDeleteModal.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  className: PropTypes.string,
};
ArticleDeleteModal.defaultProps = {
  className: '',
};
export default ArticleDeleteModal;
