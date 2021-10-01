class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data) => {
            gameState = data.val();
        });
    }

    updateState(state) {
        database.ref('/').update({
            gameState: state

        })
    }

    start() {
        background(bgImg);
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
        player1 = createSprite(150, 100);
        player1.addImage(diverImg);
        player1.scale = 0.5;
        player2 = createSprite(150, 500);
        player2.addImage(diverImg);
        player2.scale = 0.5;
        players = [player1, player2];
        starFishGrp = new Group();
     }

    play() {
        background(underwaterImg);
        form.hide();
        Player.getPlayerInfo();
        player.getPlayersAtEnd();
        image(bgImg, 0, 0, -displayWidth * 2, displayHeight)
        if (allPlayers !== undefined) {
            var index = 0;
            var x;
            var y = 100;
            for (var plr in allPlayers) {
                index = index + 1;
                y = y + 200;
                x = (allPlayers[plr].distance + displayWidth);
                players[index - 1].x = x;
                players[index - 1].y = y;
                if (index === player.index) {
                    fill("red");
                    ellipse(x, y, 100);
                    camera.position.x = players[index - 1].x;
                    camera.position.y = displayHeight / 2;

                    if (starFishGrp.isTouching(players[index - 1])) {
                        player.distance = player.distance + 30;
                        console.log("65" ,"Test")
                        player.update();
                    }

                 }

            }
        }


        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance += 50;
            player.update();
        }

        if (frameCount % 100 === 0) {
            obs1 = createSprite(Math.round(random(displayWidth * 2, camera.position.x)), Math.round(random(0, displayHeight)));
            starFishGrp.add(obs1);
            obs1.addImage(starFishImg);
            obs1.scale = 0.45;
            obs1.lifetime = 300;
            starFishGrp.depth = player.depth;
            player.depth = player.depth + 1;
        }
       
        if (player.distance > 12000) {
            gameState = 2;
            player.rank = player.rank + 1;
            player.updateRank(player.rank, player.index);
            Player.updatePlayer(player.rank);
        }



        drawSprites();
    }

    end() {
        background(pearlImg);
        clapSound.play();
        console.log("game ended");
        var position = 0;
        var rankPlace;
        for (var plr in allPlayers) {
            var winner = createElement('h2');
            position = position + 1;
            if (position === player.index) {
                var positionRef = database.ref('players/player' + player.index + '/rank');
                positionRef.on("value", (data) => {
                    rankPlace = data.val();
                    console.log(rankPlace);
                })
                winner.html(player.name + " YOUR RANK IS " + rankPlace);
                winner.position(displayWidth/2 - 75, 150);
            }
        }

    }
}