import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hienThiForm : true,
        dataUser : Data
    }
}
 doiTrangThai = () => {
   this.setState({
     hienThiForm : !this.state.hienThiForm
   })
 }

  render() {
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi = {() => this.doiTrangThai()} hienThi = {this.state.hienThiForm}/>
              <TableData dataUserProps = {this.state.dataUser}/>
              <AddUser hienThi = {this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
