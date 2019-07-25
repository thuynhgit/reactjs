import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name,product_price,image) => 
    (axios.post('/add', {product_name,product_price, image}).then((resp) => resp.data))

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state ={
            product_name:'',
            product_price:'',
            image:''
        }
    }
    
    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    handleClick = () => {
        console.log (JSON.stringify(this.state));
        let {product_name,product_price,image} = this.state
        // let product_name = this.state.product_name
        // let product_price = this.state.product_price
        // let image = this.state.image
        addProductAction(product_name,product_price,image).then((response) => console.log(response))
    }
    render() {
        return (
            <div className="contain">
                <div className="row">
                    <div className="col-8 mx-auto">
                    <form>
                        <div className="form-group">
                        <label htmlFor="product_name">Ten san pham</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="helpId" placeholder="Nhap ten san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap text</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="product_price">Gia san pham</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="helpId" placeholder="Nhap gia san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap text</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="image">Link san pham</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="helpId" placeholder="Nhap link san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap link san pham</small>
                        </div>
                        <button type="reset" onClick = {() => this.handleClick()} className="btn btn-primary">Them moi</button>
                    </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;