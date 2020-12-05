require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL), { useUnifiedTopology: true }
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to DB'))


app.use(express.json());
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


app.listen(3001, () => console.log('Server Started'))
    