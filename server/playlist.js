var backboneio = require('backbone.io');

function Playlist () {
    var backend = backboneio.createBackend()
      , playlist = []
      , io;

    backend.use(backboneio.middleware.memoryStore());

    function init ( server ) {
        io = backboneio.listen(server, { songs: backend });

        setTimeout(function () {
            backend.emit('created', [{ id: 'myid', title: 'bar' }, { id: 'myid1', title: 'tesssssst!!!!!!!!' }]);
        }, 10000);

        return io;
    }

    function autoPlay ( song ) {

    }

    return {
        init: init,
        io: io,
        autoPlay: autoPlay,
        playlist: playlist
    };
}


module.exports = new Playlist();