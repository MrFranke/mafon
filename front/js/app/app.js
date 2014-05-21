/**
 * Init фаил приложения
 */
define([
    '/js/app/auth/main.js',
    '/js/app/search/main.js',
    '/js/app/playlist/main.js'
], function (
    auth,
    search,
    playlist
) {

    function start () {
        auth.init();
        search.init();
    }

    return {
        start: start
    };
});