import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const username = localStorage.getItem("username") || "Username";

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>App Title</h1>
        <div className="user-info">
          Welcome, {username} &nbsp;
          <Link to="/login" className="logout-link">Logout</Link>
        </div>
      </header>

      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <div className="category">Category1</div>
          <div className="category">Category2</div>
          <div className="category">Category3</div>
          <div className="category">Category4</div>
          <div className="category">Category5</div>
        </aside>

        <main className="dashboard-main">
          <p>Select a Category to view its questions.</p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;