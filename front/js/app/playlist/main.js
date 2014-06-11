/**
 * Контроллер
 */
define([
    'app/playlist/model',
    'rejs!app/playlist/view/template',
    'rejs!app/playlist/view/list',
], function (
    Model,
    Tmp,
    ListTmp
) {
    var Playlist = Backbone.View.extend({
        el: '.playlist',
        model: Model,

        events: {
            /*'submit .search__search': 'search',
            'click .search__song': 'choise'*/
        },

        initialize: function () {
            this.el.innerHTML = Tmp();
        },

        render: function () {

        }

    });


    return new Playlist();
});