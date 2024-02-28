var reClick = false;

$(function(){
    $(".this_lang").click(function(e){
        if(!reClick){
            reClick = true;
            e.preventDefault();
            $(this).parent(".linkLeft").css("height","36px");
            $(this).siblings("ul").css("display","block");
            $(this).find("a").css("background","url(images/common/lang_arr2.gif) no-repeat right center");
        }else {
            reClick = false;
            e.preventDefault();
            $(this).siblings("ul").css("display","none");
            $(this).parent(".linkLeft").css("height","21px");
            $(this).find("a").css("background","url(images/common/lang_arr.gif) no-repeat right center");
        }
    });

    $('.headerSlideDown').eq(2).css("left","-62px");
    $('.headerSlideDown').eq(3).css("left","-52px");
    $('.headerSlideDown').eq(4).css("left","-82px");
    $('.headerSlideDown').eq(5).css("left","-52px");

    $('.mainMenu > ul > li').hover(function(){
        $(this).find('.headerSlideDown').stop().slideDown();
    }, function(){
        $(this).find('.headerSlideDown').stop().slideUp();
    });
})