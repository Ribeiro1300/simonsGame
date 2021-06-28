//Gerador de número e cores aleatórias
var buttonColors = ["red", "blue", "green","yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false

//som dos botões
function playSound(name)
{
    var sound = new Audio("sounds/"+name+".mp3")
    sound.play()
}
//animação
function animatePress(currentColor)
{
    var x = $("#"+currentColor)
    x.fadeOut(100).fadeIn(100)
    x.addClass("pressed").delay(500).removeClass("pressed")


}

$("#level-title").click(function ()
{
    if (started != true)
    {
        $("h1").text("Level "+level)
        nextSequence();
        started = true;
    }
})

//Escolha do jogador
$(".btn").click(function(event)
{
    var userChosenColor = event.target.id
    animatePress(userChosenColor)
    playSound(userChosenColor)
    userClickedPattern.push(userChosenColor)
    if (gamePattern.length == userClickedPattern.length)
        checkAnswer(userClickedPattern.length - 1)
})


function checkAnswer(currentLevel)
{

    if (gamePattern[currentLevel] == userClickedPattern[currentLevel])
    {
        console.log("sucess")

        if (gamePattern.length == userClickedPattern.length)
            setTimeout(nextSequence(), 100000)
    }
    else
    {
        console.log("wrong")
        $("body").addClass("game-over")
        setTimeout(function()
        {
            $("body").removeClass("game-over")
        },100)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
    
    
}
function nextSequence()
{
    var randomN = Math.floor(Math.random()*4)
    playSound(buttonColors[randomN])
    animatePress(buttonColors[randomN])
    var randomChosenColor = buttonColors[randomN]
    gamePattern.push(randomChosenColor)
    $("h1").text("Level "+level)
    level++
    userClickedPattern = []
}
function startOver()
{
    level = 0
    gamePattern = []
    started = false
}