import React from 'react';

import './global.css';
import './App.css';

import Sidebar from './Sidebar';
import DevList from './DevList';
function App() {
  return (
    <div id="app">
      <Sidebar />
      <main>
        <DevList />
      </main>
    </div>
  );
}

export default App;
