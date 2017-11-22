import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'rc-table';
import NewTable from './MyTable.js';

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2' },
  { name: 'Jack', age: 28, address: 'some where', key:'3' },
  { name: 'Rose', age: 36, address: 'some where', key:'4' },
  { name: 'Jack', age: 28, address: 'some where', key:'5' },
  { name: 'Rose', age: 36, address: 'some where', key:'6' },
  { name: 'Jack', age: 28, address: 'some where', key:'7' },
  { name: 'Rose', age: 36, address: 'some where', key:'8' },
  { name: 'Jack', age: 28, address: 'some where', key:'9' },
  { name: 'Rose', age: 36, address: 'some where', key:'10' }
];


class MyTable extends Component {

  onRowClick = () => {
    console.log('onRowClick======');
  }
  onRowDoubleClick = () => {
    console.log('onRowDoubleClick------');
  }

  render() {
    return (<Table
              columns={columns}
              data={data}
              useFixedHeader={true}
              scroll={{x: 500, y: 400}}
              expandIconColumnIndex={1}
              onRow={(record, index) => ({
                      onClick: this.onRowClick.bind(null, record, index),
                      onDoubleClick: this.onRowDoubleClick.bind(null, record, index),
                    })}
              />);
  }
}

ReactDOM.render(<NewTable />, document.querySelector('#app'));
import 'rc-table/dist/rc-table.css';
import './index.less';
