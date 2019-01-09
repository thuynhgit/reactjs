import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project quan ly thanh vien bang ReactJS</h1>
                    <p className="lead">Voi du lieu JSON</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;