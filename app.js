const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');


app.use('/', routes);

app.use('/', function(req, res, next) {
    console.log('running root');
    next();
});

app.use('/news', function(req, res, next) {
    console.log('running subpages')
    next();
});

app.use(express.static('public'));



// app.get('/stylesheets/style.css', function(req, res, next) {
//         res.sendFile('/stylesheets/style.css');

//     })
// app.get('/', function(req, res, next) {
//     res.send('Hello World!')
// });

// app.get('/ex-template', function(req, res, next) {
//     res.render('index', locals)
// });

// app.get('/news', function(req, res, next) {
//     res.send('This is the news!')
// })

if (app.listen(3000)) { console.log("server listening") };