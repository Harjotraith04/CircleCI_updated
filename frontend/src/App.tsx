import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hello');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to backend');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my APPD Project : Circle CI</h1>
        <p>Message from backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
