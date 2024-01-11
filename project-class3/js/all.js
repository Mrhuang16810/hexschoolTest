$(document).ready(function(){
    $('.fa-solid').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('show');
    });
});