import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Baseball FAQ</h1>
        <div className="home-links">
          <Link to="/login" className="home-link">Login</Link>
          <Link to="/register" className="home-link">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;