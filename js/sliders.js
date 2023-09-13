$(document).ready(function () {

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.single-item').slick();


    $('.autoplayes-up').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 4000,
    });
});





