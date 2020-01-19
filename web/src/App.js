import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';

import Sidebar from './components/Sidebar';
import DevList from './components/DevList';
function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get('/devs');
    setDevs(response.data);
  }

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  useEffect(loadDevs, []);

  return (
    <div id="app">
      <Sidebar onSubmit={handleAddDev} />
      <main>
        <DevList devs={devs} />
      </main>
    </div>
  );
}

export default App;
