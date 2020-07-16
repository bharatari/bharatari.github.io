$(document).ready(function() {
    $('.arrow-button').click(function() {
        $('html,body').animate({
            scrollTop: $('.about-row').offset().top - 80
        }, 1000);
    });
    /*
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.information-row').offset().top - 300) {
            $('.about-me').removeClass('invisible').addClass('fadeInUp');
            $('.about-me-subtitle').removeClass('invisible').addClass('fadeInUp');
            $('.about-me-text').removeClass('invisible').addClass('fadeInUp');
        }  
        if($(window).scrollTop() > $('.skills-row').offset().top - 100) {
            $('.skills-header').removeClass('invisible').addClass('fadeInUp');
            $('.skill-icon').removeClass('invisible').addClass('fadeInUp');
            $('.skill-header').removeClass('invisible').addClass('fadeInUp');
            $('.skill-text').removeClass('invisible').addClass('fadeInUp');
        }
        if($(window).scrollTop() > $('.portfolio-row').offset().top - 100) {
            $('.portfolio-header').removeClass('invisible').addClass('fadeInUp');
            $('#effect-1').removeClass('invisible').addClass('fadeInUp');
        }
    });
    */
});
