exports.up = knex => {
    return knex.schema.createTable('recipe', table => {
        table.increments(),
        table.string('title'),
        table.string('image'),
        table.text('description'),
        table.integer('servings'),
        table.timestamp('timestamp').defaultTo(knex.fn.now() ),
        table.string('user_id').references('email').inTable("user").onDelete('cascade')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('recipe')
}
