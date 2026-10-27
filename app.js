let tg = window.Telegram.WebApp;
tg.expand(); 

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#e67e22";

let selected_movie = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
    tg.MainButton.setText("Посмотреть сеансы: Интерстеллар");
    selected_movie = "Интерстеллар";
    tg.MainButton.show();
});

btn2.addEventListener("click", function () {
    tg.MainButton.setText("Посмотреть сеансы: 1+1");
    selected_movie = "1+1";
    tg.MainButton.show();
});

// Отправка названия фильма обратно в aiogram
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(selected_movie);
});
