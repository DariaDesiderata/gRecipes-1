exports.up = knex => {
    return knex.schema.createTable('review', table => {
        table.increments(),
        table.text('body'),
        table.integer('stars'),
        table.timestamp('timestamp').defaultTo(knex.fn.now() ),
        table.integer('recipe_id').references('id').inTable('recipe').onDelete('cascade')
        table.string('user_id').references('email').inTable("user").onDelete('cascade')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('review')
}
