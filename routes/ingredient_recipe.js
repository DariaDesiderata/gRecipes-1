const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', (req, res) => {
  knex('ingredient_recipe')
  .then(ingredient_recipe => {
    res.send(ingredient_recipe)
  })
})


// post
router.post('/', (req, res, next) => {
  //const newRecipeId = req.params.recipe_id
  //const newIngredientId = req.params.ingredient_id
  const newQuantity = req.body.quantity
  const newUom = req.body.uom
  knex('ingredient_recipe')
    .insert({
      recipe_id: newRecipeId,
      ingredient_id: newIngredientId,
      quantity: newQuantity,
      uom: newUom
    })
    .returning('*')
    .then((ingredient_recipe) => {
      res.status(201).json({
        status: 'success',
        data: ingredient_recipe
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
router.put('/:recipe_id', (req, res, next) => {
  const updatedQuantity = req.body.quantity
  const updatedUom = req.body.uom
  knex('ingredient_recipe')
  .update({
    quantity: updatedQuantity,
    uom: updatedUom,
  })
  .where({
    recipe_id: req.params.recipe_id
  })
  .returning('*')
  .then((ingredient_recipe) => {
    res.status(200).json({
      status: 'success',
      data: ingredient_recipe
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
router.delete('/:recipe_id', (req, res, next) => {
  knex('ingredient_recipe')
  .del()
  .where({
    recipe_id: req.params.recipe_id
  })
  .returning('*')
  .then((ingredient_recipe) => {
    res.status(200).json({
      status: 'success',
      data: ingredient_recipe
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
