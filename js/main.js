       $(function(){
        var mySwiper = new Swiper(".sw-basic", {
      
            autoplay: true,
            loop:true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            loopFillGroupWithBlank: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                
            },
        
            
        });
       })
       
 
       $(function(){
         var mySwiper = new Swiper(".sw-store", {
            autoplay: true,
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                
                
                
            },
            slidesPerView: 3,
            slidesPerGroup: 3,
            speed: 1000
     
          
            
        });
       })



//메인배너 bxSlider영역
$(document).ready(function(){
    $('.slider').bxSlider({
        // mode : 'vertical',
        mode : 'fade',
        speed : 3000,
        isFiniteloop:true,
        auto:true,
        controls:false,
        pager: false
       

    });
  });

  //nav sticky 영역//
  
  $(function () {
    const $window = $(window),
        header = $('.page-header');
        headerOffsetTop = header.offset().top;
        $window.scroll(function(){
            if($(this).scrollTop()>headerOffsetTop){
                header.addClass('sticky')
                header.addClass('visual')
               
            } else {
                    header.removeClass('sticky')
                    header.removeClass('visual')
                }
        })
    
    });


    $(function () {

        $(window).scroll(function(){
            if($(this).scrollTop()>=200){
                $('.go_top').fadeIn(300);
            }else{
                $('.go_top').fadeOut(300);
            }
        })
            //A.stop().animate(속성,속성값),duration time)
            
            $('.go_top').click(function(e){
                e.preventDefault()
                $('html, body').stop().animate({scrollTop:0},500)
            })
        });
        


        let tabSlide = $('.tab_slide').bxSlider()
    $('.slide_tab').tabs({
        activite: function(event, ui){
        
        }
    })