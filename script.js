let skip = document.getElementById('skip');
let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
let countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll('.qa_set');
let qaAnsRow= document.querySelectorAll('.qa_set .qa_ans_row imput');

skip.addEventListener('click',function(){
    step();
})

qaAnsRow.forEach( function(qaAnsRowSingle)  {
    qaAnsRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
        },500)

        let valid = this.getAttribute("valid");
        if(valid == "valid") {
            scoreCount +=20;
            score.innerHTML = scoreCount;
            totalScore.innerHtml = scoreCount;
        }
    })
});

function step(){
    count += 1;
    for(let i = 0; i < qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 5){
        skype.style.display = 'none';
    
 }
}