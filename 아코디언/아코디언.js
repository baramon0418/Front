window.onload = () => {
    const panalFaqContaniner = document.querySelectorAll(".panel-faq-container");
    console.log(panalFaqContaniner); //NodeList 객체

    //FAQ 본문 선택
    let panalRaqAnswer = document.querySelectorAll(".panel-faq-answer");


    //반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i=0; i<panalFaqContaniner.length;i++){
        panalFaqContaniner[i].addEventListener('click',function(){
            //FAQ 제목 클릭시--> 본문이 보이게끔--> active클래스 추가.
            panalRaqAnswer[i].classList.toggle('active');
            //toggle로 하면 열렸다 닫힘
            //active를 html구조를 보면서 어느 곳에 붙여야 하는 것인지 봐야하는 게 중요
        });
        
    }
}
