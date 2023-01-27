const quotes = [
    {
        quote:"Risk comes from not knowing what you're doing.",
        author:"-Warren Buffett-"
    },
    {
        quote:"Energy and persistence conquer all things.",
        author:"-Benjamin Franklin-"
    },
    {
        quote:"Each success only buys an admission ticket to a more difficult problem.",
        author:"-Henry Kissinger-"
    },
]  // 1.출력할 명언을 찾아서 어레이열에 적음

const quote = document.querySelector("#quotes span:first-child"); //2.출력할 공간을 선택해줌
const author = document.querySelector("#quotes span:last-child");

const onQuotes = (quotes[Math.floor(Math.random() * quotes.length)]); //3. math.random 이란 요소로 랜덤하게 명언나오게 설정

quote.innerText = onQuotes.quote;  //quote ,author 설정후 innertext로 출력되게 설정
author.innerText = onQuotes.author;