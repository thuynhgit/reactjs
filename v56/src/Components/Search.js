import React, { Component } from 'react';

class Search extends Component {
    hienThiNut = () => {
        if(this.props.hienThi === true){
            return <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()}>Đóng lại</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick = {() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info">Tìm</div>
                    </div>
                    <div className="btn-group1">
                        { this.hienThiNut() }
                        
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;