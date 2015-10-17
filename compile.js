var ejs = require('ejs'),
    async = require('async'),
    fs = require('fs');

async.series({
    templateString: function(callback) {
        // Retrieve the index.ejs template file
        fs.readFile('src/index.ejs', 'utf8', function (err, data) {
            callback(null, data);
        });
    },
    configString: function(callback) {
        // Retrieve the index.ejs template file
        fs.readFile('src/config', 'utf8', function (err, data) {
            callback(null, data);
        });
    },
}, function(err, results) {
    var config = JSON.parse(results.configString),
        data = {
            data: config
        },
        rendered = ejs.render(results.templateString, data);

    fs.writeFile('index.html', rendered, function (err) {
        console.log('Successfully compiled the index page.');
    });
});


