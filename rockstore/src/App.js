import { Link, NavLink } from "react-router-dom";

function App() {
  return (
  <div className="App">
      <div className="nav">
        <h1 className="logo">
          Rock <span>STORE</span>
        </h1>
        <nav>
          <ul>
            <li> 
              <Link to= "/">Home</Link>
            </li>

          </ul>
        </nav>
      </div>
  </div>
);
}
export default App;
