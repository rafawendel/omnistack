const axios = require('axios');
const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray.js');

module.exports = {
  async index(req, res) {
    return res.json(await Dev.find());
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: parseStringAsArray(techs),
        location: {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      });
    }

    return res.json(dev);
  }
};
