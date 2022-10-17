import React, {useState} from 'react';
import '../App.css';
import sc from './shopping-cart.svg';
import mm from './mm.webp';
import rp from './rp.jpeg';
import hk from './hk.webp';

const Shop = () => {
  let [item1, setItem1] = useState(0);
  let [item2, setItem2] = useState(0);
  let [item3, setItem3] = useState(0);
  let [cart, setCart] = useState(0);

  const item1Increment = (e) => {
    e.preventDefault();
    setItem1(item1 + 1);
  };

  const item1Decrement = (e) => {
    e.preventDefault();
    setItem1(item1 - 1);
  };

  const handleItem1Submit = (e) => {
    setItem1(item1 = e.target.value);
  };

  const item2Increment = (e) => {
    e.preventDefault();
    setItem2(item2 + 1);
  };

  const item2Decrement = (e) => {
    e.preventDefault();
    setItem2(item2 - 1);
  };

  const handleItem2Submit = (e) => {
    setItem2(item2 = e.target.value);
  };

  const item3Increment = (e) => {
    e.preventDefault();
    setItem3(item3 + 1);
  };

  const item3Decrement = (e) => {
    e.preventDefault();
    setItem3(item3 - 1);
  };

  const handleItem3Submit = (e) => {
    setItem3(item3 = e.target.value);
  };

  const handleItem1FormSubmit = (e) => {
    e.preventDefault();
    console.log(item1);
    setCart(cart + item1);
  };

  const handleItem2FormSubmit = (e) => {
    e.preventDefault();
    console.log(item2);
    setCart(cart + item2);
  };

  const handleItem3FormSubmit = (e) => {
    e.preventDefault();
    console.log(item3);
    setCart(cart + item3);
  };


  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>  
            <li><a href='/shop'>Shop</a></li>
            <li>Checkout</li>  
            <img src={sc} className="shoppingSvg" alt="shopping cart" />
            <div>{cart}</div>
          </ul> 
        </nav>
      </header>
      <h3>Welcome to the shop</h3>
      <div className='card-box'>
        <div className='card'>
          M&M's
          <img src={mm} className="candySvg" alt="m&m candy" />
          <form onSubmit={handleItem1FormSubmit}>
            <div className='inputButtons'>
              <label htmlFor='mInput'>Quantity: </label>
              <input onChange={handleItem1Submit} id='mInput' type='number' value={item1} className='mInput' name='mInput' placeholder='1' />
              <button onClick={item1Increment}>+</button>
              <button onClick={item1Decrement}>-</button>
            </div>
            <button type='submit' className='cart-button'>Add to cart</button>
          </form>
        </div>
        <div className='card'>
          Reese's Pieces
          <img src={rp} className="candySvg" alt="reece's pieces candy" />
          <form onSubmit={handleItem2FormSubmit}>
            <div className='inputButtons'>
              <label id='rInput'>Quantity: </label>
              <input onChange={handleItem2Submit} className='rInput' type='number' value={item2} placeholder='1' />
              <button onClick={item2Increment}>+</button>
              <button onClick={item2Decrement}>-</button>
            </div>
            <button type='submit' className='cart-button'>Add to cart</button>
          </form>
        </div>
        <div className='card'>
          Hershey's Kiss
          <img src={hk} className="candySvg" alt="hershey's kiss candy" />
          <form onSubmit={handleItem3FormSubmit}>
            <div className='inputButtons'>
              <label id='hInput'>Quantity: </label>
              <input onChange={handleItem3Submit} className='hInput' type='number' value={item3} placeholder='1' />
              <button onClick={item3Increment}>+</button>
              <button onClick={item3Decrement}>-</button>
            </div>
            <button type='submit' className='cart-button'>Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
