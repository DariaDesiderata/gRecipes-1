exports.up = knex => {
    return knex.schema.createTable('ingredient', table => {
        table.increments()
        table.string('name')
    })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('ingredient')
}
