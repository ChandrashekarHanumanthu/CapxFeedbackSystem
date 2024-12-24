import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitiateFeedback from "./components/InitiateFeedbackProcess";
import FeedbackScreenIE from "./components/FeedbackScreenIE";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1 className="app-header">Feedback Process System</h1>
          <nav className="app-nav">
            <ul>
              <li><a href="/initiatefeedback">Initiate Feedback</a></li>
              <li><a href="/feedback-ie">IE Feedback</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/initiatefeedback" element={<InitiateFeedback />} />
            <Route path="/feedback-ie" element={<FeedbackScreenIE />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
