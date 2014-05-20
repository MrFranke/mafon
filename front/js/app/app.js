/**
 * Init фаил приложения
 */
define([
    '/js/app/auth/main.js',
    '/js/app/search/main.js'
], function (
    auth,
    search
) {

    function start () {
        auth.init();
        search.init();
    }

    return {
        start: start
    };
});