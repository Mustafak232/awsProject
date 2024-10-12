import React from 'react';
import './App.css'; // assuming your styles are in App.css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Amplify App</h1>
        <img
          src="https://preview.redd.it/2yxc0ymalg061.jpg?width=1080&crop=smart&auto=webp&s=29985c2e747568a13c6328a6fd5cadab11c52001"
          className="App-logo"
          alt="Chimpanzee"
          style={{ width: '400px', height: 'auto', borderRadius: '10px' }}
        />
        <p>Got You good</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
