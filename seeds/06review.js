
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {
          body: 'Great recipe. My new favorite!',
          stars: 5,
          recipe_id: 1,
          user_id: 'joe@aol.com'
        },
        {
          body: 'Better than Santiagos!',
          stars: 5,
          recipe_id: 2,
          user_id: 'suzie@yahoo.com'
        }
      ]);
    });
};
