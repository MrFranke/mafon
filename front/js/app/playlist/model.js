/**
 * Модель плейлиста
 */
define([

], function (

) {
    var PlaylistModel = Backbone.Model.extend({
        defaults: {
            songs: []
        }
    });



    return new PlaylistModel();
});