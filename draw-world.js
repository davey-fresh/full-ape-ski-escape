// FULL APE SKI ESCAPE v0.15 — world (pine trees, trash, beer, bananas, terrain)
function drawTree(x,y){
  px(x-5,y+16,10,28,'#3a2210');
  px(x-3,y+18,6,24,'#4a2e18');
  ctx.fillStyle='#0a2a0a';
  ctx.beginPath();ctx.moveTo(x,y-28);ctx.lineTo(x-22,y-2);ctx.lineTo(x+22,y-2);ctx.closePath();ctx.fill();
  ctx.fillStyle='#124a12';
  ctx.beginPath();ctx.moveTo(x,y-24);ctx.lineTo(x-18,y);ctx.lineTo(x+18,y);ctx.closePath();ctx.fill();
  ctx.fillStyle='#0a2a0a';
  ctx.beginPath();ctx.moveTo(x,y-12);ctx.lineTo(x-26,y+14);ctx.lineTo(x+26,y+14);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1a5a1a';
  ctx.beginPath();ctx.moveTo(x,y-8);ctx.lineTo(x-20,y+16);ctx.lineTo(x+20,y+16);ctx.closePath();ctx.fill();
  ctx.fillStyle='#0e3a0e';
  ctx.beginPath();ctx.moveTo(x,y+2);ctx.lineTo(x-28,y+28);ctx.lineTo(x+28,y+28);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1e6a1e';
  ctx.beginPath();ctx.moveTo(x,y+6);ctx.lineTo(x-22,y+28);ctx.lineTo(x+22,y+28);ctx.closePath();ctx.fill();
  ctx.fillStyle='#e8f4ff';
  ctx.beginPath();ctx.moveTo(x,y-28);ctx.lineTo(x-8,y-18);ctx.lineTo(x+8,y-18);ctx.closePath();ctx.fill();
  px(x-6,y-6,12,3,'#d0e8f8');
  px(x-8,y+10,16,3,'#d0e8f8');
}

function drawSkier(x,y){px(x-10,y+2,20,28,'#1e2e6a');px(x-8,y+4,16,22,'#2e3e8a');px(x-7,y-12,14,14,'#c49a6c');px(x-5,y-10,10,8,'#d4aa7c');px(x-9,y-18,18,8,'#7a1828');px(x-16,y+28,32,5,'#0a0a0a');px(x-14,y+29,28,2,'#222')}

function drawRock(x,y){px(x-16,y+2,32,26,'#2e2e2e');px(x-12,y+0,24,20,'#4a4a4a');px(x-8,y-2,14,12,'#5e5e5e');px(x-10,y-4,16,6,'#c8d8e8')}

function drawTrash(x,y){
  ctx.fillStyle='#d8d4c8';
  ctx.beginPath();ctx.ellipse(x,y+10,14,12,0.2,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#c8c4b8';
  ctx.beginPath();ctx.ellipse(x-4,y+6,8,7,-0.3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#e8e4d8';
  ctx.beginPath();ctx.ellipse(x+5,y+8,7,6,0.4,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#b8b4a8';
  ctx.beginPath();ctx.ellipse(x-2,y+14,6,5,0.1,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#a0a090';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(x-8,y+4);ctx.lineTo(x+2,y+12);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x+6,y+5);ctx.lineTo(x-3,y+16);ctx.stroke();
  ctx.fillStyle='#f0ece0';
  ctx.beginPath();ctx.ellipse(x+3,y+5,4,3,0,0,Math.PI*2);ctx.fill();
}

function drawPuke(x,y){ctx.fillStyle='#6a8a2a';ctx.beginPath();ctx.ellipse(x,y+10,18,11,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#8aaa3a';ctx.beginPath();ctx.ellipse(x-5,y+6,11,7,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#aaca4a';ctx.beginPath();ctx.ellipse(x+3,y+4,6,4,0,0,Math.PI*2);ctx.fill()}

function drawMogul(x,y){ctx.fillStyle='#98b8d8';ctx.beginPath();ctx.ellipse(x,y+6,32,15,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#b0d0e8';ctx.beginPath();ctx.ellipse(x-10,y+2,18,10,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#d0e4f4';ctx.beginPath();ctx.ellipse(x-4,y-1,9,5,0,0,Math.PI*2);ctx.fill()}

function drawBeer(x,y){
  px(x-8,y,16,22,'#8aa0b8');
  px(x-6,y+2,12,18,'#a8c0d8');
  px(x-5,y+3,10,16,'#b8d0e8');
  px(x-4,y+6,8,10,'#e8c020');
  px(x-3,y+7,6,8,'#f0d040');
  px(x-2,y+8,4,3,'#fff060');
  px(x-7,y-3,14,4,'#c8d8e8');
  px(x-5,y-4,10,2,'#e0e8f0');
  px(x-2,y-6,4,2,'#a0b0c0');
  px(x-6,y+12,12,3,'#fff');
  px(x-5,y+13,10,1,'#4a80b0');
}

function drawBanana(x,y){
  ctx.fillStyle='#e8c020';
  ctx.beginPath();ctx.ellipse(x,y+8,14,7,0.4,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#f0d040';
  ctx.beginPath();ctx.ellipse(x-2,y+6,10,5,0.4,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#c09010';
  ctx.beginPath();ctx.ellipse(x+8,y+4,4,3,-0.5,0,Math.PI*2);ctx.fill();
  px(x+10,y+2,3,3,'#3a2a10');
  ctx.fillStyle='#fff080';
  ctx.beginPath();ctx.ellipse(x-4,y+5,4,2,0.4,0,Math.PI*2);ctx.fill();
}

function drawRamp(x,y){
  ctx.fillStyle='#8aa8c0';
  ctx.beginPath();ctx.moveTo(x-28,y+18);ctx.lineTo(x+8,y-8);ctx.lineTo(x+28,y+4);ctx.lineTo(x+28,y+18);ctx.closePath();ctx.fill();
  ctx.fillStyle='#b0cce0';
  ctx.beginPath();ctx.moveTo(x-24,y+14);ctx.lineTo(x+6,y-4);ctx.lineTo(x+22,y+6);ctx.lineTo(x+22,y+14);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#d8e8f4';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(x-26,y+16);ctx.lineTo(x+6,y-6);ctx.stroke();
}

function drawTerrainSurface(camDist){
  ctx.beginPath();const samples=40;const startDist=camDist-80;const endDist=camDist+520;
  for(let i=0;i<=samples;i++){const t=i/samples;const d=startDist+(endDist-startDist)*t;const h=heightAt(d);const screenY=380+(t-0.3)*220-h*0.55;const screenX=t*800;if(i===0)ctx.moveTo(screenX,screenY);else ctx.lineTo(screenX,screenY)}
  ctx.lineTo(800,620);ctx.lineTo(0,620);ctx.closePath();ctx.fillStyle='#d8e8f4';ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.45)';ctx.lineWidth=3;ctx.beginPath();
  for(let i=0;i<=samples;i++){const t=i/samples;const d=startDist+(endDist-startDist)*t;const h=heightAt(d);const screenY=380+(t-0.3)*220-h*0.55;const screenX=t*800;if(i===0)ctx.moveTo(screenX,screenY);else ctx.lineTo(screenX,screenY)}
  ctx.stroke();
}

function drawBackgroundRidges(camDist){
  ctx.fillStyle='#6a90b0';ctx.beginPath();ctx.moveTo(0,300);
  for(let x=0;x<=800;x+=12){const d=camDist*0.15+x*1.8;const h=(fbm1D(d*0.004+300)-0.5)*70;ctx.lineTo(x,210+h)}
  ctx.lineTo(800,340);ctx.lineTo(0,340);ctx.fill();
  ctx.fillStyle='#d0e0f0';ctx.beginPath();
  for(let x=0;x<=800;x+=20){const d=camDist*0.15+x*1.8;const h=(fbm1D(d*0.004+300)-0.5)*70;const y=210+h;if(h<-15){ctx.moveTo(x-8,y+6);ctx.lineTo(x,y-2);ctx.lineTo(x+8,y+6)}}
  ctx.fill();
  ctx.fillStyle='#7aa0b8';ctx.beginPath();ctx.moveTo(0,340);
  for(let x=0;x<=800;x+=10){const d=camDist*0.35+x*1.2;const h=(fbm1D(d*0.007+500)-0.5)*48;ctx.lineTo(x,290+h)}
  ctx.lineTo(800,400);ctx.lineTo(0,400);ctx.fill();
}
