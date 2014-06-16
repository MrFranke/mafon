/**
 * Контроллер
 */
define([
    'app/playlist/model',
    'rejs!app/playlist/view/template',
    'app/song/main'
], function (
    collection,
    Tmp,
    Song
) {
    var Playlist = Backbone.View.extend({
        el: '.playlist',
        collection: collection,

        events: {

        },

        initialize: function () {
            this.el.innerHTML = Tmp();
            this.collection.on('add change remove reset', this.render, this);
            this.collection.add({title: 'test'});
        },

        render: function () {
            var list = this.el.querySelector('.playlist__list');

            list.innerHTML = '';
            this.collection.each(function ( song ) {
                var song = new Song({
                        model: song,
                        el: list
                    });

                //console.log(song.render());
            });
        }

    });


    return new Playlist();
});