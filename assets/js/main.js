

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


// search mobile

$(".search-mobile a").click(function(event) {
  $(".full-search").slideDown("active-search");
});
$(".times-search a").click(function() {
  $(".full-search").slideUp("active-search");
});

// ?jquery mobile

(function($) {
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultData = {
        maxWidth: false,
        customToggle: $toggle,
        // navTitle: 'All Categories',
        levelTitles: true,
        pushContent: '#container'
    };

    // add new items to original nav
    $main_nav.find('li.add').children('a').on('click', function() {
        var $this = $(this);
        var $li = $this.parent();
        var items = eval('(' + $this.attr('data-add') + ')');

        $li.before('<li class="new"><a>' + items[0] + '</a></li>');

        items.shift();

        if (!items.length) {
            $li.remove();
        } else {
            $this.attr('data-add', JSON.stringify(items));
        }

        Nav.update(true);
    });

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultData);

    // demo settings update

    const update = (settings) => {
        if (Nav.isOpen()) {
            Nav.on('close.once', function() {
                Nav.update(settings);
                Nav.open();
            });

            Nav.close();
        } else {
            Nav.update(settings);
        }
    };

    $('.actions').find('a').on('click', function(e) {
        e.preventDefault();

        var $this = $(this).addClass('active');
        var $siblings = $this.parent().siblings().children('a').removeClass('active');
        var settings = eval('(' + $this.data('demo') + ')');

        update(settings);
    });

    $('.actions').find('input').on('change', function() {
        var $this = $(this);
        var settings = eval('(' + $this.data('demo') + ')');

        if ($this.is(':checked')) {
            update(settings);
        } else {
            var removeData = {};
            $.each(settings, function(index, value) {
                removeData[index] = false;
            });

            update(removeData);
        }
    });
})(jQuery);