const clock = document.querySelector("h2#clock"); //1. 사용할 범위를 설정해줌

function onClock(){  //2.함수를 생성
    const date = new Date();  //3.Date라는 코드를 date같은 쓰기 편한 정수로 바꿔줌
    const hours = String(date.getHours()).padStart(2,"0");  //6-1 second에 1부터 시작 안하고 0부터시작함(컴퓨터는 0부터 세기 때문) padstart로 앞에 0을 설정해주어 1부터 세게 만듬
    const minutes = String(date.getMinutes()).padStart(2,"0"); // 6-2 이하 동문
    const seconds = String(date.getSeconds()).padStart(2,"0"); // 6-3 이하 동문
    clock.innerText = `${hours}:${minutes}:${seconds}`;  //5. 정수.이너텍스트로 html에 나오게 해줌
}

onClock();  //5. 계속 실시간 변화 해주려면 해당 함수 실행해 줘야함

setInterval(onClock, 1000);  //4. 실시간 시간변화는 setiInterval 이라는 코드 사용 함수메소드 시간설정