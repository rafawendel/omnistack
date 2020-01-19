import React from 'react';
import './DevList.css';
import Dev from './Dev';

function DevList({ devs }) {
  // devs = []
  return (
    <div className="main">
      <ul>
        {devs.map(dev => (
          <li key={dev._id} className="dev-item">
            <Dev dev={dev} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DevList;
