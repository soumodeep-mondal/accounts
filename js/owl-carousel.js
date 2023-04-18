
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 500,
        autoplaySpeed: 150,
        items:5,
        nav: true,
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            
            1024:{
                items:3,
                nav:true,
                loop:false
            },
            1440:{
                items:5,
                nav:true,
                loop:false
            },
            768:{
                items:2,
                nav:true,
                loop:false
            }
        }
    })


