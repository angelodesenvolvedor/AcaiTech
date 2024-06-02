// menu.js

$(document).ready(function(){
    // Fecha o menu ao clicar em um item
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});
