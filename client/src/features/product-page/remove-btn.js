import React from 'react'

export default function RemoveButton(props) {
  return <button onClick={() => props.removeFromCart(props.cartItem)}
                 className="btn btn-success btn-lg btn-block text-uppercase">
    <span className="fa fa-shopping-cart" />Remove</button>
}
