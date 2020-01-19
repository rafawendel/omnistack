import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ onSubmit: handleAddDev }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  let positionSwitch = false;

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        if (!positionSwitch) {
          setLatitude(latitude);
          setLongitude(longitude);
        }
        positionSwitch = true;
      },
      err => {
        console.log(err);
        if (err.code === 1) positionSwitch = true;
      },
      {
        timeout: 5000
      }
    );
  };

  // useEffect(getLocation, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await handleAddDev({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={e => {
              setGithubUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => {
              setTechs(e.target.value);
            }}
          />
        </div>
        <div className="input-group" onClick={getLocation}>
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={e => {
                setLatitude(e.target.value);
              }}
            />
          </div>
          <div className="input-block">
            <label htmlFor="latitude">Longitude</label>
            <input
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => {
                setLongitude(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}

export default Sidebar;
