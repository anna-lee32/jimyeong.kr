// main 에 텍스트 작성 & 삭제 (span 태그)
(function(){
    const spanEl = document.querySelector('main h2 span') //$표시랑 동일, 2개 이상의 태그 가져온다면 querySelector All 써줌
    const txtArr = ['영상편집자', 'Designer', '나는 천재', 'jambajuice']
    
    let index = 0;
    let currentTxt = txtArr[index].split("") // txt안의 단어를 한 글자씩 분리시킨다라고 currentTxt라는 태그를 정의한다? 만든다
    
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()   //y+=x 는 y=y+x, shift()는 맨 앞 요소를 추출하고 삭제 //shift는 앞에서 가져오는 것
        
        if(currentTxt.length !== 0 ) { //!==는 값이나 자료값이 다를때
            //아직 출력할 게 남았을 때 (텍스트가 남아있을때)
            
            setTimeout(writeTxt, Math.floor(Math.random() * 100)) //Math.random 은 0~1 중 무작위 수 //랜덤한 시간동안 적히도록
        }else {
            //다 출력되었을때
            currentTxt = spanEl.textContent.split("")  // 텍스트를 지우기 위해서 화면에 표시된 텍스트들을 다시 한글자 단위로 분리해서 가져오기
            setTimeout(deleteTxt, 3000) 
        }
    }
    function deleteTxt() {
        currentTxt.pop() //pop()은 마지막부터 삭제시키는 것
        spanEl.textContent = currentTxt.join("")
        if(currentTxt.length !== 0) {
            //텍스트 삭제가 덜됐을 때
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            //텍스트 삭제 완료됐을 때
            index = (index + 1) % txtArr.length   //다음 텍스트 실행시키기 위해서 index 번호에서 +1시켜주는 것
            currentTxt = txtArr[index].split("")
            writeTxt()
            
        }
        
    }
    writeTxt()
})()

// 스크롤 내리면 header에 클래스 추가하기
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0) {       //세로 스크롤이라서 scrollY
        this.document.querySelector('header').classList.add('on')
    }else{
        document.querySelector('header').classList.remove('on')
    }
})

// header 에 버튼 누르면 해당하는 곳으로 이동하기
const animationMove = function(selector) { //selector 이름 변경 가능 (매개변수)
    const targetEl = document.querySelector(selector)
    const bsy = window.scrollY
    const targets = targetEl.getBoundingClientRect().top + bsy //내 상대적인 위치 찾기 > .getBoundingClientRec
    window.scrollTo({
        top : targets,
        behavior : 'smooth'
    })
}
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length; i++) {  
      //반복문 for (초기값; 얼만큼 반복할지 / 반복할 숫자, i++(하나씩 증가))
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target;
        animationMove(target)
    })
}