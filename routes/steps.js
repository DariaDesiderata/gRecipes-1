const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', function (req, res) {
  knex('step')
  .then(step => {
    res.send(step);
  });
});
