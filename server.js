// ** main entry point for the application **
// ** server.js **

const express = require('express'); 
const app = express(); 
const port = 3000; 

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || port, function(){
    console.log('Now listening on port ' + port + '...');
});
