import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/shop">Shop</Link></li>  
          </ul> 
        </nav>
      </header>
      <h2>Welcome to our website</h2>
      <p>Free shipping for orders over $50!</p>
    </div>
  );
};

export default App;
