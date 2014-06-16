/**
 * View song
 */
define([
    'app/song/model',
    'rejs!app/song/template'
], function (
    Model,
    Tmp
) {
    var View = Backbone.View.extend({
        el: '.song',
        model: Model,

        events: {

        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function() {
            this.el.innerHTML += Tmp({song: this.model});
            return this;
        }

    });

    return View;
});