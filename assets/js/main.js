

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

//tab

$('.next-tab-top ul li a').click(function(){
  $('.next-tab-top ul li a').removeClass('active');
  $(this).addClass('active');
  let data = $(this).attr('data-tab');
  $('.content-tab').removeClass('active');
  $('#'+data).addClass('active');
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
})

// click video

// Bước 1 
var image = $('.list-video-right:nth-child(1)').find('img').attr('src'); // Lấy ảnh của list - video - 2 > link ảnh của list - video - 1
var linkvideo = $('.list-video-right:nth-child(1)').find('iframe').attr('src'); // Lấy video của list - video - 2 > link video của list - video - 1
$('.list-video-left').find('.img-video').attr('src',image); //  lấy list - video - 1 Nhận ảnh của list - video - 2
$('.list-video-left').find('iframe').attr('src',linkvideo); //  lấy list - video - 1 Nhận video của list - video - 2
$('.icon-video a').click(function(event) {
    event.preventDefault(); // Chống load link
    $(this).parents('.list-video-left').addClass('active'); // thêm class active để ẩn ảnh và nốt play của List - video - 1
    var linkyt = $(this).parents('.icon-video').next().find('iframe').attr('src'); // khi nốt Play được click > lấy ra class bo nó > next đến -- class bỏ video > video -- lấy ra src 
    $('.video-iframe').attr('src',linkyt + '?autoplay=1'); // để video auto play
  });

// Bước 2
$('.list-video-right ul li').each(function() {
  var clicks = $(this);
    $(this).find('a').attr('href', 'javascript:;'); // Cái đnag được click có thẻ A sẽ được thêm chống loadlinlk
    clicks.click(function() {
        var linkyt2 = $(this).find('iframe').attr('src'); // tương tự bước 1
        var img2 = $(this).find('img').attr('src');
        $('.list-video-left').find('iframe').attr('src', linkyt2);
        $('.img-video').attr('src', img2);
      });
  });

// slick slide

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 10
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 5
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3
    }
  }
  ]
});

// Chia tab products

$(document).ready(function () {
  $('.button-doc').click(function (event) {
    event.preventDefault();
    $('.list-icon-dang ul li a').removeClass('active');
    $('.button-doc').addClass('active');
    $('#products .js-col').removeClass('col-xl-4 col-lg-6 col-md-4');
    $('#products .js-col').addClass('col-md-12 padding-0');
    $('.card_tubep1').removeClass('products-container');
    $('.card_tubep1').addClass('products-container-2');
  });
  $('.button-ngang').click(function (event) {
    event.preventDefault();
    $('.list-icon-dang ul li a').removeClass('active');
    $('.button-ngang').addClass('active');
    $('#products .js-col').removeClass('col-md-12 padding-0');
    $('#products .js-col').addClass('col-xl-4 col-lg-6 col-md-4');
    $('.card_tubep1').addClass('products-container');
    $('.card_tubep1').removeClass('products-container-2');
  });
});

// không được nhập số input

function inputNottext(){
  $('input').bind('input', function() {
    var namdz = this.selectionStart,
    leng = /[1 2 3 4 5 6 7 8 9 0]/gi,
    v = $(this).val();
    if(leng.test(v)) {
      $(this).val(v.replace(leng, ''));
      namdz--;
    }
    this.setSelectionRange(namdz, namdz);
  });
}inputNottext()

// Click scroll to top

function scrollNH(){

// Click animation scroll

$(document).ready(function() {
  var offset = 100;
  var scrollTime = 500;
  $('.class a[href^="#"]').click(function() {
    $("html, body").animate({
      scrollTop: $( $(this).attr("href") ).offset().top - offset 
    }, scrollTime);
    return false;
  });
});

// Active khi scroll

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  var n = 100;
  $('.main-box').each(function(i) {
    if ($(this).position().top - n <= scrollDistance) {
      $('.class ul li a').removeClass('active');
      $('.class ul li a').eq(i).addClass('active');
    }
  });
}).scroll();

}scrollNH();

// Scroll fixed header top

$(document).ready(function() {
   // data-toggle="sticky-onscroll"
   var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop ){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); 
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});

// Slide fade

$(".bg-mau > .item:gt(0)").hide();
setInterval(function() {
  $('.bg-mau > .item:first')
  .fadeOut(0)
  .next()
  .fadeIn(0)
  .end()
  .appendTo('.bg-mau');
}, 5000);

// đếm số item slide 

function slidePDF(){
  var number2 = $('#page1 .ws-count').text();
  var current = $('#page1 div.active').index();
  var tru = current;
  $('.number-dem .number-last').text(number2);
  $("#page1 .owl-prev").click(function() {
    var number = $('#page1 div.active').index() + 1 - tru ;
    if(number < 1){
      number = $('#page1 .ws-count').text();
    }
    $('.number-dem .number-one').text(number);
  });
  $("#page1 .owl-next").click(function() {
   var number = $('#page1 div.active').index() + 1 - tru;
   $('.number-dem .number-one').text(number);
 });
}
slidePDF();

// Chống coppy


$(document).bind("contextmenu",function(e){
  e.preventDefault();
});
$(document).keydown(function(ev) {
 ev = ev || window.event;
 kc = ev.keyCode || ev.which;
 if((ev.ctrlKey || ev.metaKey) && kc) {
   if(kc == 99 || kc == 67 || kc == 88) {
    return false;
  }
}
});

wow = new WOW(
{
 animateClass: 'animated',
 offset: 100,
 callback: function (box) {
   console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
 }
}
);
wow.init();