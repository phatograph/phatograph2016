var express     = require('express');
var path        = require('path');
var app         = express();
var static_path = path.join(__dirname, 'build');
var port        = 4000;

app.use(express.static(static_path))
  .get('/*', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || port, function (err) {
    if (err) { console.log(err) };
    console.log(`Listening at localhost:${port}`);
  });
