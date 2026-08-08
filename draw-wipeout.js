// FULL APE SKI ESCAPE v0.16 — yard sale faceplant + flying gear
function drawFallenTitus(tx,ty,t){
  const wob=Math.sin(t/180)*0.04;
  ctx.save();
  ctx.translate(tx,ty);
  ctx.rotate(1.35+wob);
  ell(4,18,36,10,'rgba(0,0,0,0.22)');
  ell(-8,22,9,14,'#121212');
  ell(-8,22,6,11,'#222');
  ell(14,18,9,14,'#121212');
  ell(14,18,6,11,'#222');
  ell(-8,34,9,7,'#8b0000');
  ell(-8,34,6,5,'#c41e3a');
  ell(16,30,9,7,'#8b0000');
  ell(16,30,6,5,'#c41e3a');
  ell(0,4,28,16,'#0e0e0e');
  ell(0,4,24,13,'#1a1a1a');
  ell(0,12,16,12,'#121212');
  ell(-28,0,10,16,'#121212');
  ell(-28,0,7,12,'#222');
  ell(26,-6,10,16,'#121212');
  ell(26,-6,7,12,'#222');
  ell(2,-18,16,15,'#0e0e0e');
  ell(2,-18,13,12,'#1c1c1c');
  ctx.globalAlpha=0.85;
  ell(-4,-22,10,6,'#e8f4ff');
  ell(8,-14,8,5,'#d0e8f8');
  ell(-10,6,7,4,'#e8f4ff');
  ctx.globalAlpha=1;
  px(-6,-20,18,6,'#050505');
  px(-4,-19,6,4,'#0e2040');
  px(4,-19,6,4,'#0e2040');
  ctx.restore();
}

function drawDebrisItem(d){
  ctx.save();
  ctx.translate(d.x,d.y);
  ctx.rotate(d.rot);
  const a=Math.max(0.15,Math.min(1,d.life/800));
  ctx.globalAlpha=a;
  if(d.type==='ski'){
    px(-28,-3,56,6,'#1a1a22');
    px(-26,-2,52,4,'#2a2a38');
    px(-30,-4,6,5,'#222230');
    px(22,-2,8,4,'#1a1a22');
    px(-20,-3,40,1,'#4a4a5a');
  } else if(d.type==='pole'){
    ctx.strokeStyle='#1a1a1a';ctx.lineWidth=3;
    ctx.beginPath();ctx.moveTo(0,-26);ctx.lineTo(0,22);ctx.stroke();
    px(-5,20,10,4,'#222');
    px(-3,-28,6,5,'#333');
  } else if(d.type==='boot'){
    ell(0,0,9,8,'#8b0000');
    ell(0,0,6,6,'#c41e3a');
    px(-8,4,16,5,'#6b0000');
    px(-2,-4,5,4,'#a01020');
  }
  ctx.globalAlpha=1;
  ctx.restore();
}
