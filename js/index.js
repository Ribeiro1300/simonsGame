//Gerador de número e cores aleatórias
var buttonColors = ["red", "blue", "green","yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0

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

function nextSequence()
{
    var randomN = Math.floor(Math.random()*4)
    playSound(buttonColors[randomN])
    var randomChosenColor = buttonColors[randomN]
    gamePattern.push(randomChosenColor)
    $("h1").text("Level "+level)
    level++
}

//Escolha do jogador
$(".btn").click(function(event)
{
    var userChosenColor = event.target.id
    animatePress(userChosenColor)
    playSound(userChosenColor)
    userClickedPattern.push(userChosenColor)
})

$("h1").click(nextSequence())