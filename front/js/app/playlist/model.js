/**
 * Модель плейлиста
 */
define([
    'app/song/model',
    'backbone'
], function (
    Song,
    Backbone
) {
    var Collection = Backbone.Collection.extend({
        backend: 'songs',
        model: Song,
        initialize: function() {
            this.bindBackend();
        }
    });



    return new Collection();
});