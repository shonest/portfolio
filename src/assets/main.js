$(document).ready(function () {
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('header').addClass('sticky_header');
        }else{
            $('header').removeClass('sticky_header');
        }
    });

    
    $('nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    

});