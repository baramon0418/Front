window.onload = () => {
    const panalFaqContaniner = document.querySelectorAll(".panel-faq-container");
    console.log(panalFaqContaniner); //NodeList 객체

    //FAQ 본문 선택
    let panalRaqAnswer = document.querySelectorAll(".panel-faq-answer");
    console.log(panalRaqAnswer);

    //btn-all-close
    const btnAllClose = document.querySelector(".btn-all-close");
    console.log(btnAllClose);


    //반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i=0; i<panalFaqContaniner.length;i++){
        panalFaqContaniner[i].addEventListener('click',function(){
            //클릭시 처리 할 일, 사용자가 무엇을 클릭했는지 알 수 있어야 한다.
            console.log('나 클릭..'+i);

            //FAQ 제목 클릭시--> 본문이 보이게끔--> active클래스 추가.
            //this.classList.add('active');
            panalRaqAnswer[i].classList.add('active');
            //active를 html구조를 보면서 어느 곳에 붙여야 하는 것인지 봐야하는 게 중요
            
        })
    }

    btnAllClose.addEventListener('click',function(){
        console.log('모두 닫기 버튼클릭..');

        //버튼 클릭시 처리할 일
        for(let i=0; i<panalRaqAnswer.length;i++){
            panalRaqAnswer[i].classList.remove('active');
        }
    });
}
