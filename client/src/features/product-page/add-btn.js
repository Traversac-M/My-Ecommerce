import React from 'react'

export default function AddButton(props) {
  return <button onClick={() => props.addToCart(props.product)}
          className="btn btn-success btn-lg btn-block text-uppercase">
    <span className="fa fa-shopping-cart " /> Add to cart {
    (props.cartItem && props.cartItem.quantity)
  }</button>

}
