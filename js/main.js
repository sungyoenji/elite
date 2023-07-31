$(function(){
    $('.visual').slick({
        autoplay: true,
        dots:true
      });
    $('.event').slick({
       autoplay: true,
       dots:true,
       arrows:false
     });

    $('.btn_top').click(function(){
        $('body,html').animate({'scrollTop':0},500)
    })
    $('.m_btn').click(function(){
        $('.cover').fadeIn()
        $('.m_gnb').animate({'left':0},500)
        $('body,html').css({'overflow':'hidden'})
    })
    $('.cover').click(function(){
        $('.cover').fadeOut()
        $('.m_gnb').animate({'left':'-250px'},500)
        $('body,html').css({'overflow-y':'auto'})    // 모바일 버튼 나올때 스클로바 안되게
    })

    // 메인 슬라이드
    // 화면해상도(창의 크기를 조절하면)가 767보다 작으면 
    // 1. slick슬라이드 좌우버튼 숨김
    // 2. 페이지 버튼 나옴
    // 아니면
    // 1. slick슬라이드 좌우버튼 나오게
    // 2. 페이지 버튼 숨김

    $(window).resize(function(){
        console.log('조절됨')
        const num = $(this).width()
        console.log(num)
        if(num <= 767){
            $('main .visual .slick-prev,main .visual .slick-next').hide()
            $('main .visual .slick-dots').show()
        }else{
            $('main .visual .slick-prev,main .visual .slick-next').show()
            $('main .visual .slick-dots').hide()
        }

    // 창의 크기 조절하면 pc버전의 이미지를 모바일 버전의 이미지로 교체
    
    if(num <= 767){
        //모바일버전
        $('main .visual .visual1 img').attr('src','./images/visual01_m.jpg')
        $('main .visual .visual2 img').attr('src','./images/visual02_m.jpg')
        $('main .visual .visual3 img').attr('src','./images/visual03_m.jpg')
        $('main .visual .visual4 img').attr('src','./images/visual04_m.jpg')
         //박스 이미지 교체
         $('.section1 .box1 img').attr('src','./images/img_story01_m.jpg')
         $('.section1 .box2 img').attr('src','./images/img_story02_m.jpg')
         $('.section1 .box3 img').attr('src','./images/img_story03_m.jpg')
         //하단슬라이드
         $('.section3 .event .event1 img').attr('src','./images/img_renewalevent1_m.jpg')
         $('.section3 .event .event2 img').attr('src','./images/img_renewalevent2_m.jpg')
         $('.section3 .event .event3 img').attr('src','./images/img_facebookevent160816_m.jpg')
         $('.section3 .event .event4 img').attr('src','./images/img_blogevent160816_m.jpg')

    }else{
        //pc버전
        $('main .visual .visual1 img').attr('src','./images/visual01.jpg')
        $('main .visual .visual2 img').attr('src','./images/visual02.jpg')
        $('main .visual .visual3 img').attr('src','./images/visual03.jpg')
        $('main .visual .visual4 img').attr('src','./images/visual04.jpg')
        //박스 이미지 교체
        $('.section1 .box1 img').attr('src','./images/img_story01.jpg')
        $('.section1 .box2 img').attr('src','./images/img_story02.jpg')
        $('.section1 .box3 img').attr('src','./images/img_story03.jpg')  
         //하단슬라이드
         $('.section3 .event .event1 img').attr('src','./images/img_renewalevent1.jpg')
         $('.section3 .event .event2 img').attr('src','./images/img_renewalevent2.jpg')
         $('.section3 .event .event3 img').attr('src','./images/img_facebookevent160816.jpg')
         $('.section3 .event .event4 img').attr('src','./images/img_blogevent160816.jpg')      
    }
        
    })//창의 크기 이벤트가 일어났을 때

    //창의 크기 이벤트가 일어나지 않았을 때
    let num = $(window).width();
    if(num <= 767){
        $('main .visual .slick-prev,main .visual .slick-next').hide()
        $('main .visual .slick-dots').show()
    }else{
        $('main .visual .slick-prev,main .visual .slick-next').show()
        $('main .visual .slick-dots').hide()
    }
    if(num <= 767){
        //모바일버전
        $('main .visual .visual1 img').attr('src','./images/visual01_m.jpg')
        $('main .visual .visual2 img').attr('src','./images/visual02_m.jpg')
        $('main .visual .visual3 img').attr('src','./images/visual03_m.jpg')
        $('main .visual .visual4 img').attr('src','./images/visual04_m.jpg')

        //박스 이미지 교체
        $('.section1 .box1 img').attr('src','./images/img_story01_m.jpg')
        $('.section1 .box2 img').attr('src','./images/img_story02_m.jpg')
        $('.section1 .box3 img').attr('src','./images/img_story03_m.jpg')
          //하단슬라이드
        $('.section3 .event .event1 img').attr('src','./images/img_renewalevent1_m.jpg')
        $('.section3 .event .event2 img').attr('src','./images/img_renewalevent2_m.jpg')
        $('.section3 .event .event3 img').attr('src','./images/img_facebookevent160816_m.jpg')
        $('.section3 .event .event4 img').attr('src','./images/img_blogevent160816_m.jpg')
 
    }else{
        //pc버전
        $('main .visual .visual1 img').attr('src','./images/visual01.jpg')
        $('main .visual .visual2 img').attr('src','./images/visual02.jpg')
        $('main .visual .visual3 img').attr('src','./images/visual03.jpg')
        $('main .visual .visual4 img').attr('src','./images/visual04.jpg')
        //박스 이미지 교체
        $('.section1 .box1 img').attr('src','./images/img_story01.jpg')
        $('.section1 .box2 img').attr('src','./images/img_story02.jpg')
        $('.section1 .box3 img').attr('src','./images/img_story03.jpg')
         //하단슬라이드
        $('.section3 .event .event1 img').attr('src','./images/img_renewalevent1.jpg')
        $('.section3 .event .event2 img').attr('src','./images/img_renewalevent2.jpg')
        $('.section3 .event .event3 img').attr('src','./images/img_facebookevent160816.jpg')
        $('.section3 .event .event4 img').attr('src','./images/img_blogevent160816.jpg')      
    }

   

})