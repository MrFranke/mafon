/**
 * Init фаил приложения
 */
define([
    'app/auth/main',
    'app/playlist/main'
], function (
    auth,
    search,
    playlist
) {

    function start () {
        auth.init();
    }

    return {
        start: start
    };
});