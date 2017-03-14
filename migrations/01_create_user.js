exports.up = knex => {
    return knex.schema.createTable("user", table => {
        table.string('email').primary(),
        table.string('username')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists("user")
}
