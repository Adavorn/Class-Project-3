import { Link } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const username = localStorage.getItem("username") || "Username";
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Rules", "History", "Players", "Teams", "Stats & Analytics"];

  const questionsByCategory = {
    Rules: [
      "What is a strikeout?",
      "How many outs are in an inning?",
      "What is the infield fly rule?",
      "What’s the difference between a foul ball and a fair ball?"
    ],
    History: [
      "Who broke the color barrier in MLB?",
      "When was the first World Series played?",
      "Which team has the most championships?",
      "Who is considered the greatest baseball player of all time?"
    ],
    Players: [
      "Who holds the record for most home runs?",
      "What position does a shortstop play?",
      "Who was the MVP of the last World Series?",
      "What does a designated hitter do?"
    ],
    Teams: [
      "Which team plays at Yankee Stadium?",
      "What are the two MLB teams based in Chicago?",
      "Which team recently moved cities?",
      "What are the oldest teams in MLB?"
    ],
    "Stats & Analytics": [
      "What is a batting average?",
      "What does OPS stand for?",
      "How is ERA calculated?",
      "What is WAR in baseball analytics?"
    ]
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Baseball Trivia Dashboard</h1>
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
              className={`category ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </aside>

        <main className="dashboard-main">
          {selectedCategory ? (
            <>
              <h2>{selectedCategory} Questions</h2>
              <ul>
                {questionsByCategory[selectedCategory].map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Select a Category to view its questions.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;