Full Stack Check List

 [ ] Generate Express App
 [ ] Create database/table
 [ ] Seed table with sample data
 [ ] List all records with GET /grecipe
 [ ] Add Bootstrap
 [ ] Show new form with /grecipe/new
 [ ] Create a record with POST /grecipe
 [ ] Show one record with GET /grecipe/:id
 [ ] Show an edit form with GET /grecipe/:id/edit
 [ ] Update a record with PUT /grecipe/:id
 [ ] Delete a record with DELETE /grecipe/:id
 [ ] Redirect on create / update / delete




01user
{ email: 'julia@child.com', name: 'Julia Child' },
{ email: 'alton@brown.com', name: "Alton Brown"},


02ingredient
{ id: '1', name: 'eggs'},
{ id: '2', name: 'flour'},
{ id: '3', name: 'chiles'}

03recipe
{id: '1', title: 'Denver Omelette', image: 'mockURL', description: 'What is a Denver omelet? Almost everyone agrees that it should have chopped onion and chopped bell pepper cooked into the egg (preferably a combination of red and green bell pepper). Most people would expect small cubes of ham in there too. Whether or not it should have cheese as a filling or a topping is up for debate. The recipe submitted here is sort of a Meat Lover's Denver Omelet. It includes crispy, crumbled bacon with the ham and vegetables. For more of a purist's Denver Omelet, just skip the bacon.', servings: '2' },
{id: '2', title: 'Breakfast Burrito', image: 'mockURL', description: 'This Southwest breakfast is quick enough for busy weekends. Or, you can try our make-ahead tip to freeze and reheat for a winning grab-and-go breakfast all week long.', servings: '4'}

04step
{ id: '1', step_body: 'Preheat over to 450 degrees.', recipe_id: '1'},
{ id: '2, step_body: 'Beat eggs, blend in milk, and stir in cheese', recipe_id: '2'}

05review
{ id: '1', body: 'Tastes great, highly recommend.', stars: '4', recipe_id: '1', user_id: 'julia@child.com'},
{ id: '2, body: 'Needs salt', stars: '3', recipe_id: '2', user_id: 'alton@brown.com'}

06ingredient_recipe
{ recipe_id: '3', ingredient_id: '1', quantity: '4', uom: '' },
{ recipe_id: '4', ingredient_id: '2', quantity: '0.5', uom: 'cups'}
{ recipe_id: '5', ingredient_id: '3', quantity: '8', uom: 'oz'}
