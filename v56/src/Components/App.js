import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hienThiForm : false,
        dataUser : [],
        searchText : '',
        editUserStatus: false,
        userEditObject:{}

    }
  }
  componentWillMount(){
    //kiem tra xem co localstorage chua
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(Data));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        dataUser:temp
      })
    }
  }
  deleteUser = (idUser) => {
    var tempData = this.state.dataUser.filter(item => item.id !== idUser);
      this.setState({
        dataUser:tempData
      })
      //day vao du lieu
      localStorage.setItem('userData', JSON.stringify(tempData));
  }
  getUserEditInfoApp = (info) =>{
    this.state.dataUser.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.dataUser));

  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }
  editUser = (user) => {
    this.setState({
      userEditObject:user
    });

  }
  getNewUserData = (name, tel, permission) => {
    var item = {};

      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.permission = permission;
    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser:items
    });
    localStorage.setItem('userData', JSON.stringify(items));

  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
  doiTrangThai = () => {
   this.setState({
     hienThiForm : !this.state.hienThiForm
   })
 }

  render() {
    // localStorage.setItem('userData', JSON.stringify(Data));
    var ketqua = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1){
        // console.log(typeof(this.state.searchText));
        ketqua.push(item);
        }
      })
    // console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
              ketNoi = {() => this.doiTrangThai()} 
              hienThi = {this.state.hienThiForm} 
              getTextSearchProps = {(dl) => this.getTextSearch(dl)}
              editUserStatus={ this.state.editUserStatus }
              changeEditUserStatus = {() => this.changeEditUserStatus()}
              userEditObject={this.state.userEditObject}
              />
              <TableData 
                deleteUser = {(idUser)=> this.deleteUser(idUser)}
                editFun={(user) => this.editUser(user)} 
                dataUserProps = {ketqua}
                changeEditUserStatus = {() => this.changeEditUserStatus()}
                
                />
              <AddUser hienThi = {this.state.hienThiForm} add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
