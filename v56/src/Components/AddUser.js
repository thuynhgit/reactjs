import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
        //pakege to item
        // let item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThi === true){
            return (
                <div className="col">
                <form>
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới User vào hệ thống</div>
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" name="name" onChange = {(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="tel" onChange = {(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                    <div className="form-group">
                        <select className="custom-select" name="permission" onChange = {(event) => this.isChange(event)} required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Mod</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick = {(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                    </div>
                </div>
                </div>
                </form>
                </div>
            )
        }
    }
    render() {
        return (
            
                <div>
                    { this.kiemTraTrangThai() }
                    
                </div>
            
        );
    }
}

export default AddUser;