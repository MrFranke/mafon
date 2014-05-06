define([

], function (

) {
    var $searchForm = document.querySelector('.js-search-form')
      , $searchInput = document.querySelector('.js-search-input');

    function init () {
        bindEvents();
    }

    function bindEvents () {
        console.log($searchForm);
        $searchForm.addEventListener('submit', function () {
            e.preventDefault();
            search();
            return false;
        });
    }

    function search () {
        e.preventDefault();

        VK.api('audio.search', { q: $searchInput.value }, function ( res ) {
            console.log('result: ', res);
        });
    }

    return {
        init: init
    };
});