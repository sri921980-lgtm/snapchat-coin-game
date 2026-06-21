//@input SceneObject scoreText

var score = 0;
var highScore = 0;
var timeLeft = 30;
var moveDelay = 0;

var textComp = script.scoreText.getComponent("Component.Text");
var screenTransform = script.getSceneObject().getComponent("Component.ScreenTransform");

function updateUI() {
    textComp.text =
        "Score: " + score +
        "\nTime: " + Math.ceil(timeLeft) +
        "\nHigh Score: " + highScore;
}

updateUI();

script.createEvent("UpdateEvent").bind(function () {

    if (timeLeft > 0) {

        timeLeft -= getDeltaTime();
        moveDelay += getDeltaTime();

        // Move coin every 0.5 seconds
        if (moveDelay > 0.5) {
            moveDelay = 0;

            var x = Math.random() * 1.6 - 0.8;
            var y = Math.random() * 1.6 - 0.8;

            screenTransform.anchors.setCenter(new vec2(x, y));
        }

        updateUI();

    } else {

        if (score > highScore) {
            highScore = score;
        }

        textComp.text =
            "GAME OVER\n" +
            "Final Score: " + score +
            "\nHigh Score: " + highScore;
    }
});

script.createEvent("TapEvent").bind(function () {

    if (timeLeft > 0) {

        // Random points: 1 to 3
        score += Math.floor(Math.random() * 3) + 1;

        if (score > highScore) {
            highScore = score;
        }

        updateUI();
    }
});