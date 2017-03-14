
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        { id: 1, name: 'oatmeal'},
        { id: 2, name: 'vegetable oil'},
        { id: 3, name: 'brown sugar'},
        { id: 4, name: 'honey'},
        { id: 5, name: 'vanilla extract'},
        { id: 6, name: 'salt'},
        { id: 7, name: 'sunflower seeds'},
        { id: 8, name: 'sesame seeds'},
        { id: 9, name: 'almonds'},
        { id: 10, name: 'potato'},
        { id: 11, name: 'tortilla'},
        { id: 12, name: 'chorizo'},
        { id: 13, name: 'eggs'},
        { id: 14, name: 'water'},
        { id: 15, name: 'olive oil'},
        { id: 16, name: 'avocado'},
        { id: 17, name: 'salsa'}
      ]);
    });
};
