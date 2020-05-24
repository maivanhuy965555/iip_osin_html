

//Scroll

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $(".header-top").addClass("header-active");
        $(".scroll-top").addClass("active-scroll"); // Scroll Menu - Mobile
      } 
      else {
        $(".header-top").removeClass("header-active");
        $(".scroll-top").removeClass("active-scroll");
      }
    });

$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// carousel

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
});


$('.apply-form .form-control').blur(function()
{
    if( $(this).val().trim() == '' ) {
          $(this).addClass('focus');
    }else{
      $(this).removeClass('focus');
      $(this).addClass('active');
    }
});