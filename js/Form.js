class Form {
  constructor() {
    
    this.input=createInput("Name");
    this.button=createButton("play");
    this.greeting=createElement('h3');
    this.title=createElement("h2")
  }

  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
    this.title.hide()
  }

  display(){
 
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-80, 0);
    
    this.input.position(displayWidth/2-80, 160);
    this.button.position(displayWidth/2-80, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    })

  }
}
