const app = require('express')();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

var locals = {
    title: 'example template',
    people: [
        { name: 'Brittany S. Chu' },
        { name: 'Veronica S. Smith' }
    ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function(err, output) {
    console.log(output);
});

app.use('/', function(req, res, next) {
    console.log('running root');
    next();
});

app.use('/news', function(req, res, next) {
    console.log('running subpages')
    next();
});

app.get('/', function(req, res, next) {
    res.send('Hello World!')
});

app.get('/ex-template', function(req, res, next) {
    res.render('index', locals)
});

app.get('/news', function(req, res, next) {
    res.send('This is the news!')
})

if (app.listen(3000)) { console.log("server listening") };