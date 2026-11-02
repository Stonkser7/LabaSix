const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#e67e22";

let selectedMovieId = "";

function selectMovie(id, buttonText) {
    selectedMovieId = id;

    tg.MainButton.setText(buttonText);
    tg.MainButton.show();
}

tg.onEvent("mainButtonClicked", function () {
    if (!selectedMovieId) {
        return;
    }

    tg.sendData(selectedMovieId);
});
