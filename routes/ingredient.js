const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', function (req, res) {
  knex('ingredient')
  .then(ingredient => {
    res.send(ingredient);
  });
});

router.get('/:id', (req, res) => {
  knex('ingredient')
  .join('ingredient_recipe', 'ingredient.id', 'ingredient_recipe.ingredient_id')
  .join('recipe', 'ingredient_recipe.recipe_id', 'recipe.id')
  .select(
    'recipe.title as recipe',
    'ingredient.name as name',
    'ingredient_recipe.quantity as quantity',
    'ingredient_recipe.uom as uom'
  )
  .then(results => {
    res.send(results)
  })


  })

// post
router.post('/', (req, res, next) => {
  const newId = req.params.id
  const newName = req.body.name
  knex('ingredient')
    .insert({
      id: newId,
      name: newName
    })
    .returning('*')
    .then((ingredient) => {
      res.status(201).json({
        status: 'success',
        data: ingredient
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
  const updatedId = req.params.id
  const updatedName = req.body.name
  knex('ingredient')
  .update({
    id: updatedId,
    name: updatedName
  })
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((ingredient) => {
    res.status(200).json({
      status: 'success',
      data: ingredient
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
  knex('ingredient')
  .del()
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((ingredient) => {
    res.status(200).json({
      status: 'success',
      data: ingredient
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
