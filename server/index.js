require('dotenv').config({path:'../.env'});
const express = require('express');
const app = express()
const port = process.env.SERVER_PORT || 3000;



app.listen(port, () => {
    console.log(`Listening to server at port ${port}`)
});