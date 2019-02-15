const bodyParser = require('body-parser');
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const mongojs = require('mongojs');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const databaseUrl = "";

const collections = ["Scrape", "Stats"];
const db = mongojs(databaseUrl, collections);

db.on('error', function(error) {
    console.log('Database Error:', error);
});
db.once('open', function(err) {
    console.log('Mongoose connection successful.')
});

app.get('/', function(req, res) {
    db.Scrape.find({}, function(error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.render('index', {
                found: found
            })
        }
    })
});

app.get('/scrape', function(req, res) {
    request('https://sports.yahoo.com/mlb/stats/career/?statId=HOME_RUNS&selectedTable=0', function(error, response, html) {
        let $ = cheerio.load(html);

        $('tbody.Fz(12px)').each(function(i, element) {
            let name = $(element).children().attr('td');
        
        db.Scrape.insert({
            name: name
        })
        }),
        setTimeout(function(err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/'), .1000
            };
        })
    })
});

app.listen(process.env.PORT || 3001, function() {
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});