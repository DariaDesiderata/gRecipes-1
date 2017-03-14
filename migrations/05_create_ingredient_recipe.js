exports.up = knex => {
    return knex.schema.createTable('ingredient_recipe', table => {
      table.integer('recipe_id').references('id').inTable('recipe').onDelete('cascade')
      table.integer('ingredient_id').references('id').inTable('ingredient').onDelete('cascade')
      table.float('quantity')
      table.string('uom')
        })
    }

    exports.down = knex => {
      return knex.schema.dropTableIfExists('ingredient_recipe')
    }
