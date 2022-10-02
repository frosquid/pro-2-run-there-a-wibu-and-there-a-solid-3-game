
function Player(name,blood,speed){
    this.name = name;
    this.blood = blood;
    this.speed = speed;
}
Player.prototype.Move = function (Key, ) {
    if(KeyStatus.s){
        if(y <= 450 ){
          y+=speed;
          rigidBody.style.top = `${y}${units}`;
        }
        console.log(`X : ${x} - Y : ${y}`)
        }
      else if(KeyStatus.w){
          if (y >= 0){
            y-=speed;
            rigidBody.style.top = `${y}${units}`;
          }
          
          console.log(`X : ${x} - Y : ${y}`)
        }
      else if(KeyStatus.d){
          if(x <= 450){
            x+=speed;
            rigidBody.style.left = `${x}${units}`;
          }
          
          console.log(`X : ${x} - Y : ${y}`)
        }
      else if(KeyStatus.a){
        if(x >= 0){ 
          x-=speed;
          rigidBody.style.left = `${x}${units}`;
        }
          
          console.log(`X : ${x} - Y : ${y}`)
        }
}
Player.prototype.Collision = function () {

}

function Canvas(id){
    this.id = id;
}
Canvas.prototype.Width = function (){
    let elemen = window.getComputedStyle(document.getElementById(this.id));
    let string = elemen.getPropertyValue("width").replace(/px|%/,'')
    return parseInt(string)
}
Canvas.prototype.Height = function (){
    let elemen = window.getComputedStyle(document.getElementById(this.id));
    let string = elemen.getPropertyValue("height").replace(/px|%/,'')
    return parseInt(string)
}

function Process(Object){
    this.Object = Object;
}
Process.prototype.TrigerKey = function (key,func){
    if(KeyStatus.key <= Canvas){
        
    }
}

const KeyStatus = {}, bullet = [];
document.addEventListener('keydown',k => KeyStatus[k.key] = true);
document.addEventListener('keyup',k => KeyStatus[k.key] = false);
let y = 250,speed = 5,x = 250, units = 'px',frame = 0, bulletHtml = '',npc = [0,0,10],
blood = 100, npcblood = 5, npcspeed = 1, lvl= 1,namanpc = ['WIBU','onichan', 'Demon','furry','solidx3'];
const rigidBody = document.getElementById('player');
let cocot = Math.floor(Math.random() * namanpc.length);



  function suk(){
    
        
    document.getElementById('lvl').innerHTML = `${namanpc[cocot]} <p style="font-size : 14px;"> lvl ${lvl}</p>`;
    bulletHtml = '';
    frame++;
    if(KeyStatus.s){
      if(y <= 450 ){
        y+=speed;
        rigidBody.style.top = `${y}${units}`;
      }
      console.log(`X : ${x} - Y : ${y}`)
      }
    else if(KeyStatus.w){
        if (y >= 0){
          y-=speed;
          rigidBody.style.top = `${y}${units}`;
        }
        
        console.log(`X : ${x} - Y : ${y}`)
      }
    else if(KeyStatus.d){
        if(x <= 450){
          x+=speed;
          rigidBody.style.left = `${x}${units}`;
        }
        
        console.log(`X : ${x} - Y : ${y}`)
      }
    else if(KeyStatus.a){
      if(x >= 0){ 
        x-=speed;
        rigidBody.style.left = `${x}${units}`;
      }
        
        console.log(`X : ${x} - Y : ${y}`)
      }
    if(frame >= 15 && KeyStatus.p){
        if(bullet.length == 0){
          bullet.push([y],[x+25])
        }
        else{
          bullet[0].push(y);
          bullet[1].push(x+25)
        }
        console.log(bullet);
        frame = 0
      }
    if(bullet[0] !=undefined){
      for(let i= 0 ; i < bullet[0].length ; i++ ){
        bullet[0][i]--
         if(bullet[0][i] <= npc[0] + 50 && bullet[0][i] >= npc[0] - 10 && bullet[1][i] <= npc[1] + 50 && bullet[1][i] >= npc[1] - 10){
          bullet[0].splice(i,1);
          bullet[1].splice(i,1);
          npc[2]--
        }
        else if(bullet[0][i] >= 0 ){
          bulletHtml += `<div class="bullet" style="top : ${bullet[0][i]}px; left : ${bullet[1][i]}px"></div>`;
          
        }
        
        
        else{
          bullet[0].splice(i,1);
          bullet[1].splice(i,1);
        }
      }
    }
    if(npc[2] <= 0){

      npc = [0,0];
      npcblood += 5;
      npc[2] = npcblood;
      npcspeed+=0.05;
      lvl++;
    cocot = Math.floor(Math.random() * namanpc.length);
      
    }

      if(npc[0] < y ){
        if(npc[0] >= y-50){
          
        }
        else{
          npc[0]+=npcspeed;
          document.getElementById('npc').style.top = `${npc[0]}${units}`
          console.log('ahoy');
        }
      
      }
      if(npc[1] < x ){
          npc[1]+=npcspeed;
          document.getElementById('npc').style.left = `${npc[1]}${units}`
      }
      if(npc[0] > y){
        if(npc[0] <= y + 50){
          
        }
        else{
          npc[0]-=npcspeed;
          document.getElementById('npc').style.top = `${npc[0]}${units}`
          console.log('ahoy');
        }
      }
      if(npc[1] > x ){
        npc[1]-=npcspeed;
        document.getElementById('npc').style.left = `${npc[1]}${units}`
      }
    
    
    if(npc[0] >= y - 50 && npc[0] <= y + 50 && npc[1] >= x - 50 && npc[1] <= x + 50){
      blood--;
      }
    
    
    document.getElementById('blood').innerHTML = `<p>${npc[2]}</p>`; 
    document.getElementById('player').innerHTML = `<p>${blood}</p>`;   
    document.getElementById('shot').innerHTML = bulletHtml;
    
    if(blood > 0){
        window.requestAnimationFrame(suk);
    }
    
    else{
        document.getElementById('end').style.display = 'flex';
    }
  } 
  
  function restart(){
    document.getElementById('end').style.display = 'none';
    blood = 100;
    npcblood = 5;
    npc = [0,0,5];
    lvl = 1;
    
    window.requestAnimationFrame(suk);
  }