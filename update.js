// FULL APE SKI ESCAPE v0.15 — update
function update(delta){
  if(gameState==='celebrating'){celebTime+=delta;if(Math.floor(celebTime/280)!==Math.floor((celebTime-delta)/280))sfxPound();return}
  if(gameState!=='playing')return;
  const now=Date.now(),elapsed=now-gameStartTime;
  if(jumpCooldown>0)jumpCooldown-=delta;
  let move=0;
  if(keys['ArrowLeft']||keys['a']||keys['A'])move-=1;
  if(keys['ArrowRight']||keys['d']||keys['D'])move+=1;
  if(touchLeft)move-=1;if(touchRight)move+=1;
  if(keys[' ']||keys['ArrowUp']||keys['w']||keys['W'])doJump();
  leanTarget=move;lean+=(leanTarget-lean)*0.18;
  bodyBob=Math.sin(now/90)*(1.2+(currentSpeedMod-1)*2.5);
  if(chugTimer>0)chugTimer-=delta;
  const handling=(currentSpeedMod>1.35||isAirborne)?0.82:1;
  titusX+=move*6.5*handling;titusX=Math.max(48,Math.min(752,titusX));
  const terrainInfluence=heightAt(distance)*0.12;
  const baseTargetY=268+(distance/LEVEL_DISTANCE)*88-terrainInfluence;
  if(isAirborne){
    jumpVy+=0.36;titusY+=jumpVy;
    if(titusY>=baseTargetY){titusY=baseTargetY;isAirborne=false;jumpVy=0;airJumpsLeft=1;sfxLand();triggerShake(5);createParticles(titusX,titusY+40,'#d0e8ff',8,2)}
  }else{titusY+=(baseTargetY-titusY)*0.02}
  if(boostTimeLeft>0){boostTimeLeft-=delta;currentSpeedMod=1.72}else if(!isAirborne)currentSpeedMod=1;
  if(mogulSlowLeft>0){mogulSlowLeft-=delta;currentSpeedMod*=0.55}
  if(isAirborne)currentSpeedMod=Math.max(currentSpeedMod,1.48);
  const slope=slopeAt(distance);
  const slopeBoost=1+Math.max(-0.08,Math.min(0.12,-slope*0.4));
  const effectiveScroll=scrollSpeed*currentSpeedMod*slopeBoost;
  bgOffset=(bgOffset+effectiveScroll*0.55)%48;
  for(let i=obstacles.length-1;i>=0;i--){
    const obs=obstacles[i];obs.y-=effectiveScroll*obs.speedMod;
    if(obs.sway)obs.x+=Math.sin((now+i*260)/360)*obs.sway*0.85;
    const airSafe=isAirborne&&(baseTargetY-titusY)>28;
    if(!airSafe&&obs.y>titusY-48&&obs.y<titusY+52){
      if(Math.abs(obs.x-titusX)<(obs.width*0.55+18)){
        if(obs.type==='ramp'){isAirborne=true;jumpVy=-9.5;airJumpsLeft=1;currentSpeedMod=Math.max(currentSpeedMod,1.65);sfxRamp();triggerShake(6);createParticles(obs.x,obs.y,'#d0e8ff',14,3.5);jumpsMade++;obstacles.splice(i,1);continue}
        if(obs.type==='mogul'){mogulSlowLeft=900;sfxMogul();triggerShake(4);createParticles(obs.x,obs.y,'#c0d8f0',7,2);obstacles.splice(i,1);continue}
        if(['puke','rock','trash','banana'].includes(obs.type)){createParticles(obs.x,obs.y,obs.type==='puke'?'#8aba3a':(obs.type==='banana'?'#e8c020':'#777'),9);obstacles.splice(i,1);continue}
        else{gameState='lose';sfxWipe();triggerShake(18);createParticles(titusX,titusY,'#fff',32,5);createParticles(titusX,titusY,'#ffaa66',12,4);return}
      }
    }
    if(obs.y<-90)obstacles.splice(i,1);
  }
  for(let i=beers.length-1;i>=0;i--){
    const beer=beers[i];beer.y-=effectiveScroll*1.05;
    if(!isAirborne||(baseTargetY-titusY)<35){
      if(beer.y>titusY-48&&beer.y<titusY+42&&Math.abs(beer.x-titusX)<38){
        boostTimeLeft=5000;beersChugged++;chugTimer=780;sfxChug();
        createParticles(beer.x,beer.y,'#ffdd44',14,3.5);createParticles(beer.x,beer.y,'#fff0aa',6,2);
        beers.splice(i,1);continue;
      }
    }
    if(beer.y<-60)beers.splice(i,1);
  }
  distance+=effectiveScroll*(delta/14.5);
  if(now-lastSpawn>320){lastSpawn=now;const zone=getZone(distance);const spawnChance=zone==='open'?0.62:zone==='trees'?0.85:0.78;if(Math.random()<spawnChance)spawnObstacle();if(Math.random()<0.28)spawnBeer()}
  if(!chaseActive&&elapsed>chaseStartTime){chaseActive=true;orangutanX=(Math.random()<0.5)?-70:870;orangutanY=titusY-200;orangutanRage=0}
  if(chaseActive){
    orangutanRage+=0.00125+(distance/LEVEL_DISTANCE)*0.0004;
    const predict=move*18;const dx=(titusX+predict)-orangutanX;orangutanX+=dx*(0.052+orangutanRage*0.01);
    const targetY=titusY-70;const dy=targetY-orangutanY;const boostSlow=(currentSpeedMod>1.4)?0.42:1;
    orangutanY+=dy*0.048*boostSlow;if(orangutanY>titusY+20)orangutanY-=6;
    const dist=Math.hypot(orangutanX-titusX,orangutanY-titusY);
    if(dist<115&&now-lastCloseSfx>900){closeCalls++;lastCloseSfx=now;sfxClose();triggerShake(3)}
    if(dist<62){gameState='lose';sfxWipe();triggerShake(20);createParticles(titusX,titusY,'#ff6622',28,5);return}
  }
  for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.life-=delta;p.vy+=0.04;if(p.life<=0)particles.splice(i,1)}
  if(shake>0)shake*=0.88;if(shake<0.4)shake=0;
  if(distance>=LEVEL_DISTANCE){gameState='celebrating';celebTime=0;sfxWin();bros=[{x:280,y:380,phase:0},{x:400,y:370,phase:1.2},{x:520,y:380,phase:2.4}];createParticles(400,300,'#ffcc33',40,6)}
}
