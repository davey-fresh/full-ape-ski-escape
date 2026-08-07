// FULL APE SKI ESCAPE v0.15 — Titus (skis, boots, muscle, chug)
function drawTitus(tx,ty,leanAmt,bob,chugging,speed){
  const lx=leanAmt*7;
  ctx.save();
  ctx.translate(tx,ty+bob);
  ctx.rotate(leanAmt*0.12);

  ell(lx*0.3,70,38+Math.abs(leanAmt)*5,9,'rgba(0,0,0,0.3)');

  // ===== DOWNHILL SKIS (long, tapered tips, not sewer lids) =====
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

  // ===== RED SKI BOOTS =====
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

  if(chugging){
    ell(-26,-18,9,16,'#121212');
    ell(-26,-18,6,12,'#222');
    ell(26,-18,9,16,'#121212');
    ell(26,-18,6,12,'#222');
    px(-10,-54,20,26,'#8aa0b8');
    px(-8,-52,16,20,'#a8c0d8');
    px(-7,-50,14,12,'#e8c020');
    px(-6,-49,12,8,'#f0d040');
    px(-7,-56,14,6,'#c8d8e8');
    px(-6,-58,12,3,'#e0e8f0');
    ell(-4,-62,4,4,'#fff8cc');
    ell(3,-64,3,3,'#fff0aa');
    ell(0,-66,3,3,'#ffe680');
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
