import React, { Component } from 'react';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.props.permission}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                    <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;