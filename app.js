var express = require('express')
var path = require('path')
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
const express = require("express")
var app = express()
const bodyParser = require("body-parser")
const user = require('./routes/user.js')
const ingredient = require('./routes/ingredient.js')
const recipe = require('./routes/recipe.js')
const step = require('./routes/step.js')
const ingredient_recipe = require('./routes/ingredient_recipe.js')
const review = require('./routes/review.js')

const PORT = process.env.PORT || 8080

app.use(express.static("public"))
app.use(bodyParser.json())
app.use('/comments', comments)
app.use('/posts', posts)
app.use('/users', users)
// app.use('/website', website) -- not using!!


app.listen(PORT, () => console.log('Shhhh ... listening on port  '  + PORT ))

module.exports = app
