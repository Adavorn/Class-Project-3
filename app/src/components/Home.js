import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to the Baseball FAQ</h1>
        <p className="home-subtext">Learn something new.</p>
        <div className="home-buttons">
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/register" className="home-button outline">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;