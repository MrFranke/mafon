var vkApi = require('vk-api')
  , express = require('express')

  , OPTIONS = {
    appId: 4341846,
    appSecret: 'l337z3iVaPzoifypmH6I',
    redirectUrl: 'http://localhost:8080',
    port: 8080
  };

var VK = new vkApi({appID: OPTIONS.appId, appSecret: OPTIONS.appSecret}, OPTIONS.redirectUrl)
  , app = express();


app.set('views', __dirname + '/front/view');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/front'));

app.get('/', function(req, res){
  res.render('index', OPTIONS);
});

app.listen( OPTIONS.port );


console.log('Listening for http requests on port ' + OPTIONS.port);