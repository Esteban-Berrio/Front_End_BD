$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
      });

  });



let downloadbutton = document.getElementById('downloads');

downloadbutton.addEventListener('click', function(){
  Swal.fire({
        
        imageUrl: '../img/downloads-qr.png',
        
        html:
          '<img src="../img/pngwing.com.png" height="90px" width="300px" /> ' ,
          
          imageAlt: 'Android download QR Code',
          footer: '<p style="text-align: center; font-weight: bold; font-size: 25px;">Descarga nuestra app!</p>',
      })
})
    