import { Link } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const username = localStorage.getItem("username") || "Username";
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Category1", "Category2", "Category3", "Category4", "Category5"];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>App Title</h1>
        <div className="user-info">
          Welcome, {username}
          <Link to="/login" className="logout-link">Logout</Link>
        </div>
      </header>

      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </aside>

        <main className="dashboard-main">
          {selectedCategory ? (
            <p>Showing questions for <strong>{selectedCategory}</strong>.</p>
          ) : (
            <p>Select a Category to view its questions.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;