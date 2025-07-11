const express = require('express');
const { route } = require('./router');
// const { route } = require('./router');

const app = express();


app.use('/api/notes', route)


app.listen(5000, (req, res)=>
{
    console.log("server has started");
    
})
