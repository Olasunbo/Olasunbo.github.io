const express = require('express')
const app = express()

// Code here for how to set 'public' as the static folder for express
app.use(express.static(__dirname + 'public')); //Serves resources from public folder

// Code here to have the app listen on port 8080
app.listen(8080,() =>{
    console.log('Listening at 8080');
});

//..please provide a console.log message <- ??????? what's the message that it's listening?