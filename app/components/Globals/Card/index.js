import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as ReactStrapCard,
  CardBody,
  CardHeader,
  Row,
  Col,
} from 'reactstrap';

import Icon from '../../Globals/Icon/';

const Card = props => {
  const { title, additionalHeader, children, className } = props;
  return (
    <ReactStrapCard className={className}>
      <CardHeader>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={4}>
            <Icon name="align-justify" modifier="font-awesome-icon" />
            <strong className="ml-2">{title}</strong>
          </Col>
          {!!additionalHeader && (
            <Col xs={12} sm={4} className="text-right">
              {additionalHeader}
            </Col>
          )}
        </Row>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </ReactStrapCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  additionalHeader: PropTypes.node,
  className: PropTypes.string,
};
Card.defaultProps = {
  className: '',
};

export default Card;
