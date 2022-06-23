$(document).ready(function(){
  // ô search
  $("button.btn-search").click(function showSearch() {
    $(".main-menu").addClass('show-search');
    //$(".list-menu li:not(:last-child)").hide();
  });
  $(document).click(function (e)
  {
    var container = $('li.item-menu.search');
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      $('.main-menu').removeClass('show-search');
    }
  });
  // slider
  $('.list-post').slick({
      nav: false,
      dots:true,
      arrows: false,
      nextArrow: false,
      // autoplay: true,
      autoplaySpeed :1000,
      slidesToShow: 3,
      slidesToScroll: 2,
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
