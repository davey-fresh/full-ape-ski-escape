// FULL APE SKI ESCAPE v0.16 — core (state, terrain, spawn, audio, yard-sale)
const canvas=document.getElementById('game'),ctx=canvas.getContext('2d');
ctx.imageSmoothingEnabled=false;

let gameState='intro';
let audioCtx=null;
function ensureAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch(e){}}if(audioCtx&&audioCtx.state==='suspended')audioCtx.resume()}

function playTone(f,d,t='square',v=.06,s=0){if(!audioCtx)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=t;o.frequency.setValueAtTime(f,audioCtx.currentTime);if(s)o.frequency.exponentialRampToValueAtTime(Math.max(40,f+s),audioCtx.currentTime+d);g.gain.setValueAtTime(v,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+d);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+d+.02)}

function sfxChug(){playTone(170,.1,'sawtooth',.05);setTimeout(()=>playTone(130,.2,'square',.05),50)}
function sfxJump(){playTone(300,.14,'square',.05,-110)}
function sfxWipe(){playTone(85,.28,'sawtooth',.08,-50);playTone(55,.32,'square',.05)}
function sfxLand(){playTone(105,.07,'triangle',.045)}
function sfxMogul(){playTone(65,.09,'sawtooth',.04)}
function sfxClose(){playTone(210,.07,'square',.04)}
function sfxWin(){playTone(250,.11);setTimeout(()=>playTone(320,.11),70);setTimeout(()=>playTone(380,.16),150)}
function sfxPound(){playTone(75,.08,'triangle',.07)}
function sfxRamp(){playTone(220,.12,'square',.05,80)}

let terrainSeed=1;
function hash(n){n=(n^terrainSeed)*0x45d9f3b;n=(n^(n>>>16))*0x45d9f3b;n=n^(n>>>16);return(n&0x7fffffff)/0x7fffffff}
function valueNoise1D(x){const i=Math.floor(x),f=x-i;const a=hash(i),b=hash(i+1);const u=f*f*(3-2*f);return a+(b-a)*u}
function fbm1D(x,octaves=3){let v=0,amp=.5,freq=1,norm=0;for(let o=0;o<octaves;o++){v+=amp*valueNoise1D(x*freq);norm+=amp;amp*=.5;freq*=2.05}return v/norm}
function heightAt(dist){return (fbm1D(dist*0.0065)-0.5)*55+(fbm1D(dist*0.018+20)-0.5)*22+(fbm1D(dist*0.045+40)-0.5)*8}
function slopeAt(dist){const eps=8;return (heightAt(dist+eps)-heightAt(dist-eps))/(eps*2)}
function getZone(dist){const n=fbm1D(dist*0.0022+100);const progress=dist/LEVEL_DISTANCE;if(progress>0.88)return 'runout';if(n<0.28)return 'open';if(n<0.48)return 'trees';if(n<0.68)return 'moguls';if(n<0.85)return 'rocky';return 'steep'}

let titusX=400,titusY=140,scrollSpeed=2.9,currentSpeedMod=1,boostTimeLeft=0,jumpVy=0,isAirborne=false,mogulSlowLeft=0,shake=0,distance=0;
let airJumpsLeft=1;
const LEVEL_DISTANCE=6500;
let obstacles=[],beers=[],particles=[],wipeoutDebris=[];
let loseTime=0;
let chaseActive=false,chaseStartTime=16500,orangutanX=400,orangutanY=-140,orangutanRage=0,lastCloseSfx=0;
let keys={},lastTime=0,gameStartTime=0,lastSpawn=0,bgOffset=0,touchLeft=false,touchRight=false;
let beersChugged=0,closeCalls=0,jumpsMade=0,runStartTime=0,celebTime=0,bros=[];
let lean=0,leanTarget=0,chugTimer=0,bodyBob=0;
let jumpCooldown=0;

function newSeed(){terrainSeed=(Math.random()*0x7fffffff)|1}
function resetGame(){newSeed();titusX=400;titusY=140;scrollSpeed=2.9;currentSpeedMod=1;boostTimeLeft=0;jumpVy=0;isAirborne=false;airJumpsLeft=1;mogulSlowLeft=0;shake=0;distance=0;obstacles=[];beers=[];particles=[];wipeoutDebris=[];loseTime=0;chaseActive=false;orangutanX=400;orangutanY=-140;orangutanRage=0;lastCloseSfx=0;gameStartTime=Date.now();runStartTime=Date.now();lastSpawn=0;bgOffset=0;beersChugged=0;closeCalls=0;jumpsMade=0;celebTime=0;bros=[];lean=0;leanTarget=0;chugTimer=0;bodyBob=0;jumpCooldown=0}

function spawnObstacle(){
  const zone=getZone(distance);
  let types,weights;
  if(zone==='open'){types=['ramp','rock','trash','banana','puke','mogul','tree'];weights=[0.18,0.1,0.1,0.12,0.12,0.16,0.22]}
  else if(zone==='trees'){types=['tree','skier','puke','rock','banana','mogul','ramp'];weights=[0.34,0.14,0.1,0.1,0.1,0.12,0.1]}
  else if(zone==='moguls'){types=['mogul','ramp','rock','puke','tree','trash','banana'];weights=[0.28,0.16,0.12,0.1,0.12,0.1,0.12]}
  else if(zone==='rocky'){types=['rock','tree','trash','banana','skier','mogul','ramp'];weights=[0.26,0.16,0.12,0.12,0.12,0.11,0.11]}
  else if(zone==='steep'){types=['ramp','tree','rock','skier','banana','puke','mogul'];weights=[0.22,0.2,0.16,0.12,0.12,0.1,0.08]}
  else {types=['rock','puke','trash','banana','mogul','tree','ramp'];weights=[0.15,0.16,0.14,0.14,0.15,0.14,0.12]}
  let r=Math.random(),type='tree',acc=0;
  for(let i=0;i<types.length;i++){acc+=weights[i];if(r<acc){type=types[i];break}}
  const localH=heightAt(distance+180);
  const baseY=titusY+190+Math.random()*110;
  const isRamp=type==='ramp';
  obstacles.push({x:55+Math.random()*690,y:baseY-localH*0.35,type,width:isRamp?56:(type==='skier'?34:(type==='mogul'?48:28)),height:isRamp?28:(type==='mogul'?18:44),speedMod:type==='skier'?1.35:1,sway:type==='skier'?(Math.random()*0.55+0.35):0,groundBias:localH});
}
function spawnBeer(){const localH=heightAt(distance+160);beers.push({x:80+Math.random()*640,y:titusY+165+Math.random()*85-localH*0.3})}
function createParticles(x,y,color,count,speed=3.2){for(let i=0;i<count;i++)particles.push({x:x+(Math.random()-0.5)*20,y:y+(Math.random()-0.5)*10,vx:(Math.random()-0.5)*speed,vy:(Math.random()-0.5)*speed*0.7-0.6,life:280+Math.random()*320,color,size:2+Math.random()*3})}

function triggerYardSale(x,y){
  gameState='lose';loseTime=0;sfxWipe();triggerShake(18);
  createParticles(x,y,'#fff',36,5.5);
  createParticles(x,y,'#c8e0f8',18,4);
  createParticles(x,y,'#ffaa66',10,3);
  const items=[{type:'ski',spread:1},{type:'ski',spread:-1},{type:'pole',spread:0.6},{type:'pole',spread:-0.7},{type:'boot',spread:0.3},{type:'boot',spread:-0.4}];
  for(const it of items){
    wipeoutDebris.push({type:it.type,x:x+(Math.random()-0.5)*20,y:y+(Math.random()-0.5)*10,vx:(Math.random()-0.5)*7+it.spread*3,vy:-4-Math.random()*5,rot:(Math.random()-0.5)*Math.PI,rotV:(Math.random()-0.5)*0.35,life:4000+Math.random()*2000});
  }
}

function doJump(){
  if(gameState!=='playing'||jumpCooldown>0)return;
  if(!isAirborne){isAirborne=true;jumpVy=-7.4;airJumpsLeft=1;jumpsMade++;sfxJump();createParticles(titusX,titusY+30,'#e8f4ff',10,2.5);jumpCooldown=120;}
  else if(airJumpsLeft>0){jumpVy=-6.2;airJumpsLeft--;jumpsMade++;sfxJump();createParticles(titusX,titusY+20,'#c0e0ff',8,2.2);jumpCooldown=140;}
}
function triggerShake(a=10){shake=Math.max(shake,a)}
function px(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}
function ell(x,y,rx,ry,c){ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill()}
