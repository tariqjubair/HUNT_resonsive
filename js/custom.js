
// ==== ==== jQuery Part Starts Here ==== ====

$(function (){

// ==== Header: Fixed_Header ====

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".navbar").addClass("fxd_head_elm");
            $(".navbar .container").addClass("Cont_side_pd");
            $(".navbar-nav .nav-link").css("line-height", "50px");
            
        } 
        else {
            $(".navbar").removeClass("fxd_head_elm");
            $(".navbar .container").removeClass("Cont_side_pd");
            $(".navbar-nav .nav-link").css("line-height", "");
        }
    });

// ==== ==== Header: x-sm Fixed-Header ==== ====

    $('#menu_bar').click(function(){
        $(".navbar").toggleClass("xsm_menu_bg");
    });

// ==== Banner: Bg_Slider ====

    $('.ban_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

// ==== Portfolio: folio_slider ====

    $('.folio_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

// ==== Portfolio: Veno_Box ====

    $('.venobox').venobox();

// ==== Service: serv_slider ====

    $('.serv_slider').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-up arrow_up ccl"></i>', 
        nextArrow: '<i class="fa fa-chevron-down arrow_down ccl"></i>',
        fade: false,
        vertical: true,			
        centerMode: true, 		
        centerPadding: '16px',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });

// ==== Service: serv_sm_slider ====

$('.serv_sm_slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-up arrow_up ccl"></i>', 
    nextArrow: '<i class="fa fa-chevron-down arrow_down ccl"></i>',
    vertical: true,			
    centerMode: true, 		
    centerPadding: '16px', 
    focusOnSelect: true,

    responsive: [
        {
            breakpoint: 768, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]

});

// ==== Service_btm: serv2_slider =====

    $('.serv2_slider').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-up arrow_up ccl"></i>', 
        nextArrow: '<i class="fa fa-chevron-down arrow_down ccl"></i>',
        fade: false,
        vertical: true,			
        centerMode: true, 		
        centerPadding: '16px',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });

// ==== Service_btm: srv2_sm_slider ====

    $('.srv2_sm_slider').slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left arrow_left ccl"></i>',
        nextArrow: '<i class="fa fa-chevron-right arrow_right ccl"></i>',
        centerMode: true, 		
        centerPadding: '16px',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });

// ==== Price: prc_slider for SM display ====

    $('.prc_slider').slick({
        slidesToShow: 3,
        autoplay: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<i class="fa fa-chevron-left arrow_left ccl_btm"></i>',
                    nextArrow: '<i class="fa fa-chevron-right arrow_right ccl_btm"></i>',
                    centerMode: true, 		
                    centerPadding: '15px',
                    focusOnSelect: true,
                }
            }
        ]
        
    });

// ==== Counter: Counter_up ====

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

// ==== Team: team_slider for small display

    $('.team_slider').slick({
        slidesToShow: 4,
        autoplay: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 992, // Laptop breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<i class="fa fa-chevron-left arrow_left ccl_btm"></i>',
                    nextArrow: '<i class="fa fa-chevron-right arrow_right ccl_btm"></i>',
                    centerPadding: '16px',
                    // focusOnSelect: true,
                }
            },
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<i class="fa fa-chevron-left arrow_left ccl_btm"></i>',
                    nextArrow: '<i class="fa fa-chevron-right arrow_right ccl_btm"></i>',
                    centerPadding: '16px',
                    // focusOnSelect: true,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<i class="fa fa-chevron-left arrow_left ccl_btm"></i>',
                    nextArrow: '<i class="fa fa-chevron-right arrow_right ccl_btm"></i>',
                    centerMode: true, 		
                    centerPadding: '16px',
                    // focusOnSelect: true,
                }
            }
        ]
        
    });

// ==== Logo: logo_slider ====

    $('.logo_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        // rtl: true,
        autoplaySpeed: 1000,
        arrows: false,		
        centerMode: true,
        centerPadding: '0', 
        
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });

    








    

});





// ==== ==== jQuery Part Ends Here ==== ====

