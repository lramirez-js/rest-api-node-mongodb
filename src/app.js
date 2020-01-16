const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const usersRoutes = require('./routes/users')

mongoose.connect('mongodb://localhost/rest-api-example', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
  .catch(err => console.log(err))

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', usersRoutes)

// Static Files

// Error Handlers

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
} )

