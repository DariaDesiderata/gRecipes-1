
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        {
          step_body: 'Preheat oven to 350 degrees. Spread seeds out on a baking sheet and toast in oven for 5–10 minutes, stirring once or twice to avoid burning.',
          recipe_id: 1
        },
        {
          step_body: 'Place oatmeal in large bowl. In a medium saucepan, heat oil, brown sugar, and honey over medium heat, until thin—about 5 minutes. Remove from heat. Add vanilla and salt. Pour mixture over oatmeal; add sunflower seeds, sesame seeds, and almonds and toss to combine.',
          recipe_id: 1
        },
        {
          step_body: 'Spread evenly on 2 baking sheets and bake 15 minutes, stirring every 5 minutes. Serve with yogurt and berries.',
          recipe_id: 1
        },
        {
          step_body: 'Preheat oven to 350°F with rack in middle. Cut 4 (12-by 8-inch) sheets of foil.',
          recipe_id: 2
        },
        {
          step_body: 'Cook potato in a small pot of salted boiling water until just tender, about 5 minutes. Drain.',
          recipe_id: 2
        },
        {
          step_body: 'Wrap tortillas tightly in a large sheet of foil and warm in oven until heated through, 10 to 15 minutes.',
          recipe_id: 2
        },
        {
          step_body: 'Meanwhile, cook chorizo in an 8-inch heavy skillet over medium heat, stirring and breaking it up, until just cooked through, 3 to 5 minutes. Add potato and cook over medium-low heat, stirring, until tender and lightly browned, about 3 minutes. Remove from heat and cover to keep warm.',
          recipe_id: 2
        },
        {
          step_body: 'Whisk together eggs, water, 1/4 teaspoon salt, and 1/8 teaspoon pepper in a medium bowl. Heat oil in a small nonstick skillet over medium heat until hot. Add egg mixture and cook, stirring to scramble, until just cooked through. Remove from heat.',
          recipe_id: 2
        },
        {
          step_body: 'Put a tortilla on 1 sheet of foil. Spoon one fourth of chorizo mixture, one fourth of eggs, one fourth of cheese, one fourth of avocado, and then salsa to taste in vertical rows across center, leaving room to fold over bottom and sides. Fold bottom of tortilla over most of filling, then fold over sides, overlapping them. If desired, fold top down (otherwise, filling can be left exposed). Wrap foil around burrito, leaving top exposed. Make 3 more burritos in same manner and serve hot.',
          recipe_id: 2
        }
      ]);
    });
};
