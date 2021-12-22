$(document).ready(function () {

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger_active');
        if ($(this).hasClass('header__burger_active')) {
            $('body').css({
                position: 'fixed'
            })
            $('.header__nav').css({
                display: 'block'
            })
        } else {
            $('body').css({
                position: 'relative'
            })
            $('.header__nav').css({
                display: 'none'
            })
        }
    })

});