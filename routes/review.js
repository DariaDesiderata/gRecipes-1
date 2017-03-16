const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', function (req, res) {
  knex('review')
  .then(review => {
    res.send(review);
  });
});

// post
router.post('/', (req, res, next) => {
  const newBody = req.body.body
  const newStars = req.body.stars
  const newRecipeId = req.body.recipe_id
  const newUserId = req.body.user_id
  knex('review')
    .insert({
      body: newBody,
      stars: newStars,
      recipe_id: newRecipeId,
      user_id: newUserId
    })
    .returning('*')
    .then((review) => {
      res.status(201).json({
        status: 'success',
        data: review
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
router.put('/:id', (req, res, next) => {
  const updatedBody = req.body.body
  const updatedStars = req.body.stars
  const updatedRecipeId = req.body.recipe_id
  const updatedUserId = req.body.user_id
  knex('review')
  .update({
    body: newBody,
    stars: newStars,
    recipe_id: newRecipeId,
    user_id: newUserId
  })
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((review) => {
    res.status(200).json({
      status: 'success',
      data: review
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
router.delete('/:id', (req, res, next) => {
  knex('review')
  .del()
  .where({
    email: req.params.id
  })
  .returning('*')
  .then((review) => {
    res.status(200).json({
      status: 'success',
      data: review
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
