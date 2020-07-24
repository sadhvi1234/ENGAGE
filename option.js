
const options = document.querySelector(".options");

const computer_button = document.querySelector(".computer");
const friend_button = document.querySelector(".friend");
const x_button = document.querySelector(".x");
const o_button= document.querySelector(".o");
const play_button = document.querySelector(".play");

const gameOverElement = document.querySelector(".gameover");

const player = new Object;
let other_player;

o_button.addEventListener("click", function(){
    player.man = "O";
    player.computer = "X";
    player.friend = "X";

    switchActive(x_button, o_button);
});

x_button.addEventListener("click", function(){
    player.man = "X";
    player.computer = "O";
    player.friend = "O";

    switchActive(o_button, x_button);
});
 
computer_button.addEventListener("click", function(){
    other_player = "computer";
    switchActive(friend_button, computer_button);
});

friend_button.addEventListener("click", function(){
    other_player = "friend";
    switchActive(computer_button, friend_button);
});

play_button.addEventListener("click", function(){
    if( !other_player){
        computer_button.style.backgroundColor = "#FF0000";
        friend_button.style.backgroundColor = "#FF0000";
        return;
    }

    if( !player.man ){
        o_button.style.backgroundColor = "#FF0000";
        x_button.style.backgroundColor = "#FF0000";
        return;
    }
    
    init(player, other_player);
    options.classList.add("hide");
});

function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");
}