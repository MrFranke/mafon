/**
 * Init фаил приложения
 */
define([
    'backbone',
    'backboneio',
    'app/auth/main',
    'app/search/main',
    'app/controls/main',
    'app/playlist/main',
], function (
    Backbone,
    Backboneio,
    auth
) {

    function start () {
        Backboneio.connect();
        auth.init();
    }

    return {
        start: start
    };
});