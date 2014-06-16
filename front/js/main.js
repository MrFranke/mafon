// App Config
require.config({
    baseUrl: '/js/',
    paths: {
        'ejs'        : 'vendors/ejs/ejs.min',
        'text'       : 'vendors/requirejs-text/text',
        'rejs'       : 'vendors/requirejs-ejs-plugin/rejs',
        'underscore' : 'vendors/lodash/dist/lodash',
        'backbone'   : 'vendors/exoskeleton/exoskeleton',
        'socketio'   : '/socket.io/socket.io',
        'backboneio' : '/socket.io/backbone.io'
    },
    shim: {
        ejs: {
            exports: 'ejs'
        },
        underscore : {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        socketio: {
            exports: 'io'
        },
        backboneio: {
            deps: ['socketio']
        }
    },
});

// Fake deps for exoskeleton
define('jquery', function(){});


require([
    'config',
    'app/app'
], function( config, app ) {
    VK.init({
        apiId: config.appId,
        scope: 'audio'
    });

    app.start();
});