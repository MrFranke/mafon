/**
 * Init фаил приложения
 */
define([
    'app/auth/main',
    'app/search/main',
    'app/controls/main',
    'app/playlist/main'
], function (
    auth
) {

    function start () {
        auth.init();
    }

    return {
        start: start
    };
});