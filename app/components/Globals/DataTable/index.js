import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = props => {
  const { data, headers } = props;
  return (
    <Fragment>
      <Table>
        <TableHeader headers={headers} />
        <TableBody data={data} />
      </Table>
    </Fragment>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};
export default DataTable;
