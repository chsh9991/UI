$(function(){   
    $('.question').click(function(){
        $(this).next().slideToggle().siblings('.answer').slideUp() 
        //next 로 다음요소 를 열고 slideToggle로 보여준다
        //siblings 접히는 요소인 answer 만 넣는다.
    });
});


