const express = require('express')
var app = express()

// const path = require('path')

const bodyParser = require("body-parser")
const user = require('./routes/users.js')
const ingredient = require('./routes/ingredients.js')
const recipe = require('./routes/recipes.js')
const step = require('./routes/steps.js')
//const ingredient_recipe = require('./routes/ingredient_recipe.js')
const review = require('./routes/reviews.js')
const cors = require('cors')

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/user', user)
app.use('/ingredient', ingredient)
app.use('/recipe', recipe)
app.use('/step', step)
app.use('/review', review)


app.listen(PORT, () => console.log('Shhhh ... listening on port  '  + PORT ))

module.exports = app
