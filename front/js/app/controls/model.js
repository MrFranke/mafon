/**
 * Модель контролов
 */
define([

], function (

) {
    var Model = Backbone.Model.extend({
        defaults: {
            played: false,
            paused: false,
            vol: 0
        }
    });



    return new Model();
});