const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

// get
router.get('/', function (req, res) {
  knex("user")
  .then(user => {
    res.send(user);
  });
});

// post
router.post('/', (req, res, next) => {
  const newUserEmail = req.body.email
  const newUsername = req.body.username
  knex("user")
    .insert({
      email: newUserEmail,
      username: newUsername
    })
    .returning('*')
    .then((user) => {
      res.status(201).json({
        status: 'success',
        data: user
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err.message
      })
    })
})

// put
router.put('/:email', (req, res, next) => {
  const updatedUserEmail = req.body.email
  const updatedUsername = req.body.username
  knex("user")
  .update({
    email: updatedUserEmail,
    username: updatedUsername
  })
  .where({
    email: req.params.email
  })
  .returning('*')
  .then((user) => {
    res.status(200).json({
      status: 'success',
      data: user
    })
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err.message
    })
  })
})

// delete
router.delete('/:email', (req, res, next) => {
  // const userEmail = req.params.email
  knex("user")
  .del()
  .where({
    email: req.params.email
  })
  .returning('*')
  .then((user) => {
    res.status(200).json({
      status: 'success',
      data: user
    })
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err.message
    })
  })
})

module.exports = router;
