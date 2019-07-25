import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';

const getProductData = () => 
    (axios.get('/getdata')
      .then((res) => res.data)
      .catch((error) => console.log(error)
      )
    );
const addProductAction = (product_name,product_price,image) => 
    (axios.post('/add', {product_name,product_price, image})
    .then((resp) => resp.data));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      product_name:'',
      product_price:'',
      image:''
    }
  }
  
  componentWillMount() {
    if(this.state.data === ''){
      getProductData().then((res) => {
        this.setState({
          data:res
        });
      })
    }
  }
  printData = () => {
    if(this.state.data !== ''){
     return this.state.data.map((value,key) => (<Product 
          key = {key}
          product_name = {value.product_name}
          product_price = {value.product_price}
          image = {value.image}
          />) 

      )
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
      let {product_name,product_price,image} = this.state;
      let dataTemp = [];
      let item = {};
      item.product_name = product_name;
      item.product_price = product_price;
      item.image = image;
      dataTemp = this.state.data;
      if(item.product_name !== ''){
        dataTemp.push(item);
        this.setState({
          data:dataTemp
        })
      }
      console.log(dataTemp);
      // let product_name = this.state.product_name
      // let product_price = this.state.product_price
      // let image = this.state.image
      addProductAction(product_name,product_price,image).then((response) => console.log(response))
  }
  render() {

    return (
    
      <div>
        <HeadTitle/>
          <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row">
                    {this.printData()}
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                      <div>
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
                          <button type="reset" onClick = {() => this.handleClick()} className="btn btn-primary btn-block">Them moi</button>
                      </form>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }  
}
export default App;
