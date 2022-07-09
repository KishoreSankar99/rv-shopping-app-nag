import React from 'react'

function Card(props) {
  return (
    <div className="col-lg-3 mb-3">
              <div class="card" style={{width: '17rem'}}>
                <img class="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{props.product.title}</h5>
                  <p class="card-text">
                  {props.product.description}
                  </p>
                  <p>
                  RS:{props.product.price}
                  </p>
                  <button href="#" disabled={props.cartitems.some(obj=> obj.id === props.product.id)} class="btn btn-primary" onClick={()=>props.handleCart(props.product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
  )
}

export default Card