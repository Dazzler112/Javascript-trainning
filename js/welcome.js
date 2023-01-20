const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //새로 고침 못하게 함
    loginForm.classList.add(HIDDEN_USERNAME); //4.서브밋 입력시 인풋 히든 생김
    const username = loginInput.value; //6. 유저네임은 서브밋 값
    localStorage.setItem(USERNAME_KEY,username); //7.유저네임이 로컬스토리지에 저장
    paintGreetings(username); //8.저장완료
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_USERNAME);  //9.히든을 벗김
    greeting.innerText = `Hello ${username}`; //10. 접속시 헬로XX 출력
}

const savedUserName = localStorage.getItem(USERNAME_KEY); //1.접속시 로컬스토리지에서 판별

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_USERNAME);  //2.처음 접속시 인풋 히든을 벗김
    loginForm.addEventListener("submit",onLoginSubmit); //3. 인풋 서브밋시 onloginsubmit으로 이동
}else{
    paintGreetings(savedUserName); //2-1 접속시 로컬스토리지에 등록돼 있으면 10번출력
}