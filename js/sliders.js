$(document).ready(function () {

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.single-item').slick();

    $('.autoplayes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight:true,
        autoplaySpeed: 2000,
    });
});





