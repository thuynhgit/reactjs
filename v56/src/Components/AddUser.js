import React, { Component } from 'react';

class AddUser extends Component {
    kiemTraTrangThai = () => {
        if (this.props.hienThi === true){
            return (
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới User vào hệ thống</div>
                <div className="card-body">
                    <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                    <div className="form-group">
                        <select className="custom-select" required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Mod</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="btn btn-block btn-primary">Thêm mới</div>
                    </div>
                </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                <div>
                    { this.kiemTraTrangThai() }
                    
                </div>
            </div>
        );
    }
}

export default AddUser;