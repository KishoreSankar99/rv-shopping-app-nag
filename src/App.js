import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cartitems from "./Cartitems";
import { useState } from "react";

function App() {
  let products = [
    {
      id:1,
      title:'Iphone',
      description:'Good classy product',
      price:100000
    },
    {
      id:2,
      title:'Samsung',
      description:'Good classy product',
      price:90000
    },
    {
      id:3,
      title:'oneplus',
      description:'Good classy product',
      price:70000
    },
    {
      id:4,
      title:'Nokia',
      description:'Good classy product',
      price:50000
    },
    {
      id:5,
      title:'Sony',
      description:'Good classy product',
      price:60000
    },
  ]
  let[cartitems,setCartitems] = useState([])
  let[total,setTotal] = useState(0)
  function handleCart(item){
    setCartitems([...cartitems,item])
    setTotal(total + item.price)
  }
  function removeCart(item){
    let itemIndex = cartitems.findIndex(obj=>item.id===obj.id)
    cartitems.splice(itemIndex,1)
    setCartitems([...cartitems])
    setTotal(total-item.price)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            {products.map((product)=>{
              return<Card handleCart={handleCart} product={product} cartitems={cartitems}/>
            })}
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row">
            <div className="col-lg-12 text-center">
              {cartitems.length>0 ? <h1>Cart</h1>: <></>}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <ol class="list-group list-group-numbered">
                {cartitems.map((item)=>{
                  return<Cartitems item={item} removeCart={removeCart} products={products}/>
                })}
              </ol>
            </div>
          </div>
          <div className="row">
            {cartitems.length>0 ? <div className="col-lg-12 text-center">
              <h1>Total:{total}</h1>
            </div> : <div className="col-lg-12 text-center"><h1>No items in your Cart</h1></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
