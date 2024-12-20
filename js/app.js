
$(document).ready(function () {

    // mobile menu
    let hamburger = $("#humburger");
    let nav = $("#mobile_menu");
    
    hamburger.click(()=>{
        nav.toggleClass('hidden');
    });
    
    //  categories 
    let categories = $("#Categories");
    let categories_list = $("#category_list");

    categories.click(()=>{
        if(categories_list.hasClass('lg:block')){
            categories_list.removeClass('lg:block');
        }
        categories_list.toggleClass(' lg:block, block');
        categories_list.toggleClass('hidden');
        
    });
    
    let searchBtn = $('.mobile_search_icon');
    let mobileSearch = $('.mobile_search');
    searchBtn.click(()=>{
       mobileSearch.toggleClass('hidden'); 
    });
    
    //  sticky navigation
    
    // $(window).scroll(function () {
    //     let scroll = $(window).scrollTop();
    //     if (scroll > 100) {
    //         $("#header").addClass("sticky");
            
    //   } else {
    //         $("#header").removeClass("sticky");
    //     }
    // });
    
    //  trending items slick carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 300,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    //  main slider
    $('.main_slider').slick({
        dots: false,
        infinite: true,
        autoplay:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        
    });
    
    //  product details slider
    $('.slider_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 1,
      asNavFor: '.slider_for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows:true
    });
    
    
});