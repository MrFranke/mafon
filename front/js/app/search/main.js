define([

], function (

) {
    var $searchForm = document.querySelector('.js-search-form')
      , $searchInput = document.querySelector('.js-search-input');

    function init () {
        bindEvents();
    }

    function bindEvents () {
        $searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            search( $searchInput.value );
        });
    }

    function search ( query ) {
        VK.api('audio.search', { q: query }, function ( res ) {
            console.log('faunded music: ', res);
        });
    }

    return {
        init: init
    };
});