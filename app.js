var express = require('express')

  , OPTIONS = {
    appId: 4341846,
    appSecret: 'l337z3iVaPzoifypmH6I',
    redirectUrl: 'http://mafon.local:8090',
    port: 8090
  };

var app = express();
var server = app.listen(OPTIONS.port);
var io = require('socket.io').listen(server);
var Media = require('simple-mplayer');
var exec = require('child_process').exec;

app.set('views', __dirname + '/front/view');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/front'));

app.get('/', function(req, res){
    res.render('index', OPTIONS);
});

console.log('Listening for http requests on port ' + OPTIONS.port);

io.on('connection', function(socket){
    var music;
    console.log('a user connected');

    socket.on('choise', function( msg ) {
        music = new Media(msg.url);
        music.play({loop: 1});

        console.log('choise: ' + msg.url);
    });

    socket.on('pause', function () {
        music.pause();
    });

    socket.on('resume', function () {
        music.resume();
    });

    socket.on('stop', function () {
        music.stop();
    });
});