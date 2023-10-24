const question = document.querySelectorAll('.question');


for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', function(){
        for(let x = 0; x <question.length; x++){
            question[x].classList.remove('active');
        }
        this.classList.add('active');
 });
}
