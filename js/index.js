//Gerador de número e cores aleatórias
var buttonColors = ["red", "blue", "green","yellow"]
var gamePattern = []
var userClickedPattern = []

function nextSequence()
{
    var randomN = Math.floor(Math.random()*4)
    playSound(buttonColors[randomN])
    var randomChosenColor = buttonColors[randomN]
    $("#"+randomChosenColor).click().fadeOut(100).fadeIn(100)
    gamePattern.push(randomChosenColor)
    var level = 0
    $("h1").text("Level "+level)
    level++
}

//som dos botões
function playSound(name)
{
    var sound = new Audio("sounds/"+name+".mp3")
    sound.play()
}

//animação
function animatePress(currentColor)
{

}
//interação com os botões
$(".btn").click(function(event)
{
    var userChosenColor = event.target.id
    userClickedPattern.push(userChosenColor)
})

$(document).keypress(nextSequence())