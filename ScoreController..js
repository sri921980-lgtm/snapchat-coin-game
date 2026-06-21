//@input SceneObject scoreText

var score = 0;

script.createEvent("TapEvent").bind(function() {
    score++;

    var textComp = script.scoreText.getComponent("Component.Text");
    textComp.text = "Score: " + score;
});