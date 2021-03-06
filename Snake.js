function Snake (){
   //The head of the snake
   this.x = 0;
   this.y = 0;
   //The speed of the head
   this.xspeed =1;
   this.yspeed =0;
   //The rest of the snake
   this.total = 0;
   this.tail = [];


   //This function for the snake object
   //This objects purpose is to recieve x,y and use that to set the direction
   this.dir = function (x,y){
      this.xspeed = x;
      this.yspeed = y;
   }
   this.death = function (){
      for(var i=0;i<this.tail.length;i++){
         var pos = this.tail[i];
         var d = dist(this.x , this.y, pos.x , pos.y);
         if(d<1){
            this.total = 0;
            this.tail = [];
         }
      }
   }
   this.update = function() {
      if (this.total === this.tail.length){
      //Shift everything by one
         for (let i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1];
         }
      }
      this.tail[this.total-1] = createVector (this.x,this.y);

      this.x = this.x + this.xspeed*scl;
      this.y = this.y + this.yspeed*scl;

      this.x = constrain(this.x, 0, width-scl);
      this.y = constrain(this.y, 0, height-scl);


      for (let i = 0; i < this.total-1; i++) {
         this.tail[i] = this.tail[i+1];
      }
   }


   this.eat = function(pos){
      var d = dist( this.x , this.y , pos.x , pos.y );
      if(d<1){
         this.total++;
         return true;
      } else {
         return false;
      }
   }

   this.show = function (){
      fill(255);
      for (let i = 0; i < this.tail.length; i++) {
         rect(this.tail[i].x, this.tail[i].y,scl,scl);
      }
      rect(this.x, this.y, scl,scl);
   }
}



