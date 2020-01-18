import React from 'react';

import './global.css';
import './Dev.css';

function Dev({
  imageSource = 'https://avatars2.githubusercontent.com/u/44540213?s=460&v=4',
  devName = 'Rafael',
  techs = 'JS',
  bio = 'Like to go around',
  githubSource = 'https://github.com/rafawendel'
}) {
  return (
    <div className="dev-item">
      <div className="header">
        <img src={imageSource} alt={devName} />
        <div className="user-info">
          <strong>{devName}</strong>
          <span>{techs}</span>
        </div>
      </div>
      <p>{bio}</p>
      <a href={githubSource}>Perfil no GitHub</a>
    </div>
  );
}

export default Dev;
