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