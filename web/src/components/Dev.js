import React from 'react';

import './Dev.css';

function Dev({ dev }) {
  const {
    avatar_url: imageSource = 'https://avatars2.githubusercontent.com/u/44540213?s=460&v=4',
    name: devName = 'Rafael',
    techs = ['JS'],
    bio = 'Like to go around',
    github_username = 'rafawendel'
  } = dev;
  return (
    <div className="dev-item">
      <div className="header">
        <img src={imageSource} alt={devName} />
        <div className="user-info">
          <strong>{devName}</strong>
          <span>{techs.join(', ')}</span>
        </div>
      </div>
      <p>{bio}</p>
      <a href={`https://github.com/${github_username}`} target="_blank" >Perfil no GitHub</a>
    </div>
  );
}

export default Dev;
