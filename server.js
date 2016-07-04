var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/';
var fs = require('fs');

router.use(function(req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res) {
  res.sendFile(path + 'index.html');
});

app.get('/slides/:id', function(req, res) {
  fs.readFile('local.json', 'utf8', function(err, data) {
    if (err) { console.log('Error reading file'); }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  })
})
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

module.exports = router;
