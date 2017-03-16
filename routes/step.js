const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get one
router.get('/', (req, res) => {
  knex('step')
  .then(step => {
    res.send(step);
  });
});

router.get('/:recipe_id', (req, res) => {
  knex('step')
  .where('recipe_id', Number(req.params.recipe_id))
  .select('step.*')
  .then(step => {
    res.send(step)
  })
})


// post
router.post('/', (req, res, next) => {
  const newStepBody = req.body.step_body
  const newRecipe_Id = req.body.recipe_id
  knex("step")
    .insert({
      step_body: newStepBody,
      recipe_id: newRecipe_Id
    })
    .returning('*')
    .then((step) => {
      res.status(201).json({
        status: 'success',
        data: step
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
  const updatedStepBody = req.body.step_body
  const updatedRecipeId = req.body.recipe_id
  knex('step')
  .update({
    step_body: updatedStepBody,
    recipe_id: updatedRecipeId
  })
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((step) => {
    res.status(200).json({
      status: 'success',
      data: step
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
  knex('step')
  .del()
  .where({
    id: req.params.id
  })
  .returning('*')
  .then((step) => {
    res.status(200).json({
      status: 'success',
      data: step
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
