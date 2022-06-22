// search
$(document).ready(
  function () {
      $("button.btn-search").click(function showSearch() {
          $(".main-menu").addClass('show-search');
          //$(".list-menu li:not(:last-child)").hide();
      });

      jQuery(document).click(function (e)
			{
				var container = jQuery('li.item-menu.search');
				if (!container.is(e.target) && container.has(e.target).length === 0)
				{
					jQuery('.main-menu').removeClass('show-search');
				}
			});
  }
);


$(document).ready(function(){
  $('.list-post').slick({
      nav: false,
      dots:true,
      arrows: false,
      nextArrow: false,
      autoplay: true,
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
