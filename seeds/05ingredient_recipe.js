
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipe').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 8,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: .5,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: .5,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: 1,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: 1,
          uom: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          quantity: .25,
          uom: 'tsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
          quantity: 1.5,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 8,
          quantity: .5,
          uom: 'cups'
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          quantity: 1,
          uom: 'cups'
        },
        {
          recipe_id: 2,
          ingredient_id: 10,
          quantity: 1,
          uom: ''
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          quantity: 4,
          uom: ''
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          quantity: 8,
          uom: 'oz'
        },
        {
          recipe_id: 2,
          ingredient_id: 13,
          quantity: 4,
          uom: ''
        },
        {
          recipe_id: 2,
          ingredient_id: 14,
          quantity: 1,
          uom: 'tsp'
        },
        {
          recipe_id: 2,
          ingredient_id: 15,
          quantity: 1,
          uom: 'Tbs'
        },
        {
          recipe_id: 2,
          ingredient_id: 16,
          quantity: 1,
          uom: ''
        },
        {
          recipe_id: 2,
          ingredient_id: 17,
          quantity: .25,
          uom: 'cups'
        }
      ]);
    });
};
