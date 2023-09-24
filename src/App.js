import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="content">
            <h1>AI-Scribe</h1>
            <p>Welcome to AI-Scribe! Enter your topic or question below to generate answers.</p>
            <div className="search-box">
                <input type="text" className="search-field" placeholder="Enter your question here..."/>
                <i className="search-icon">🔍</i>
                <button className="button">Generate Answer</button>
            </div>
            <div className="response">
                <p>Your answer will appear here...</p>
            </div>
        </div>
    </div>
  );
}

export default App;
