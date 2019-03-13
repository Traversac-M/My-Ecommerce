import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import AddBtn from "./addbtn";
import { connect } from "react-redux";


class ProductListing extends React.Component {
  state = {
    product: [],
    token: localStorage.getItem("userToken")

  };
  componentDidMount() {
    axios
    .get(`http://127.0.0.1:8000/products/`, {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(res => {
      const product = res.data;
      this.setState({product});
    });
  }
  render() {
    const { addToCart, cartItem, product } = this.props;
    return ( <div className="row">
      {
        this.state.product.map(product =>
          <div className="col-md-4 col-sm-6 mt-5" key={product.id}>
            <div className="product-grid8">
              <div className="product-image8">
                <ul className="social">
                  <li> <AddBtn
                    cartItem={cartItem}
                    product={product}
                    addToCart={addToCart}
                  /></li>
                </ul>
                <img className="pic-1"
                       title={product.name}
                       src="https://media.materiel.net/r550/oproducts/AR201612080207_g1.jpg"
                       alt=""
                  />
                  <img className="pic-2"
                       alt=""
                       src="https://media.materiel.net/r550/oproducts/AR201612080207_g5.jpg"
                  />
              </div>
              <div className="product-content">
                <div className="price">{product.price} €</div>
                <h3 className="title"><Link to={`/Product/${ product.id}`}>{ product.name}</Link></h3>
                <Link className="all-deals mb-5" to={`/Product/${ product.id }`}>Voir page du produit</Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
