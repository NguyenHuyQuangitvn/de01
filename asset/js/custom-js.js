$(document).ready(function(){
  $('.list-post').slick({
      nav: false,
      dots:true,
      arrows: false,
      nextArrow: false,
      autoplay: true,
      autoplaySpeed :1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite:true,
      speed:1000,
      dotClass:'slick-dots',
      
      responsive: [
          {
            breakpoint: 432,
            settings: {
              nav: false,
              dots:true,
              arrows: false,
              nextArrow: false,
              autoplay: true,
              autoplaySpeed :1000,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite:true,
              speed:1000,
              dotClass:'slick-dots',
            }
          },
          {
            breakpoint: 375,
            settings: {
              nav: false,
              dots:true,
              arrows: false,
              nextArrow: false,
              autoplay: true,
              autoplaySpeed :1000,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite:true,
              speed:1000,
              dotClass:'slick-dots',
            }
          }
        ]

  });
  
});