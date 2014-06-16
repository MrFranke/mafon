var Media = require('simple-mplayer');

/**
 * Модуль управления плеером
 * @arguments socket {Object} Сокет клиента
 */
function Controls ( socket ) {
    var music = {
        play: function  () {

        },
        stop: function () {
            console.log('can\'t stop! not active song');
        }
    };


    function init () {
        bindEvents();
    }

    function bindEvents () {
        socket.on('play', play);
        socket.on('stop', stop);
    }

    /**
     * Проигрывает переданую песню.
     * Если песня не была передана - берет первую из плейлиста
     * @arguments song {Object} Объект песни
     */
    function play ( song ) {
        music = new Media(msg.url);
        music.play({loop: 1});

        // Тут надо менять в коллекции плейлиста активную песню
    }

    // Останасвливает проигрывание
    function stop () {
        music.stop();
    }

    /*io.on('connection', function(socket){
        var music
          , actions = ['play', 'pause', 'resume', 'stop'];

        socket.on('choise', function( msg ) {
            music = new Media(msg.url);
            music.play({loop: 1});

            console.log('choise: ' + msg.url);
        });

        actions.forEach(function ( action ) {
            socket.on(action, function () {
                if ( music ) {
                    music[action]();
                }
            });
        });
    });*/
}

module.exports = Controls;