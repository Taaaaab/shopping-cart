import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>  
            <li><a href='/shop'>Shop</a></li>  
          </ul> 
        </nav>
      </header>
      <h2>Welcome to our website</h2>
      <p>Free shipping for orders over $50!</p>
    </div>
  );
};

export default App;
