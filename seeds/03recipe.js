
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          id: 1,
          title: 'Granola',
          image: 'https://unsplash.com/search/granola?photo=DfbrRpHTLy0',
          description: 'This recipe is a granola base to which you can add whatever dried fruit, nuts, or other tasty bits make you happy. Feel free to tweak this with other spices, a little less honey, more salt—it’s quite forgiving, and customizing your own blend is the fun of making your own.',
          servings: 16,
          user_id: 'alton@brown.com'
        },
        {
          id: 2,
          title: 'Breakfast Burritos',
          image: 'http://assets.epicurious.com/photos/5609a6246a59cdb91b5ff638/6:4/w_620%2Ch_413/355417_hires.jpg',
          description: "The inspiration for these handheld burritos came from those served at the Santa Fe Farmers Market, in New Mexico, where they are truly the early bird's reward—feasting on a portable breakfast while scoring the pick of the produce is a magical start to the day.",
          servings: 4,
          user_id: 'julia@child.com'
        },
        {
          id: 3,
          title: 'Ginger Snaps',
          image: 'http://assets.epicurious.com/photos/5609a6246a59cdb91b5ff638/6:4/w_620%2Ch_413/355417_hires.jpg',
          description: "This is my grandma's family gingersnap recipe.",
          servings: 32,
          user_id: 'julia@child.com'
        },
      ]);
    });
};
