/**
 * Модель поиска
 */
define([
    'backbone'
], function (
    Backbone
) {
    var Model = Backbone.Model.extend({
        defaults: {
            songs: [] // Список песен в плейлисте
        }
    });



    return new Model();
});