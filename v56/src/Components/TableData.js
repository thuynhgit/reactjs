import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
    <TableDataRow 
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        editFunClick={(user) => this.props.editFun(value)} 
        id = {value.id}
        name = {value.name} 
        key={key} stt={key} 
        tel={value.tel} 
        permission={ value.permission }
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        />
        ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    <tr>
                        <td  />
                        <td />
                        <td />
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;