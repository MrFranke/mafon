/**
 * Контроллер
 */
define([
    'app/playlist/model',
    'rejs!app/playlist/template'
], function (
    Model,
    Tmp
) {
    var DocumentRow = Backbone.View.extend({
        el: '.playlist',
        model: Model,

        events: {
            'submit .playlist__search': 'search',
            'click .playlist__song': 'choise'
        },

        search: function ( query, callback ) {
            var that = this
              , query = this.el
                            .querySelector('.playlist__search__field')
                            .value;

            VK.api('audio.search', { q: query }, function ( res ) {
                console.log('faunded music: ', res);
                that.model.set('songs', res.response);
            });
        },

        choise: function ( e ) {
            var url = e.delegateTarget.getAttribute('data-song-url');
            socket.emit('choise', {
                url: url
            });

            return false;
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function() {
            console.info('render');
            this.el.querySelector('.playlist__list').innerHTML = Tmp({
                songs: this.model.get('songs')
            });
        }

    });

    return new DocumentRow();
});