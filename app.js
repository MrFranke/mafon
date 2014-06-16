var express = require('express')

  , OPTIONS = {
    appId: 4341846,
    appSecret: 'l337z3iVaPzoifypmH6I',
    redirectUrl: 'http://mafon.local:8090',
    port: 8090
  };

var app = express();
var server = app.listen(OPTIONS.port);

app.set('views', __dirname + '/front/view');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/front'));

app.get('/', function(req, res){
    res.render('index', OPTIONS);
});

console.log('Listening for http requests on port ' + OPTIONS.port);



var playlist = require('./server/playlist');
var io = playlist.init( server );

io.on('connection', function(socket){
    require('./server/controls')(socket);
});