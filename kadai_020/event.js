const btn = document.getElementById("btn");

const text = document.getElementById('text');

btn.addEventListener("click", () => {
    const childList = document.createElement("li");

    childList.textContent = "ボタンをクリックしました";

    text.appendChild(childList);

    // id="text"の文章を書き換えるには、textContent を使う。

    text.textContent    = "ボタンをクリックしました。";


    
});