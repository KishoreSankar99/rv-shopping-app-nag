import React from 'react'

function Cartitems(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.item.title}</div>
                    {props.item.price}
                  </div>
                  <button class=" btnbadge bg-danger rounded-pill" onClick={()=>props.removeCart(props.item)}>X</button>
                </li>
  )
}

export default Cartitems