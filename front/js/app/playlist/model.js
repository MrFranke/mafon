/**
 * Модель плейлиста
 */
define([

], function (

) {
    var PlaylistModel = Backbone.Model.extend({
        defaults: {
            songs: [] // Список песен в плейлисте
        }
    });



    return new PlaylistModel();
});