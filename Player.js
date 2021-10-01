class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getPlayersAtEnd(){
    var playersAtEndRef = database.ref('playersAtEnd');
    playersAtEndRef.on("value", (data)=> {
      this.rank = data.val();
    })
  }

  static updatePlayer(rank){
    database.ref('/').update({
playersAtEnd:rank
    }
     
    )
  }

  updateRank(rank, index){
    var playerIndex = "players/player" + index;
database.ref(playerIndex).update({
  rank : rank
})
  }
}
