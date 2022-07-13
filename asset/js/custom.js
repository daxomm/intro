$(function(){


    var Scrollbar = window.Scrollbar;
    var scrollbar = Scrollbar.init(document.querySelector('.wrapper'),{
        // option
    });



    const imgs = document.querySelectorAll('.sc-project .img-box img');
    imgs.forEach(element => {
        gsap.to(element,{
            scrollTrigger:{
                trigger:element,
                start:"top bottom",
                end:"bottom top",
                // markers:true,
                scrub:1,
            },
    
            yPercent:-20,
        })
    });


   
    scrollbar.addListener(function (status) { //Scrollbar 쓰는 순간 스크롤 이벤트는 못씀 
        ScrollTrigger.refresh();
    });
})