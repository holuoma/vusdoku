// @flow
import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/es/table/style/index'

// type Props = {
//   columns: Array<*>,
//   data: Array<*>,
//   rowKey: string,
//   style: HTMLStyleElement,
// };

// const columnStyle = {
//   textAlign: 'center',
//   fontSize: '22px',
//   fontWeight: 'normal',
//   backgroundCOlor: 'red'
// };

class BaseTable extends Component {
  render() {
    console.log("suhbhjdsb", this.props)
    return (
      <Table
        {...this.props}
        columns={this.props.columns}
        dataSource={this.props.data}
        rowKey={this.props.rowKey}
      />
    );
  }
}

export default BaseTable;
