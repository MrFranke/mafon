require([
    'config',
    '/js/app/auth/main.js',
    '/js/app/search/main.js'
], function( config, auth, search ) {
    VK.init({
        apiId: config.appId,
        scope: 'audio'
    });

    auth.init();
    search.init();
});