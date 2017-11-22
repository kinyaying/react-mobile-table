import React, {Component} from 'react';

const columns = [
  { title: 'title1', dataIndex: 'a', key: 'a', width: 100 },
  { title: 'title2', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'title3', dataIndex: 'c', key: 'c', width: 150 },
  { title: 'title4', dataIndex: 'c', key: 'd', width: 150 },
  { title: 'title5', dataIndex: 'c', key: 'e', width: 150 },
  { title: 'title6', dataIndex: 'c', key: 'f', width: 150 },
  { title: 'title7', dataIndex: 'c', key: 'g', width: 150 },
  { title: 'title8', dataIndex: 'c', key: 'h', width: 150 },
  { title: 'title9', dataIndex: 'b', key: 'i', width: 150 },
  { title: 'title10', dataIndex: 'b', key: 'j', width: 150 },
  { title: 'title11', dataIndex: 'b', key: 'k', width: 150 },
  { title: 'title12', dataIndex: 'b', key: 'l', width: 100 }
];

const data = [
  { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '1' },
  { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '2' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '3' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '4' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '5' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '6' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '7' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '8' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '9' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '11' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '10' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '12' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '13' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '14' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '15' }
];

const LEFT_FIXED_COL = 2;
const TOP_FIXED_ROW = 1;

class RenderTable extends Component {

  componentDidMount() {
    this.tableContent.addEventListener("scroll",(event) => {
      var target = event.target;
      this.tableLeft.scrollTop = target.scrollTop;
      this.tableHeader.scrollLeft = target.scrollLeft;

      let self_height = target.offsetHeight;
      let scroll_top = target.scrollTop;
      let client_height = target.offsetHeight;
      console.log(1, self_height);
    },false);
    this.tableLeft.addEventListener("scroll",(event) => {
      var target = event.target;
      this.tableContent.scrollTop = target.scrollTop;
      // this.tableHeader.scrollLeft = target.scrollLeft;
    },false);
  }

  onScroll = (event) => {
    var target = event.target;
    this.tableLeft.scrollTop = target.scrollTop;
    this.tableHeader.scrollLeft = target.scrollLeft;
  }

  goTop = () => {
    this.tableContent.scrollTop = 0;
  }

  createLeftTop() {
    let leftTopArr = [];
    for(var i = 0; i < LEFT_FIXED_COL; i++) {
      leftTopArr.push(<div className="col headercol">
                        { columns[i].title }
                      </div>);
    }
    return (<div className="table-header-left">{leftTopArr}</div>);
  }

  createHeader() {
    let headerArr = [];
    for(var i = LEFT_FIXED_COL; i < columns.length; i++) {
      headerArr.push(<div className="col headercol">
                        { columns[i].title }
                     </div>);
    }
    return (<div className="table-header-right-wrapper" ref={(r) => this.tableHeader = r}><div className="table-header-right">{headerArr}</div></div>);
  }

  createLeftFixed() {
    let leftFixedArr = [];
    data.forEach(item => {
      let tempArr = [];
      for(let i = 0; i < LEFT_FIXED_COL; i++) {
        tempArr.push(<div className="col fixedcol">{ item[columns[i].dataIndex] }</div>);
      }
      leftFixedArr.push(
        <div className="fixed-row">
          { tempArr }
        </div>)
    });
    return (<div className="table-fixed-column" ref={(r) => this.tableLeft = r}><div>{leftFixedArr}</div></div>);
  }



  createTable() {
    let headerArr = [];
    data.forEach(item => {
      let tempArr = [];
      for(let i = LEFT_FIXED_COL; i < columns.length; i++) {
        tempArr.push(<div className="col">{ item[columns[i].dataIndex] }</div>);
      }
      headerArr.push(
        <div className="row">
          { tempArr }
        </div>)
    });
    return (<div className="table-content-wrapper" ref={(r) => this.tableContent = r} ><div className="table-content">{headerArr}</div></div>);
  }

  render() {
    return (
      <div className="table">
        <div className="table-header">
          { this.createLeftTop() }
          { this.createHeader() }
        </div>
        <div className="table-container">
          { this.createLeftFixed() }
          { this.createTable() }
        </div>
        <div className="back-top" onClick={this.goTop}>回到顶部</div>
      </div>
    );
  }
}

class MyTable extends Component {

  render() {
    return (<div className="table-wrapper">
              <RenderTable data={data}/>
            </div>)
  }
}

export default MyTable;
import './my-table.less';

// {
//   this.props.data.map((row, index) => {
//     console.log('row::::', row)
//     let rowDOMs = [];
//     for(var key in row) {
//       rowDOMs.push(<li key={key}>{row[key]}</li>);
//     }
//     return (<div key={index} className={`table-row ${index%2?'odd':'even'}`}>{rowDOMs}</div>);
//   })
// }
