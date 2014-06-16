/**
 * Модель песни
 */
define([
    'backbone'
], function (
    Backbone
) {

    var Model = Backbone.Model.extend({
        defaults: {
            author: 'unknown',
            title: 'unknown',
            time: 0
        }
    });



    return Model;
});