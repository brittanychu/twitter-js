const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use('/', function(req, res, next){
    console.log('running root');
    next();
});

app.use('/news', function (req, res, next){
    console.log('running subpages')
    next();
});

app.get('/', function(req, res, next){
    res.send('Hello World!')
});

app.get('/news', function(req, res, next){
    res.send('This is the news!')
})

if (app.listen(3000)) {console.log("server listening")};