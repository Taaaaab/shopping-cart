import '../App.css';
import sc from './shopping-cart.svg';
import mm from './mm.webp';
import rp from './rp.jpeg';
import hk from './hk.webp';

const Shop = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>  
            <li><a href='/shop'>Shop</a></li>
            <li>Checkout</li>  
            <img src={sc} className="shoppingSvg" alt="shopping cart" />
          </ul> 
        </nav>
      </header>
      <h3>Welcome to the shop</h3>
      <div className='card-box'>
        <div className='card'>
          M&M's
          <img src={mm} className="candySvg" alt="m&m candy" />
          <div className='inputButtons'>
            <label id='mInput'>Quantity: </label>
            <input className='mInput' placeholder='1' />
            <button>+</button>
            <button>-</button>
          </div>
          <button className='cart-button'>Add to cart</button>
        </div>
        <div className='card'>
          Reese's Pieces
          <img src={rp} className="candySvg" alt="reeces pieces candy" />
          <div>
            <label id='rInput'>Quantity: </label>
            <input className='rInput' placeholder='1' />
            <button>+</button>
            <button>-</button>
          </div>
          <button className='cart-button'>Add to cart</button>
        </div>
        <div className='card'>
          Hershey's Kiss
          <img src={hk} className="candySvg" alt="reeces pieces candy" />
          <div> 
            <label id='hInput'>Quantity: </label>
            <input id='hInput' className='hInput' placeholder='1' />
            <button>+</button>
            <button>-</button>
          </div>
          <button className='cart-button'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
