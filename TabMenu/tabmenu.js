$(function(){
    let tabAnchor = $('.tabs_nav li a'),
        tabPanel = $('.tab_panel');

        // 링크를 클릭하면 할 일
        tabAnchor.click(function(e){
            e.preventDefault(); // a링크 기본속성 제거
            
            tabAnchor.removeClass('active'); //active 빼고
            $(this).addClass('active'); //그 요소만 추가
            
            tabPanel.hide();  //none 숨김
            
            let target = $(this).attr('href'); //attr로 속성을 가져옴
            
            $(target).show(); //block 보이기
        })
        tabAnchor.eq(0).trigger('click'); // 탭 첫화면 보이기
});