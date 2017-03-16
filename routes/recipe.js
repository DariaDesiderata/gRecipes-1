const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// original GET
// get
// router.get('/', function (req, res) {
//   knex('recipe')
//   .then(recipe => {
//     res.send(recipe);
//   });
// });

// get all plus average of stars
// group by
// needs separate identifier

router.get('/', (req, res) => {
  knex('recipe')
  .leftJoin('review', {'recipe.id': 'review.recipe_id'})
  .avg('stars')
  .groupBy('recipe.id')
  .select('recipe.*')
  .then(recipes => {
    res.send(recipes);
  });
});

// router.get('/:id', (req, res) => {
//   // var id = Number(req.params.id)
//   knex('recipe')
//   .first()
//   .where({
//     id: Number(req.params.id)
//   })
//   .join('review', {'recipe.id': 'review.recipe_id'})
//   .avg('stars')
//   .groupBy('recipe.id')
//   .select('recipe.*')
//   .then(recipe => {
//     res.send(recipe)
//   })
// })


// post
router.post('/', (req, res, next) => {
  const newTitle = req.body.title
  const newImage = req.body.image
  const newDescription =req.body.description
  const newServings = req.body.servings
  knex('recipe')
  .insert({
    title: newTitle,
    image: newImage,
    description: newDescription,
    servings: newServings
  })
  .returning('*')
  .then((recipe) => {
    res.status(201).json({
      status: 'success',
      data: recipe
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
  const updatedTitle = req.body.title
  const updatedImage = req.body.image
  const updatedDescription = req.body.description
  const updatedServings = req.body.servings
  const updatedUser_Id = req.body.user_id
  knex('recipe')
  .update({
    title: updatedTitle,
    image: updatedImage,
    description: updatedDescription,
    servings: updatedServings,
    user_id: updatedUser_Id
  })
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((recipe) => {
    res.status(200).json({
      status: 'success',
      data: err.message
    })
  })
})

// delete
router.delete('/:id', (req, res, next) => {
  knex('recipe')
  .del()
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((recipe) => {
    res.status(200).json({
      status: 'success',
      data: recipe
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
