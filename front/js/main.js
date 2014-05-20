require([
    'config',
    '/js/app/app.js'
], function( config, app ) {
    VK.init({
        apiId: config.appId,
        scope: 'audio'
    });

    app.start();
});