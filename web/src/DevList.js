import React from 'react';
import './global.css';
import './DevList.css';
import Dev from './Dev';

function DevList() {
  return (
    <div className="main">
      <ul>
        <li className="dev-item">
          <Dev />
        </li>
        <li className="dev-item">
          <Dev />
        </li>
        <li className="dev-item">
          <Dev />
        </li>
        <li className="dev-item">
          <Dev />
        </li>
      </ul>
    </div>
  );
}

export default DevList;
