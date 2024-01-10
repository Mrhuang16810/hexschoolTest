$(document).ready(function(){
    $('.open_menu').click(function(event){
        $('body').addClass('open');
    });
    $('.close_menu').click(function(event){
        $('body').removeClass('open');
    });
});