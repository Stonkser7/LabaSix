let tg = window.Telegram.WebApp;
tg.expand(); 

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#e67e22";

let selected_movie_id = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
    tg.MainButton.setText("Посмотреть сеансы: Интерстеллар");
    selected_movie_id = "interstellar";
    tg.MainButton.show();
});

btn2.addEventListener("click", function () {
    tg.MainButton.setText("Посмотреть сеансы: 1+1");
    selected_movie_id = "one_plus_one";
    tg.MainButton.show();
});

// Отправка ID фильма обратно в aiogram
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(selected_movie_id);
});
