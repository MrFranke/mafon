define([
    'config'
], function (
    config
) {
    var $openBtn = document.querySelector('.js-open-auth');

    function init () {
        bindEvents();

        // Если прав хватает на поиск музыки - закрываем окно с авторизацией
        VK.api('account.getAppPermissions', {}, function ( res ) {
            if ( res.response >= 8 ) {
                close();
                return;
            }

            open();
        });
    }

    function bindEvents () {
        $openBtn.addEventListener('click', openWindow);
    }

    function openWindow () {
        window.open(
            "https://oauth.vk.com/authorize?" +
            "client_id="+ config.appId +"&" +
            "scope=8&" +
            "redirect_uri="+ config.redirectUrl +"&" +
            "display=page&" +
            "response_type=token", "_self"
        );
    }

    function close () {
        console.log('Закрываем окно авторизации');
    }

    function open () {
        console.log('Открываем окно авторизации');
    }

    return {
        init: init,
        close: close
    };
});