import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
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
          </ul>
        </nav>
      </header>
      <h1 style={{ textAlign: "center" }}>Welcome to our website</h1>
      <h2 style={{ textAlign: "center" }}>
        Free shipping for orders over $50!
      </h2>
    </div>
  );
};

export default App;
