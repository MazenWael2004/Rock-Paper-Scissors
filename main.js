const choices = ['rock','paper','scissors'];
var userchoice;
var housechoice;
var score = 0;
var GameBool = false;
var playbutton = $(".play-again-button");
$(".game-result").hide();
$(".lose-box").hide();
$(".win-box").hide();



$(".logo").click(function(){
    var randomNumber = Math.floor(Math.random() * 3);
    housechoice = choices[randomNumber];
    
    if($(this).hasClass("rock")){
        userchoice = 'rock';
    }
    else if($(this).hasClass("paper")){
        userchoice = "paper";
    }
    else{
        userchoice = "scissors";
    }
    
    if(userchoice == 'rock' && housechoice == 'scissors' || userchoice == 'paper' && housechoice == 'rock' || userchoice == 'scissors' && housechoice == 'paper' ){
        GameWon();
        GameBool = true;
        UpdateScoreBoard();
    }
    else{
        GameLost();
    }

    var userimagechosen = $(".user-chosen-image");
    var houseimagechosen = $(".house-chosen-image");

    houseimagechosen.attr("src","icon-"+housechoice+".svg");
    userimagechosen.attr("src","icon-"+userchoice+".svg");

    $(".user-chosen-logo").addClass(userchoice);
    $(".house-chosen-logo").addClass(housechoice);

    playbutton.click(function(){
        PlayAgain();
    })

    

})



function GameWon(){
    $(".game").addClass("hidden");
    setTimeout(()=>{
        $(".game").hide();
    },800);
    $(".game-result").removeClass("hidden");
    setTimeout(()=>{
        $(".game-result").show();
    },1000);
    $(".win-box").show();
    $(".logo").addClass("disabled");

}

function GameLost(){
    $(".game").addClass("hidden");
    setTimeout(()=>{
        $(".game").hide();
    },800);
    $(".game-result").removeClass("hidden");
    setTimeout(()=>{
        $(".game-result").show();
    },1000);
    $(".lose-box").show();
}



function UpdateScoreBoard(){
    score = score+1;
    $(".score-number").text(score);
}


function PlayAgain() {
    // Hide the lose or win box
    $(".lose-box").hide();
    $(".win-box").hide();

    // Reset game state
    $(".game").removeClass("hidden");
    $(".game-result").hide();
    $(".game").show();

    // Reset images and classes
    $(".user-chosen-logo").removeClass(userchoice);
    $(".house-chosen-logo").removeClass(housechoice);
    $(".user-chosen-image").attr("src", "");
    $(".house-chosen-image").attr("src", "");
}
