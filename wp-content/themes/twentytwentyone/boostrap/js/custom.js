jQuery(function($) {
    jQuery(document).ready(function(){  
       $('.hot-slick').slick({
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
 
    

    $('.wprt-toggle.active').find('.toggle-content').show();
    $('.toggle-title').on('click', function () {
        if ( !$(this).parent().is('.active') ) {
            $(this).parent().toggleClass('active')
                .children('.toggle-content').slideToggle('slow')
            .parent().siblings('.active').removeClass('active')
        } else {
            $(this).parent().toggleClass('active');
            $(this).next().slideToggle('slow');
        }
    });
    $('.slick-choose1').slick({
        dots: false,
        infinite: false,
        speed: 700,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $('.slick-choose').slick({
        dots: true,
        infinite: false,
        speed: 700,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });
    
    $('.hot-slick2').slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    });   
     $('.slick-language').slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });


    
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
      var btnContainer = document.getElementById("site-navigation");

      var btns = btnContainer.getElementsByClassName("js-curnav-switch");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");

          this.className += " active";
          document.title =current[0].title;

        });
      }
            function onePageNav( switchName ) {
          const navSwitch = $(switchName);
          const deductHeight = 60;
          let navArr = [];
      
      
          navSwitch.each(function(i){
            let navSwitchHref = $(this).attr('href');
            let tgtOff = $(navSwitchHref).offset().top - deductHeight;
            navArr.push([]);
            navArr[i].switch = $(this);
            navArr[i].tgtOff = tgtOff;
          });
      //        console.log(navArr);
          $(window).scroll(function () {
            for( let i = 0; i < navArr.length; i++ ){
              let scroll = $(window).scrollTop();
              let tgtKey = navArr[i];
              let tgtSwitch = tgtKey.switch;
              let tgtOff = tgtKey.tgtOff;
              if ( scroll >= tgtOff ) {

                navSwitch.removeClass('active');
                tgtSwitch.addClass('active');
                document.title = tgtSwitch[0].title;

              } else {
                tgtSwitch.removeClass('active');
              }
            }
          });
        }
        $(window).on('load resize',function(){
          onePageNav('.js-curnav-switch');
        });

      
      
});


