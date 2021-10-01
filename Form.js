class Form {

  constructor() {
    this.title = createElement('h2');
    this.subTitle = createElement('h2');
    this.story = createElement('h3');
    this.greeting = createElement('h1');
    this.input = createInput("");
    this.button = createButton("NEXT");
    this.reset = createButton("RESET");
    this.reDirect = createButton("For more information about pearl harvesting, click HERE!!")
  }
 
  display(){
    this.title.html("Pearl Package");
    this.title.position(displayWidth/2 - 60, 10);
    this.title.style('color', 'blue');
    this.subTitle.html("WELCOME TO THE WORLD OF UNDERWATER");
    this.subTitle.position(displayWidth/2 - 250, 40);
    this.subTitle.style('color', 'darkBlue');
    this.story.html("Pearley is a girl who is fond of underwater creatures and pearls. She is very eager in discovering new ideas and collecting information about pearls. She plans to organise a game for her and her friends to play with the collection of pearls in underwater. Pearley wants you to design a game for her in which she can compete with her friends in the collection of pearls. >> Press the right arrow to move the player. >> If the player touches the starfish its speed increases. >> The player who reaches the pearl first is the winner");
    this.story.position(50, 70);
    this.input.position(displayWidth/2, displayHeight/2 - 100);
    this.button.position(displayWidth/2, displayHeight/2 - 50);
    this.button.style('background', 'lightpink');
    this.reset.position(displayWidth - 150, 10);
    this.reDirect.position(displayWidth/2, displayHeight/2);
2
    this.button.mousePressed(()=>{
      this.title.hide();
      this.subTitle.hide();
      this.story.hide();
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      game.updateState(0);
      player.updateCount(0);
      
      database.ref('players').remove();
      location.reload();
      Player.updatePlayer(0);
      });

      this.reDirect.mousePressed(()=>{
      document.location.href = "https://www.thepearlsource.com/blog/about-freshwater-pearls/freshwater-pearl-farming-the-ins-and-outs/"
      });
    
  }
  
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.subTitle.hide();
    this.story.hide();
    this.reDirect.hide();
  }
}
