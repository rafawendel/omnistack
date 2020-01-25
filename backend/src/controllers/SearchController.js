const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray.js');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const devs = await Dev.find({
      techs: {
        $in: parseStringAsArray(techs)
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ devs });
  }
};
