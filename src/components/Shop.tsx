import React, { useState } from "react";
import "../App.css";
import sc from "/shopping-cart.svg";
import mm from "/mm.webp";
import rp from "/rp.jpeg";
import hk from "/hk.webp";
import { Link } from "react-router-dom";

const Shop = () => {
  let [item1, setItem1] = useState<number>(0);
  let [item2, setItem2] = useState<number>(0);
  let [item3, setItem3] = useState<number>(0);
  let [cart, setCart] = useState<number>(0);

  const item1Increment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem1(item1 + 1);
  };

  const item1Decrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem1(item1 - 1);
  };

  const handleItem1Submit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const inputToNum = parseInt(target.value);
    setItem1((item1 = inputToNum));
  };

  const item2Increment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem2(item2 + 1);
  };

  const item2Decrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem2(item2 - 1);
  };

  const handleItem2Submit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const inputToNum = parseInt(target.value);
    setItem2((item2 = inputToNum));
  };

  const item3Increment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem3(item3 + 1);
  };

  const item3Decrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItem3(item3 - 1);
  };

  const handleItem3Submit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const inputToNum = parseInt(target.value);
    setItem3((item3 = inputToNum));
  };

  const handleItem1FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item1);
    setCart(cart + item1);
  };

  const handleItem2FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item2);
    setCart(cart + item2);
  };

  const handleItem3FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item3);
    setCart(cart + item3);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li style={{ fontSize: "1.5rem" }}>Checkout</li>
            <img src={sc} className="shoppingSvg" alt="shopping cart" />
            <div data-testid="custom-element" className="cart">
              {cart}
            </div>
          </ul>
        </nav>
      </header>
      <h2 style={{ textAlign: "center" }}>Welcome to the shop</h2>
      <div className="card-box">
        <div className="card">
          M&M's
          <img src={mm} className="candySvg" alt="m&m candy" />
          <form onSubmit={handleItem1FormSubmit}>
            <div className="inputButtons">
              <label htmlFor="mInput">Quantity: </label>
              <input
                onChange={handleItem1Submit}
                id="mInput"
                type="number"
                value={item1}
                className="mInput"
                name="mInput"
                placeholder="1"
              />
              <button onClick={item1Increment}>+</button>
              <button onClick={item1Decrement}>-</button>
            </div>
            <button type="submit" className="cart-button">
              Add to cart
            </button>
          </form>
        </div>
        <div className="card">
          Reese's Pieces
          <img src={rp} className="candySvg" alt="reece's pieces candy" />
          <form onSubmit={handleItem2FormSubmit}>
            <div className="inputButtons">
              <label id="rInput">Quantity: </label>
              <input
                onChange={handleItem2Submit}
                className="rInput"
                type="number"
                value={item2}
                placeholder="1"
              />
              <button onClick={item2Increment}>+</button>
              <button onClick={item2Decrement}>-</button>
            </div>
            <button type="submit" className="cart-button">
              Add to cart
            </button>
          </form>
        </div>
        <div className="card">
          Hershey's Kiss
          <img src={hk} className="candySvg" alt="hershey's kiss candy" />
          <form onSubmit={handleItem3FormSubmit}>
            <div className="inputButtons">
              <label id="hInput">Quantity: </label>
              <input
                onChange={handleItem3Submit}
                className="hInput"
                type="number"
                value={item3}
                placeholder="1"
              />
              <button onClick={item3Increment}>+</button>
              <button onClick={item3Decrement}>-</button>
            </div>
            <button type="submit" className="cart-button">
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
