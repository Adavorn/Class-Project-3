import { Link } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const username = localStorage.getItem("username") || "Username";
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Rules", "History", "Players", "Teams", "Stats & Analytics"];

  const questionsByCategory = {
    Rules: [
      {
        question: "What is a strikeout?",
        answer: "A strikeout occurs when a batter gets three strikes during their at-bat."
      },
      {
        question: "How many outs are in an inning?",
        answer: "There are 6 outs in an inning — 3 for each team."
      },
      {
        question: "What is the infield fly rule?",
        answer: "It's a rule to prevent unfair double plays on pop-ups with runners on base."
      },
      {
        question: "What’s the difference between a foul ball and a fair ball?",
        answer: "A fair ball lands inside the foul lines; a foul ball lands outside them."
      }
    ],
    History: [
      {
        question: "Who broke the color barrier in MLB?",
        answer: "Jackie Robinson in 1947, playing for the Brooklyn Dodgers."
      },
      {
        question: "When was the first World Series played?",
        answer: "The first World Series was held in 1903 between Boston and Pittsburgh."
      },
      {
        question: "Which team has the most championships?",
        answer: "The New York Yankees, with 27 World Series titles."
      },
      {
        question: "Who is considered the greatest baseball player of all time?",
        answer: "Many say Babe Ruth, though others argue for players like Willie Mays or Barry Bonds."
      }
    ],
    Players: [
      {
        question: "Who holds the record for most home runs?",
        answer: "Barry Bonds holds the MLB record with 762 career home runs."
      },
      {
        question: "What position does a shortstop play?",
        answer: "Between second and third base — they handle ground balls and cover a lot of range."
      },
      {
        question: "Who was the MVP of the last World Series?",
        answer: "This changes yearly — look up the current season's MVP on MLB.com."
      },
      {
        question: "What does a designated hitter do?",
        answer: "They hit in place of the pitcher but don’t play defense."
      }
    ],
    Teams: [
      {
        question: "Which team plays at Yankee Stadium?",
        answer: "The New York Yankees."
      },
      {
        question: "What are the two MLB teams based in Chicago?",
        answer: "The Chicago Cubs and the Chicago White Sox."
      },
      {
        question: "Which team recently moved cities?",
        answer: "The Oakland Athletics are planning to move to Las Vegas."
      },
      {
        question: "What are the oldest teams in MLB?",
        answer: "The Cincinnati Reds and the Atlanta Braves trace their roots back to the 1800s."
      }
    ],
    "Stats & Analytics": [
      {
        question: "What is a batting average?",
        answer: "It's a player's number of hits divided by at-bats (e.g., .300 = 30%)."
      },
      {
        question: "What does OPS stand for?",
        answer: "On-base Plus Slugging — a measure of hitting performance."
      },
      {
        question: "How is ERA calculated?",
        answer: "Earned Run Average = (Earned Runs × 9) ÷ Innings Pitched."
      },
      {
        question: "What is WAR in baseball analytics?",
        answer: "Wins Above Replacement — how many more wins a player provides than a replacement-level player."
      }
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
                {questionsByCategory[selectedCategory].map((item, i) => (
                  <li key={i}>
                    <strong>Q:</strong> {item.question}<br />
                    <span className="answer"><strong>A:</strong> {item.answer}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Select a Category to view its questions and answers.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;