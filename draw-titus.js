// FULL APE SKI ESCAPE v0.17 — Titus (skis, boots, muscle, head-tilt Busch chug)
function drawTitus(tx,ty,leanAmt,bob,chugging,speed){
  const lx=leanAmt*7;
  ctx.save();
  ctx.translate(tx,ty+bob);
  ctx.rotate(leanAmt*0.12);

  ell(lx*0.3,70,38+Math.abs(leanAmt)*5,9,'rgba(0,0,0,0.3)');

  const skiLean=leanAmt*10;
  const lsx = -18 + skiLean;
  px(lsx-22, 62, 48, 5, '#1a1a22');
  px(lsx-20, 63, 44, 3, '#2a2a38');
  px(lsx-28, 61, 8, 4, '#1a1a22');
  px(lsx-30, 60, 5, 3, '#222230');
  px(lsx-32, 59, 4, 2, '#2a2a38');
  px(lsx+24, 63, 6, 3, '#1a1a22');
  px(lsx-20, 62, 42, 1, '#4a4a5a');
  px(lsx-4, 60, 12, 4, '#333');
  px(lsx-3, 61, 10, 2, '#555');

  const rsx = 10 + skiLean;
  px(rsx-10, 62, 48, 5, '#1a1a22');
  px(rsx-8, 63, 44, 3, '#2a2a38');
  px(rsx+32, 61, 8, 4, '#1a1a22');
  px(rsx+36, 60, 5, 3, '#222230');
  px(rsx+38, 59, 4, 2, '#2a2a38');
  px(rsx-14, 63, 6, 3, '#1a1a22');
  px(rsx-8, 62, 42, 1, '#4a4a5a');
  px(rsx+2, 60, 12, 4, '#333');
  px(rsx+3, 61, 10, 2, '#555');

  const legSpread=8+Math.abs(leanAmt)*3.5,legBend=speed>1.3?3:0;
  ell(-12-legSpread+lx*0.3, 36+legBend, 10, 14, '#121212');
  ell(-12-legSpread+lx*0.3, 36+legBend, 7, 11, '#222');
  ell(12+legSpread+lx*0.3, 36+legBend, 10, 14, '#121212');
  ell(12+legSpread+lx*0.3, 36+legBend, 7, 11, '#222');

  const lbX = -12-legSpread+lx*0.3;
  ell(lbX, 52+legBend, 9, 8, '#8b0000');
  ell(lbX, 52+legBend, 6, 6, '#c41e3a');
  px(lbX-8, 56+legBend, 16, 5, '#6b0000');
  px(lbX-7, 57+legBend, 14, 2, '#4a0000');
  px(lbX-3, 48+legBend, 6, 4, '#a01020');
  px(lbX-2, 49+legBend, 4, 2, '#e03040');
  px(lbX-1, 51+legBend, 3, 2, '#ddd');

  const rbX = 12+legSpread+lx*0.3;
  ell(rbX, 52+legBend, 9, 8, '#8b0000');
  ell(rbX, 52+legBend, 6, 6, '#c41e3a');
  px(rbX-8, 56+legBend, 16, 5, '#6b0000');
  px(rbX-7, 57+legBend, 14, 2, '#4a0000');
  px(rbX-3, 48+legBend, 6, 4, '#a01020');
  px(rbX-2, 49+legBend, 4, 2, '#e03040');
  px(rbX-1, 51+legBend, 3, 2, '#ddd');

  const tx0 = lx*0.5;
  ell(tx0, 6, 30, 18, '#0e0e0e');
  ell(tx0, 6, 26, 15, '#1a1a1a');
  ell(tx0, 20, 18, 14, '#121212');
  ell(tx0, 20, 14, 11, '#1e1e1e');
  ell(tx0, 28, 12, 8, '#161616');

  ell(tx0-11, 2, 12, 10, '#222');
  ell(tx0+11, 2, 12, 10, '#222');
  ell(tx0-11, 1, 8, 7, '#2e2e2e');
  ell(tx0+11, 1, 8, 7, '#2e2e2e');
  ell(tx0-11, 0, 4, 4, '#3a3a3a');
  ell(tx0+11, 0, 4, 4, '#3a3a3a');
  px(tx0-2, 2, 4, 8, '#181818');

  px(tx0-7, 12, 6, 5, '#1a1a1a');
  px(tx0+1, 12, 6, 5, '#1a1a1a');
  px(tx0-6, 13, 4, 3, '#2a2a2a');
  px(tx0+2, 13, 4, 3, '#2a2a2a');
  px(tx0-7, 18, 6, 5, '#1a1a1a');
  px(tx0+1, 18, 6, 5, '#1a1a1a');
  px(tx0-6, 19, 4, 3, '#2a2a2a');
  px(tx0+2, 19, 4, 3, '#2a2a2a');
  px(tx0-6, 24, 5, 4, '#1a1a1a');
  px(tx0+1, 24, 5, 4, '#1a1a1a');
  px(tx0-5, 25, 3, 2, '#2a2a2a');
  px(tx0+2, 25, 3, 2, '#2a2a2a');
  px(tx0-1, 12, 2, 16, '#0e0e0e');

  ell(tx0-26, -4, 9, 7, '#0a0a0a');
  ell(tx0+26, -4, 9, 7, '#0a0a0a');
  ell(tx0-24, -6, 5, 4, '#181818');
  ell(tx0+24, -6, 5, 4, '#181818');

  const hx=lx*0.7;
  if(chugging){ctx.save();ctx.translate(hx*0.3,-8);ctx.rotate(-0.35);}
  ell(hx,-28,20,20,'#0e0e0e');
  ell(hx,-28,16,16,'#1c1c1c');
  ell(hx,-42,9,5,'#0a0a0a');
  ell(hx-8,-40,6,4,'#121212');
  ell(hx+8,-40,6,4,'#121212');
  ell(hx-18,-26,5,7,'#0c0c0c');
  ell(hx-17,-26,3,5,'#1a1a1a');
  ell(hx+18,-26,5,7,'#0c0c0c');
  ell(hx+17,-26,3,5,'#1a1a1a');
  ell(hx,-34,11,7,'#2a2a2a');

  ell(hx,-15,14,11,'#1a1a1a');
  ell(hx,-14,11,8,'#282828');
  px(hx-10,-14,20,7,'#f5f0e0');
  px(hx-4,-13,4,5,'#fff');
  px(hx+1,-13,4,5,'#fff');
  px(hx-10,-15,4,8,'#fff');
  px(hx-9,-16,2,2,'#fff');
  px(hx+6,-15,4,8,'#fff');
  px(hx+7,-16,2,2,'#fff');
  px(hx-10,-15,20,2,'#4a2a2a');
  px(hx-9,-6,18,3,'#0a0a0a');
  px(hx-7,-5,14,2,'#1a1a1a');

  px(hx-15,-31,30,11,'#050505');
  px(hx-13,-29,11,7,'#0e2040');
  px(hx+2,-29,11,7,'#0e2040');
  px(hx-11+leanAmt,-28,4,3,'#3a7ec8');
  px(hx+4+leanAmt,-28,4,3,'#3a7ec8');
  px(hx-1,-27,3,3,'#0a0a0a');
  if(chugging){ctx.restore();}

  if(chugging){
    ell(-22,-28,9,14,'#121212');
    ell(-22,-28,6,11,'#222');
    ell(18,-30,9,14,'#121212');
    ell(18,-30,6,11,'#222');
    ell(-12,-42,6,5,'#1a1a1a');
    ell(10,-44,6,5,'#1a1a1a');
    ctx.save();
    ctx.translate(2,-48);
    ctx.rotate(-0.85);
    px(-7,-2,14,22,'#c8d4e0');
    px(-6,-1,12,20,'#e8f0f8');
    px(-5,0,10,18,'#f4f8fc');
    px(-5,0,2,18,'#ffffff');
    px(3,0,2,18,'#b8c8d8');
    px(-6,-4,12,3,'#a8b8c8');
    px(-5,-5,10,2,'#d0dce8');
    ctx.fillStyle='#1e6bb8';
    ctx.beginPath();ctx.moveTo(-4,12);ctx.lineTo(0,4);ctx.lineTo(4,12);ctx.closePath();ctx.fill();
    ctx.fillStyle='#2a88d0';
    ctx.beginPath();ctx.moveTo(-3,12);ctx.lineTo(0,6);ctx.lineTo(3,12);ctx.closePath();ctx.fill();
    px(-1,4,2,2,'#fff');
    px(-5,13,10,3,'#1a5aa0');
    px(-4,14,8,1,'#fff');
    ctx.fillStyle='#e8c020';ctx.globalAlpha=0.85;
    ctx.beginPath();ctx.moveTo(-2,-4);ctx.lineTo(2,-4);ctx.lineTo(4,-14);ctx.lineTo(-1,-12);ctx.closePath();ctx.fill();
    ctx.fillStyle='#f0d040';
    ctx.beginPath();ctx.moveTo(-1,-4);ctx.lineTo(1,-4);ctx.lineTo(2,-12);ctx.lineTo(0,-11);ctx.closePath();ctx.fill();
    ctx.globalAlpha=1;
    ell(3,-15,2,2,'#fff8cc');
    ell(5,-17,1.5,1.5,'#fff0aa');
    ell(1,-16,1.5,1.5,'#ffe680');
    ctx.restore();
  } else {
    const armSwing=leanAmt*4;
    ell(-30-armSwing,6,10,18,'#121212');
    ell(-30-armSwing,6,7,14,'#222');
    ell(-32-armSwing,20,7,8,'#1a1a1a');
    ell(30+armSwing,6,10,18,'#121212');
    ell(30+armSwing,6,7,14,'#222');
    ell(32+armSwing,20,7,8,'#1a1a1a');
    ell(-28-armSwing,-2,6,5,'#0c0c0c');
    ell(28+armSwing,-2,6,5,'#0c0c0c');
    ctx.strokeStyle='#1a1a1a';ctx.lineWidth=3;
    ctx.beginPath();ctx.moveTo(-28-armSwing,18);ctx.lineTo(-42-armSwing*0.5,60);ctx.stroke();
    px(-46-armSwing*0.5,58,10,4,'#222');
    ctx.beginPath();ctx.moveTo(28+armSwing,18);ctx.lineTo(42+armSwing*0.5,60);ctx.stroke();
    px(36+armSwing*0.5,58,10,4,'#222');
  }

  if(speed>1.4){
    ctx.globalAlpha=.35;
    px(-44,-8+(Math.random()*4-2),10,2,'#a0c8e8');
    px(-46,12+(Math.random()*4-2),12,2,'#a0c8e8');
    px(36,-4+(Math.random()*4-2),10,2,'#a0c8e8');
    ctx.globalAlpha=1;
  }
  ctx.restore();
}
