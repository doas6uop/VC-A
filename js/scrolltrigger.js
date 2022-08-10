$(document).ready(function () {

    //스크롤트리거
    $(window).scroll(function () {
        $('.ani').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani');
            }
        });
    });
    //일정 스코롤 높이에 갔을 때 ani라는 클래스를 지우면서 작동하라.

});