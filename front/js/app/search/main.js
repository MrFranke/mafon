/**
 * Контроллер
 */
define([
    'app/search/model',
    'rejs!app/search/view/template',
    'rejs!app/search/view/list',
], function (
    Model,
    Tmp,
    ListTmp
) {
    var Search = Backbone.View.extend({
        el: '.search',
        model: Model,

        events: {
            'submit .search__search': 'search',
            'click .search__song': 'choise'
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.el.innerHTML = Tmp();

            this.render();
        },

        render: function() {
            console.info('render');
            this.el.querySelector('.search__list').innerHTML = ListTmp({
                songs: this.model.get('songs')
            });
        },

        search: function ( query, callback ) {
            var that  = this
              , query = this.el
                            .querySelector('.search__search__field')
                            .value;

            VK.api('audio.search', { q: query }, function ( res ) {
                console.log('faunded music: ', res);
                that.model.set('songs', res.response);
            });
        },

        choise: function ( e ) {
            var url = e.delegateTarget.getAttribute('data-song-url');
            return false;
        }

    });

    return new Search();
});