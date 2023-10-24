/* 
tab_content 안의 div들 모두 안보이게한다.

링크를 클릭하면 클릭한 그 요소의 href 라는 속성 값을 변수 tabTarget에 저장.
저장된 값에서 #을 삭제한다.
tabTarget = #tabs-1
document.getElementById(tab_1).style.display='block'
*/

let targetLink = document.querySelectorAll('.tab_menu li a');
let tabContent = document.querySelectorAll('.tab_content > div');

for(let i = 0; i < targetLink.length; i++) {
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        let orgTarget = e.target.getAttribute('href');
        
        let tabTarget = orgTarget.replace('#',''); //a.replace ('b','c');<<< replace 값 변경 b값을 c로 변경

        for(let x= 0; x <tabContent.length; x++){
            tabContent[x].style.display='none';
        }

        document.getElementById(tabTarget).style.display='block';

        for(let j = 0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
        
    });
    
}
document.getElementById('tabs_1').style.display='block';




/*
const tabMenu = document.querySelectorAll('.tab_menu li');
const tabContent = document.querySelectorAll('.tab_panel');
const highLight = document.querySelector('.highlight');

tabMenu.forEach(function(item, idx){
    item.addEventListener('click',function(e){
        e.preventDefault();
        showContent(idx);
        moveHighLight(idx);
    });
});
function showContent(num){
    tabContent.forEach(function(item){
        item.computedStyleMap.display = 'none';
    });
    tabContent[num].style.display = 'block';
}
function moveHighLight(num){
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;
    console.log(newWidth);
    highLight.style.left = newLeft +'px';
    highLight.style.left = newWidth +'px';
}

*/