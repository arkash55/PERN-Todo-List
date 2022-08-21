require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');
const morgan = require('morgan');
const notes_router = require('./routes/todo_router');

// env stuff
const port = process.env.SERVER_PORT || 3001;





//listen to server
app.listen(port, () => {
    console.log(`Listening to server at port ${port}`)
});


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//middleware routes
app.use('/todo', notes_router);