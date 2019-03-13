import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

class ProductPage extends React.Component {
  state = {
    allProducts: [],
    token: localStorage.getItem("userToken")
  };
  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8000/products/1`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(res => {
        const allProducts = res.data;
        this.setState({ allProducts });
      });
  }
  render() {
	const { addToCart, removeFromCart, cartItem, product } = this.props;
    console.log(this.state.allProducts);
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card bg-light mt-4 mb-3">
                <div className="product-info">
                  <div className="product-gallery">
                    <div className="product-gallery-thumbnails">
                      <ol className="thumbnails-list list-unstyled">
                        <li>
                          <img
                            src="https://media.materiel.net/r550/oproducts/AR201612080207_g2.jpg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://media.materiel.net/r550/oproducts/AR201612080207_g3.jpg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://media.materiel.net/r550/oproducts/AR201612080207_g4.jpg"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://media.materiel.net/r550/oproducts/AR201612080207_g5.jpg"
                            alt=""
                          />
                        </li>
                      </ol>
                    </div>
                    <div className="product-gallery-featured">
                      <img
                        className="img-fluid"
                        src="https://media.materiel.net/r550/oproducts/AR201612080207_g2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 add_to_cart_block">
              <div className="card bg-light mt-4 mb-3">
                <div className="card-body">
                  <h3>{this.state.allProducts.title}</h3>
                  <p className="price">{this.state.allProducts.price} €</p>

                  <div className="form-group">
                    <div className="input-group mb-3">
                      <AddBtn
                        cartItem={cartItem}
                        product={product}
                        addToCart={addToCart}
                      />
                      {
                        cartItem
                          ? <RemoveBtn
                            cartItem={cartItem}
                            product={product}
                            removeFromCart={removeFromCart}
                          />
                          : null
                      }
                    </div>
                  </div>
                  <div className="product_rassurance">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <span className="fa fa-truck fa-2x" />
                        <br />
                        Fast delivery
                      </li>
                      <li className="list-inline-item">
                        <span className="fa fa-credit-card fa-2x" />
                        <br />
                        Secure payment
                      </li>
                    </ul>
                  </div>
                  <div className="reviews_product p-3 mb-2 ">
                    3 reviews
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    (4/5)
                    <a className="pull-right" href="#reviews">
                      View all reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase">
                  <span className="fa fa-align-justify" /> Description
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {this.state.allProducts.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12" id="reviews">
            <div className="card border-light mb-3">
              <div className="card-header bg-primary text-white text-uppercase">
                <span className="fa fa-comment" /> Reviews
              </div>
              <div className="card-body">
                <div className="review">
                  <span className="glyphicon glyphicon-calendar" aria-hidden="true" />
                  <meta itemProp="datePublished" content="01-01-2016" />
                  January 01, 2018
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  by Paul Smith
                  <p className="blockquote mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                  </p>
                  <hr />
                </div>
                <div className="review">
                  <span className="glyphicon glyphicon-calendar" aria-hidden="true" />
                  <meta itemProp="datePublished" content="01-01-2016" />
                  January 01, 2018
                  <span className="fa fa-star" aria-hidden="true" />
                  <span className="fa fa-star" aria-hidden="true" />
                  <span className="fa fa-star" aria-hidden="true" />
                  <span className="fa fa-star" aria-hidden="true" />
                  <span className="fa fa-star" aria-hidden="true" />
                  by Paul Smith
                  <p className="blockquote mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
