const express = require('express')
var app = express()

// const path = require('path')

const bodyParser = require("body-parser")
const user = require('./routes/user.js')
const ingredient = require('./routes/ingredient.js')
const recipe = require('./routes/recipe.js')
const step = require('./routes/step.js')
const ingredient_recipe = require('./routes/ingredient_recipe.js')

const review = require('./routes/review.js')
const cors = require('cors')

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/user', user)
app.use('/ingredient', ingredient)
app.use('/recipe', recipe)
app.use('/step', step)
app.use('/review', review)
app.use('/ingredient_recipe', ingredient_recipe)


app.listen(PORT, () => console.log('Shhhh ... listening on port  '  + PORT ))

module.exports = app
