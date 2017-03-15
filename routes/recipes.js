const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', function (req, res) {
  knex('recipe')
  .then(recipe => {
    res.send(recipe);
  });
});



module.exports = router;
