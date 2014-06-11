/**
 * Модуль для панели управления плеером
 */
define([
    'app/controls/model',
    'rejs!app/controls/template'
], function (
    Model,
    Tmp
) {
    var Controls = Backbone.View.extend({
        el: '.controls',
        model: Model,

        events: {
            'click .js-control': 'changeState'
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.el.innerHTML = Tmp();
        },

        render: function( model ) {
            // При изменении модели отправляем изменения на сервер
            for ( var action in model.changed ){
                socket.emit(action, model.get(action));
                console.log(action);
            }
        },

        changeState: function ( e ) {
            var target = e.target,
                action = target.getAttribute('data-action'),
                oldVal = this.model.get(action),
                newVal = oldVal ? false : true;

            this.model.set(action, newVal );
        }

    });

    return new Controls();
});