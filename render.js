// FULL APE SKI ESCAPE v0.15 — render + gameLoop
function draw(){
  const sx=shake?(Math.random()-0.5)*shake:0,sy=shake?(Math.random()-0.5)*shake:0;
  ctx.save();ctx.translate(sx,sy);
  const grad=ctx.createLinearGradient(0,0,0,600);
  grad.addColorStop(0,'#5a8ab8');grad.addColorStop(0.3,'#8ab0d0');grad.addColorStop(0.65,'#c0d8ec');grad.addColorStop(1,'#e4f0fa');
  ctx.fillStyle=grad;ctx.fillRect(-10,-10,820,620);
  drawBackgroundRidges(distance);drawTerrainSurface(distance);
  ctx.strokeStyle='rgba(160,190,220,0.55)';ctx.lineWidth=2;
  for(let i=-2;i<18;i++){const y=((i*44)-bgOffset)%640;const h=heightAt(distance+(i*30))*0.15;ctx.beginPath();ctx.moveTo(0,y-h);ctx.lineTo(800,y+16-h);ctx.stroke()}
  if(gameState==='intro'){
    ctx.fillStyle='rgba(5,12,24,0.84)';ctx.fillRect(0,0,800,600);
    px(372,210,56,100,'#2e4a6a');px(380,218,40,80,'#3e5a7a');
    px(384,170,32,42,'#b89060');px(388,174,24,30,'#c8a070');px(380,164,40,12,'#121212');
    ctx.fillStyle='#fff';ctx.font='bold 34px system-ui';ctx.textAlign='center';
    ctx.fillText('You need to get away...',400,90);
    ctx.font='18px system-ui';ctx.fillText('Click or tap to transform into Titus',400,450);
    ctx.fillText('Every run generates a new mountain',400,478);
    ctx.font='14px system-ui';ctx.fillStyle='#ffcc33';
    ctx.fillText('Space / W / ↑ JUMP (mash for air)  •  Hit ramps for big launches',400,530);
  }else if(gameState==='celebrating'){
    ctx.fillStyle='rgba(0,0,0,0.76)';ctx.fillRect(0,0,800,600);
    drawTitus(400,250,Math.sin(celebTime/150)*0.8,Math.sin(celebTime/80)*3,false,1);
    for(const b of bros){b.phase+=0.09;drawBro(b.x,b.y,b.phase)}
    ctx.fillStyle='#ffcc33';ctx.font='bold 36px system-ui';ctx.textAlign='center';
    ctx.fillText('YOU MADE IT TO THE BOTTOM!',400,68);
    ctx.fillStyle='#fff';ctx.font='20px system-ui';
    ctx.fillText('Titus and the boys are chest-pounding',400,118);
    ctx.fillText('and chugging at the chalet',400,146);
    const t=((Date.now()-runStartTime)/1000).toFixed(1);
    ctx.fillStyle='rgba(12,24,44,0.94)';px(235,425,330,120);
    ctx.strokeStyle='#ffcc33';ctx.lineWidth=2;ctx.strokeRect(235,425,330,120);
    ctx.fillStyle='#ffcc33';ctx.font='bold 16px system-ui';ctx.fillText('RUN STATS',400,450);
    ctx.fillStyle='#fff';ctx.font='14px system-ui';
    ctx.fillText(`Beers: ${beersChugged}  •  Jumps: ${jumpsMade}  •  Close calls: ${closeCalls}`,400,480);
    ctx.fillText(`Time: ${t}s  •  Seed: ${terrainSeed}`,400,505);
    ctx.fillText('Click / tap to escape again (new mountain)',400,530);
  }else{
    for(const obs of obstacles){
      if(obs.type==='tree')drawTree(obs.x,obs.y);
      else if(obs.type==='skier')drawSkier(obs.x,obs.y);
      else if(obs.type==='puke')drawPuke(obs.x,obs.y);
      else if(obs.type==='rock')drawRock(obs.x,obs.y);
      else if(obs.type==='trash')drawTrash(obs.x,obs.y);
      else if(obs.type==='banana')drawBanana(obs.x,obs.y);
      else if(obs.type==='mogul')drawMogul(obs.x,obs.y);
      else if(obs.type==='ramp')drawRamp(obs.x,obs.y);
    }
    for(const beer of beers)drawBeer(beer.x,beer.y);
    const chugging=chugTimer>0;
    if(isAirborne){ctx.save();ctx.translate(titusX,titusY);ctx.scale(1.12,1.12);drawTitus(0,0,lean,bodyBob*0.5,chugging,currentSpeedMod);ctx.restore()}
    else drawTitus(titusX,titusY,lean,bodyBob,chugging,currentSpeedMod);
    if(chaseActive){
      const dist=Math.hypot(orangutanX-titusX,orangutanY-titusY);
      const sc=dist<100?1.14:1;
      drawMama(orangutanX,orangutanY,sc,orangutanRage);
      if(dist<130){ctx.fillStyle='rgba(255,40,20,0.1)';ctx.beginPath();ctx.arc(orangutanX,orangutanY,85,0,Math.PI*2);ctx.fill()}
    }
    for(const p of particles){ctx.globalAlpha=Math.max(0.12,p.life/500);px(p.x,p.y,p.size,p.size,p.color)}
    ctx.globalAlpha=1;
    const prog=Math.min(distance/LEVEL_DISTANCE,1);
    px(40,14,720,20,'#0a1422');px(40,14,720*prog,20,'#d89800');px(40,14,720*prog,5,'#ffc030');
    ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.strokeRect(40,14,720,20);
    ctx.fillStyle='#fff';ctx.font='bold 13px system-ui';ctx.textAlign='left';
    ctx.fillText(`${Math.floor(distance)}m / ${LEVEL_DISTANCE}m`,50,29);
    const zone=getZone(distance);
    ctx.fillStyle='#a0c8e8';ctx.font='12px system-ui';
    ctx.fillText(zone.toUpperCase(),700,29);
    if(boostTimeLeft>0){px(40,40,(boostTimeLeft/5000)*160,9,'#d89800');ctx.strokeRect(40,40,160,9);ctx.fillStyle='#fff';ctx.fillText('CHUGGING',210,49)}
    if(mogulSlowLeft>0){ctx.fillStyle='#88b0d0';ctx.fillText('MOGUL!',310,49)}
    if(isAirborne){ctx.fillStyle='#90c8ff';ctx.fillText('AIR'+(airJumpsLeft>0?' +':''),380,49)}
    if(chaseActive){
      const dist=Math.hypot(orangutanX-titusX,orangutanY-titusY);
      ctx.font='bold 15px system-ui';
      if(dist<110){ctx.fillStyle='#ff3030';ctx.fillText("SHE'S RIGHT THERE!",555,46)}
      else{ctx.fillStyle='#ff6060';ctx.fillText("SHE'S COMING...",575,46)}
    }
    if(gameState==='lose'){
      ctx.fillStyle='rgba(0,0,0,0.84)';ctx.fillRect(0,0,800,600);
      ctx.fillStyle='#ff3838';ctx.font='bold 42px system-ui';ctx.textAlign='center';
      ctx.fillText('YARD SALE...',400,170);
      ctx.fillStyle='#fff';ctx.font='19px system-ui';
      ctx.fillText('She grabbed you and dragged you off the mountain.',400,230);
      ctx.fillText('Time to go watch the kids.',400,260);
      const t=((Date.now()-runStartTime)/1000).toFixed(1);
      ctx.font='15px system-ui';ctx.fillStyle='#ffcc33';
      ctx.fillText(`Made it ${Math.floor(distance)}m  •  ${beersChugged} beers  •  ${closeCalls} close calls  •  ${t}s`,400,320);
      ctx.fillStyle='#88aacc';ctx.fillText(`Mountain seed: ${terrainSeed}`,400,350);
      ctx.fillStyle='#bbb';ctx.font='17px system-ui';ctx.fillText('Click / tap for a new mountain',400,400);
    }
  }
  ctx.restore();
}

function gameLoop(ts=0){const delta=Math.min(ts-lastTime||16,40);lastTime=ts;update(delta);draw();requestAnimationFrame(gameLoop)}
window.addEventListener('keydown',e=>{ensureAudio();keys[e.key]=true;if(e.key===' '||e.key==='ArrowUp'||e.key==='w'||e.key==='W'){e.preventDefault();doJump()}if((gameState==='lose'||gameState==='celebrating')&&(e.key===' '||e.key==='Enter')){gameState='intro';resetGame()}});
window.addEventListener('keyup',e=>{keys[e.key]=false});
canvas.addEventListener('click',()=>{ensureAudio();if(gameState==='intro'){gameState='playing';resetGame()}else if(gameState==='lose'||gameState==='celebrating'){gameState='intro';resetGame()}});
canvas.addEventListener('touchstart',e=>{ensureAudio();if(gameState==='intro'){e.preventDefault();gameState='playing';resetGame()}else if(gameState==='lose'||gameState==='celebrating'){e.preventDefault();gameState='intro';resetGame()}},{passive:false});
