const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

// Отправляем выбранную категорию боту
function showMovies(category) {
    tg.sendData(category);
}
