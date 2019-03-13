import React from 'react'
import { connect } from 'react-redux'

function Cart(props) {
  return <div className="card shopping-cart">
    <div className="card-header bg-dark text-light">
      <span className="fa fa-shopping-cart " aria-hidden="true"/> Panier
    </div>
        <div className="card-body">
					{
            props.cart.map(item =>
							<div className="row"key={item.image}>
            <div className="col-12 col-sm-12 col-md-2 text-center" >
              <img src="https://media.materiel.net/r550/oproducts/AR201612080207_g3.jpg"
                   alt="" width="120" height="120"/>
            </div>

            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
              <h4 className="product-name"><strong>{item.name}</strong></h4>
              <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                <div className="col-3 col-sm-3 col-md-6 text-md-right price">
                  <h6><strong> {item.price}<span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="quantity">
                    <button onClick={() => props.addToCart(item)} className="plus"
                    >+
                    </button>
                    <input type="number" step="1" max="99" min="1" defaultValue={item.quantity} title="Qty" className="qty"
                           size="4"/>
                    <button onClick={() => props.removeFromCart(item)} className="minus"
                    >-
                    </button>
                  </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                  <button onClick={() => props.removeAllFromCart(item)} className="btn btn-outline-danger btn-xs">
                    <span className="fa fa-trash" aria-hidden="true"/>
                  </button>
                </div>
              </div>
            </div>
            <hr/>
          </div>)
					}
          <div className="card-footer">
            <div className="pull-right checkout">
              <a href="/checkout" className="btn btn-success pull-right">Checkout</a>
            </div>
          </div>
        </div>
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
