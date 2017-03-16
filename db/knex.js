const environment = process.env.NODE_ENV ||"development"
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = knex


// or ... const knex = require ('knex')
// module.exports = knex(config)
