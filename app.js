let tg = window.Telegram.WebApp;

// Сообщаем Telegram, что Web App загрузился и готов к работе
tg.ready();
tg.expand(); 

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#e67e22";

let selected_movie_id = "";

// Функция, которая вызывается при клике по кнопкам из HTML
function selectMovie(id, buttonText) {
    selected_movie_id = id;
    tg.MainButton.setText(buttonText);
    tg.MainButton.show();
}

// Отправка ID фильма обратно в aiogram при клике на нативную кнопку Telegram
tg.onEvent("mainButtonClicked", function () {
    tg.sendData(selected_movie_id);
});
