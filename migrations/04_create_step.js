exports.up = knex => {
  return knex.schema.createTable('step', table => {
      table.increments(),
      table.text('step_body'),
      table.integer('recipe_id').references('id').inTable('recipe').onDelete('cascade')
    })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('step')
}
