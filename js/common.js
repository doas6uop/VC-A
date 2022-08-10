$(document).ready(function(){

    // 상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });

    // 하단 채팅 고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".chat").show();
        } else {
            $(".chat").hide();
        }
    });

    //gnb 2차 메뉴
    $('.depth2, .depth2_bg').hide();
    $('.gnb > li').mouseover(function(){
        $('.depth2').stop().fadeIn();
        $('.depth2_bg').show().fadeIn();
    });
    $('.gnb > li').mouseout(function(){
        $('.depth2').stop().fadeOut();
        $('.depth2_bg').hide().fadeOut();
    });

    //mgnb 2차 메뉴
    $('.mdepth2, .menu_wrap').hide();
    $('.ham').click(function(){
        $('.menu_wrap').show().animate({
            left:'0'
        });
    })
    $('.mclose').click(function(){
        $('.menu_wrap').show().animate({
            left:'-100%'
        });
    })

    //mobile depth2
    $('.mdepth2').hide();
    $('.allmenu li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
    })

    //mobile collation 클릭 이벤트
    $('.c_btn').hide();
    var ww = $(window).width();
    if (ww <= 483.2) {
            $('.c_btn').show();
            $('.collation2').hide();
    } else if (ww > 483.2) {
        $('#collation .inner').removeClass("height");
        $('.c_btn').hide();
        $('.collation2').show();
    } else {
        $('#collation .inner').removeClass("height");
        $('.c_btn').hide();
        $('.collation2').show();
    };
    $('.c_btn').click(function() {
        if ($(this).click) {
            $('#collation .inner').addClass("height");
            $('.collation2').show();
            $('.c_btn').hide();
        } else {
            $('#collation .inner').removeClass("height");
            $('.c_btn').hide();
        }
    });
        
});