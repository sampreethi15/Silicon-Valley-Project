var diverImg, pearlImg, starFishImg, underwaterImg, bgImg, clapSound;
var game, form, player;
var allPlayers;
var players, player1, player2, pearl;
var obs1, starFishGrp;
var playerCount;
var gameState = 0;

function preload() {
    diverImg = loadImage("Diver.png");
    pearlImg = loadImage("pearl.png");
    starFishImg = loadImage("Starfish .png");
    underwaterImg = loadImage("underwater.jpg");
    bgImg = loadImage("background.jpg");
    clapSound = loadSound("clapSound.wav");
}
function setup() {
    database = firebase.database();
    createCanvas(displayWidth - 30, displayHeight - 50);
    game = new Game();
    game.getState();
    game.start();
    }

function draw() {
    
    if (playerCount === 2) {
        game.updateState(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }

}

